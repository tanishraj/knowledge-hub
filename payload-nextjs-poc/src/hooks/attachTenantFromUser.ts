import { getTenantId, isAdminUser } from '@/access/tenantAccess'
import type { CollectionBeforeChangeHook } from 'payload'

export const attachTenantFromUser: CollectionBeforeChangeHook = ({ data, req }) => {
  const currentUser = req.user

  if (!currentUser || isAdminUser(currentUser)) {
    return data
  }

  const tenantId = getTenantId(currentUser)

  if (!tenantId) {
    return data
  }

  return {
    ...data,
    tenant: tenantId,
  }
}
