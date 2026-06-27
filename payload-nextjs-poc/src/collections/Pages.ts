import {
  canManageTenantContent,
  canReadTenantContent,
  isAdminFieldAccess,
  tenantBaseFilter,
} from '@/access/tenantAccess'
import { Hero } from '@/blocks/Hero'
import { attachTenantFromUser } from '@/hooks/attachTenantFromUser'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    baseFilter: tenantBaseFilter,
    livePreview: {
      breakpoints: [
        {
          name: 'desktop',
          label: 'Desktop',
          width: 1440,
          height: 900,
        },
        {
          name: 'tablet',
          label: 'Tablet',
          width: 834,
          height: 1112,
        },
        {
          name: 'mobile',
          label: 'Mobile',
          width: 390,
          height: 844,
        },
      ],
      url: ({ data }) => {
        if (!data?.id) {
          return null
        }

        const appURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

        return `${appURL}/preview/page/${data.id}`
      },
    },
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'tenant', 'updatedAt'],
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
  indexes: [
    {
      fields: ['tenant', 'slug'],
      unique: true,
    },
  ],
  fields: [
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
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        description: 'Use standard slugs like home, about, or contact.',
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Hero],
      required: true,
    },
  ],
  versions: {
    drafts: true,
  },
}
