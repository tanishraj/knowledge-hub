import {
  isAdminAccess,
  isAdminOrOwnTenantAccess,
  isAdminUser,
} from '@/access/tenantAccess'
import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    useAsTitle: 'name',
    hidden: ({ user }) => !isAdminUser(user),
    defaultColumns: ['name', 'slug', 'updatedAt'],
  },
  access: {
    create: isAdminAccess,
    delete: isAdminAccess,
    read: isAdminOrOwnTenantAccess,
    update: isAdminAccess,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Used in tenant-aware preview URLs like /acme/home.',
        position: 'sidebar',
      },
    },
  ],
}
