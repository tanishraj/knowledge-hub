import {
  canManageTenantContent,
  canReadTenantContent,
  isAdminFieldAccess,
  tenantBaseFilter,
} from '@/access/tenantAccess'
import { attachTenantFromUser } from '@/hooks/attachTenantFromUser'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    baseFilter: tenantBaseFilter,
    defaultColumns: ['filename', 'alt', 'tenant', 'updatedAt'],
  },
  access: {
    create: canManageTenantContent,
    delete: canManageTenantContent,
    read: canReadTenantContent,
    update: canManageTenantContent,
  },
  hooks: {
    beforeChange: [attachTenantFromUser],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      required: true,
      admin: {
        position: 'sidebar',
      },
      access: {
        create: isAdminFieldAccess,
        update: isAdminFieldAccess,
      },
      defaultValue: ({ user }) => {
        if (!user?.tenant) {
          return null
        }

        return typeof user.tenant === 'object' ? user.tenant.id : user.tenant
      },
    },
  ],
  upload: true,
}
