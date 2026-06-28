import type { BeforeListServerProps } from 'payload'

import { getSelectedTenantId, isAdminUser } from '@/access/tenantAccess'
import { TenantScopeSelect } from '@/components/admin/TenantScopeSelect'

export async function TenantScopeNotice({
  payload,
  searchParams,
  user,
}: BeforeListServerProps) {
  if (!isAdminUser(user)) {
    return null
  }

  const selectedTenantId = getSelectedTenantId(searchParams)

  const tenants = await payload.find({
    collection: 'tenants',
    depth: 0,
    limit: 50,
    overrideAccess: true,
    pagination: false,
    sort: 'name',
  })

  return (
    <div className="tenant-scope-notice">
      <TenantScopeSelect
        selectedTenantId={selectedTenantId}
        tenants={tenants.docs.map((tenant) => ({
          id: tenant.id,
          name: tenant.name,
        }))}
      />
    </div>
  )
}
