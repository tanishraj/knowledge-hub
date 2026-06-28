'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type TenantOption = {
  id: number | string
  name: string
}

type Props = {
  selectedTenantId?: number | string | null
  tenants: TenantOption[]
}

export function TenantScopeSelect({ selectedTenantId, tenants }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (nextTenantId: string) => {
    const nextSearchParams = new URLSearchParams(searchParams.toString())

    if (nextTenantId) {
      nextSearchParams.set('tenant', nextTenantId)
    } else {
      nextSearchParams.delete('tenant')
    }

    const nextQuery = nextSearchParams.toString()

    router.push(nextQuery ? `${pathname}?${nextQuery}` : pathname)
  }

  return (
    <label className="tenant-scope-select">
      <span className="tenant-scope-select__label">Tenant</span>

      <select
        className="tenant-scope-select__input"
        onChange={(event) => {
          handleChange(event.target.value)
        }}
        value={selectedTenantId ? String(selectedTenantId) : ''}
      >
        <option value="">All tenants</option>

        {tenants.map((tenant) => (
          <option key={tenant.id} value={String(tenant.id)}>
            {tenant.name}
          </option>
        ))}
      </select>
    </label>
  )
}
