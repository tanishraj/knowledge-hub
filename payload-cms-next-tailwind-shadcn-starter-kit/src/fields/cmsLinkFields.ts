import type { Field } from 'payload'

export type LinkType = 'page' | 'custom'

const validateRequiredLinkField =
  (linkType: LinkType, message: string) =>
  (value: unknown, { siblingData }: { siblingData?: { linkType?: LinkType | null } }) => {
    if (siblingData?.linkType === linkType && !value) {
      return message
    }

    return true
  }

export const createCmsLinkFields = (): Field[] => {
  return [
    {
      name: 'linkType',
      type: 'radio',
      dbName: 'type',
      required: true,
      defaultValue: 'page',
      options: [
        {
          label: 'Page',
          value: 'page',
        },
        {
          label: 'Custom URL',
          value: 'custom',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    } as any,
    {
      name: 'page',
      type: 'relationship',
      dbName: 'page',
      relationTo: 'pages',
      validate: validateRequiredLinkField('page', 'Select a page.'),
      admin: {
        condition: (_: unknown, siblingData: { linkType?: LinkType | null }) =>
          siblingData?.linkType === 'page',
      },
    } as any,
    {
      name: 'url',
      label: 'Custom URL',
      type: 'text',
      dbName: 'url',
      validate: validateRequiredLinkField('custom', 'Enter a custom URL.'),
      admin: {
        condition: (_: unknown, siblingData: { linkType?: LinkType | null }) =>
          siblingData?.linkType === 'custom',
        placeholder: '/contact or https://example.com',
      },
    } as any,
    {
      name: 'openInNewTab',
      type: 'checkbox',
      dbName: 'newTab',
      defaultValue: false,
    } as any,
  ]
}
