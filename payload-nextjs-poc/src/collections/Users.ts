import {
  isAdminAccess,
  isAdminFieldAccess,
  isAdminOrSelfAccess,
  isAdminUser,
} from '@/access/tenantAccess'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
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
