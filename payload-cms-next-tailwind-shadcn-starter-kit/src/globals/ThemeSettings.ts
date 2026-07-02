import type { GlobalConfig } from 'payload'

export const ThemeSettings: GlobalConfig = {
  slug: 'theme-settings',
  label: 'Theme Settings',
  admin: {
    group: 'Settings',
    description: 'Control the frontend color palette, mode, and brand assets.',
  },
  fields: [
    {
      name: 'themeColor',
      type: 'select',
      defaultValue: 'default',
      required: true,
      admin: {
        description: 'Select the primary accent palette used across the frontend.',
      },
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
      admin: {
        description:
          'Choose whether the site follows the system preference or forces light/dark mode.',
      },
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
  ],
}
