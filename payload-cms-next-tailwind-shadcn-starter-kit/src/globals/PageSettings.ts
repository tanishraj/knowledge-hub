import type { GlobalConfig } from 'payload'

export const PageSettings: GlobalConfig = {
  slug: 'page-settings',
  label: 'Page Settings',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Header',
          fields: [
            {
              name: 'activeHeader',
              type: 'relationship',
              relationTo: 'headers',
              admin: {
                description: 'Choose which saved header preset should render site-wide.',
              },
            },
          ],
        },
      ],
    },
  ],
}
