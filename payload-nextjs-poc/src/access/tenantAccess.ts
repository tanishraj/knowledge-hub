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

type SearchParamsLike =
  | PayloadRequest['query']
  | Record<string, number | string | string[] | undefined>
  | URLSearchParams
  | null
  | undefined

const getFirstValue = (
  value: number | string | string[] | unknown,
): number | string | null => {
  if (Array.isArray(value)) {
    return getFirstValue(value[0])
  }

  if (typeof value === 'number' || typeof value === 'string') {
    return value
  }

  return null
}

const getTenantWhere = (field: string, tenantId: number | string): Where => ({
  [field]: {
    equals: tenantId,
  },
})

export const getTenantId = (user?: TenantUser | null): number | string | null => {
  if (!user?.tenant) {
    return null
  }

  if (typeof user.tenant === 'object') {
    return user.tenant.id ?? null
  }

  return user.tenant
}

export const getSelectedTenantId = (
  searchParams: SearchParamsLike,
): number | string | null => {
  if (!searchParams) {
    return null
  }

  if (searchParams instanceof URLSearchParams) {
    return getFirstValue(searchParams.get('tenant'))
  }

  return getFirstValue(searchParams.tenant)
}

export const getSelectedTenantIdFromRequest = (
  req: PayloadRequest,
): number | string | null =>
  getSelectedTenantId(req.searchParams) ?? getSelectedTenantId(req.query)

export const getDefaultTenantValue = ({
  req,
  user,
}: {
  req: PayloadRequest
  user?: TenantUser | null
}): number | string | null => {
  const currentUser = user ?? null

  if (isAdminUser(currentUser)) {
    return getSelectedTenantIdFromRequest(req)
  }

  return getTenantId(currentUser)
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

  return getTenantWhere('tenant', tenantId)
}

export const selectedTenantBaseFilter = ({
  field = 'tenant',
  req,
}: {
  field?: string
  req: PayloadRequest
}) => {
  const currentUser = req.user as TenantUser | null | undefined

  if (!currentUser || !isAdminUser(currentUser)) {
    return null
  }

  const selectedTenantId = getSelectedTenantIdFromRequest(req)

  if (!selectedTenantId) {
    return null
  }

  return getTenantWhere(field, selectedTenantId)
}

export const tenantBaseFilter = ({
  field = 'tenant',
  req,
}: {
  field?: string
  req: PayloadRequest
}) => {
  const currentUser = req.user as TenantUser | null | undefined

  const adminFilter = selectedTenantBaseFilter({
    field,
    req,
  })

  if (adminFilter) {
    return adminFilter
  }

  if (!currentUser || isAdminUser(currentUser)) {
    return null
  }

  const tenantId = getTenantId(currentUser)

  if (!tenantId) {
    return impossibleWhere
  }

  return getTenantWhere(field, tenantId)
}
