import {
  getDefaultTenantValue,
  isAdminAccess,
  isAdminFieldAccess,
  isAdminOrSelfAccess,
  isAdminUser,
  selectedTenantBaseFilter,
} from '@/access/tenantAccess'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    baseFilter: selectedTenantBaseFilter,
    components: {
      beforeList: ['@/components/admin/TenantScopeNotice#TenantScopeNotice'],
    },
    defaultColumns: ['email', 'role', 'tenant', 'updatedAt'],
    useAsTitle: 'email',
    hidden: ({ user }) => !isAdminUser(user),
  },
  auth: true,
  access: {
    create: isAdminAccess,
    delete: isAdminAccess,
    read: isAdminOrSelfAccess,
    update: isAdminOrSelfAccess,
  },
  fields: [
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      admin: {
        position: 'sidebar',
        description: 'Leave empty for platform-wide administrators.',
      },
      access: {
        create: isAdminFieldAccess,
        update: isAdminFieldAccess,
      },
      defaultValue: ({ req, user }) => getDefaultTenantValue({ req, user }),
      saveToJWT: true,
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'client',
      options: [
        {
          label: 'Super Admin',
          value: 'admin',
        },
        {
          label: 'Customer',
          value: 'client',
        },
      ],
      access: {
        create: isAdminFieldAccess,
        update: isAdminFieldAccess,
      },
      required: true,
      saveToJWT: true,
    },
  ],
}
