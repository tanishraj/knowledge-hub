import type { Access, FieldAccess, PayloadRequest, Where } from 'payload'

type TenantUser = {
  id?: number | string | null
  role?: 'admin' | 'client' | null
  tenant?: number | string | { id?: number | string | null } | null
}

const impossibleWhere: Where = {
  id: {
    equals: '__forbidden__',
  },
}

export const getTenantId = (user?: TenantUser | null): number | string | null => {
  if (!user?.tenant) {
    return null
  }

  if (typeof user.tenant === 'object') {
    return user.tenant.id ?? null
  }

  return user.tenant
}

export const isAdminUser = (user?: TenantUser | null) => user?.role === 'admin'

export const isAdminAccess: Access = ({ req: { user } }) => isAdminUser(user as TenantUser)

export const isAdminFieldAccess: FieldAccess = ({ req: { user } }) =>
  isAdminUser(user as TenantUser)

export const isAdminOrSelfAccess: Access = ({ req: { user } }) => {
  const currentUser = user as TenantUser | null | undefined

  if (!currentUser) {
    return false
  }

  if (isAdminUser(currentUser)) {
    return true
  }

  return {
    id: {
      equals: currentUser.id,
    },
  }
}

export const isAdminOrOwnTenantAccess: Access = ({ req: { user } }) => {
  const currentUser = user as TenantUser | null | undefined

  if (!currentUser) {
    return false
  }

  if (isAdminUser(currentUser)) {
    return true
  }

  const tenantId = getTenantId(currentUser)

  if (!tenantId) {
    return false
  }

  return {
    id: {
      equals: tenantId,
    },
  }
}

export const canManageTenantContent: Access = ({ req: { user } }) => {
  const currentUser = user as TenantUser | null | undefined

  return Boolean(currentUser && (isAdminUser(currentUser) || getTenantId(currentUser)))
}

export const canReadTenantContent: Access = ({ req: { user } }) => {
  const currentUser = user as TenantUser | null | undefined

  if (!currentUser) {
    return true
  }

  if (isAdminUser(currentUser)) {
    return true
  }

  const tenantId = getTenantId(currentUser)

  if (!tenantId) {
    return false
  }

  return {
    tenant: {
      equals: tenantId,
    },
  }
}

export const tenantBaseFilter = ({ req }: { req: PayloadRequest }) => {
  const currentUser = req.user as TenantUser | null | undefined

  if (!currentUser || isAdminUser(currentUser)) {
    return null
  }

  const tenantId = getTenantId(currentUser)

  if (!tenantId) {
    return impossibleWhere
  }

  return {
    tenant: {
      equals: tenantId,
    },
  }
}
