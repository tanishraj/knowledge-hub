import type { GlobalConfig } from 'payload'

export const ThemeSettings: GlobalConfig = {
  slug: 'theme-setting',
  label: 'Theme Setting',
    admin: {
        group: 'Settings',
    },
  fields: [
    {
      name: 'themeColor',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
        {
          label: 'Amber',
          value: 'amber',
        },
      ],
    },
    {
        name: 'colorScheme',
        type: 'radio',
        defaultValue: 'system',
        required: true,
        options: [
            {
                label: 'System',
                value: 'system',
            },
            {
                label: 'Light',
                value: 'light',
            },
            {
                label: 'Dark',
                value: 'dark',
            },
        ],
    },
    {
      name: 'themeLogo',
      type: 'upload',
      relationTo: 'media',
    },
  ]
}