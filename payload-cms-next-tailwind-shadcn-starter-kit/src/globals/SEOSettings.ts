import type { GlobalConfig } from 'payload'

export const SEOSettings: GlobalConfig = {
  slug: 'seo-settings',
  label: 'SEO Settings',
  admin: {
    group: 'Settings',
    description: 'Default SEO values used when a page does not provide its own overrides.',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'defaultTitle',
      type: 'text',
    },
    {
      name: 'titleTemplate',
      type: 'text',
      admin: {
        description: 'Example: %s | Your Site Name',
      },
    },
    {
      name: 'defaultDescription',
      type: 'textarea',
    },
    {
      name: 'defaultImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'robots',
      type: 'select',
      defaultValue: 'index,follow',
      options: [
        {
          label: 'Index, Follow',
          value: 'index,follow',
        },
        {
          label: 'No Index, Follow',
          value: 'noindex,follow',
        },
        {
          label: 'Index, No Follow',
          value: 'index,nofollow',
        },
        {
          label: 'No Index, No Follow',
          value: 'noindex,nofollow',
        },
      ],
    },
    {
      name: 'googleSiteVerification',
      type: 'text',
    },
  ],
}
