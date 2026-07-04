import type { Block, Field } from 'payload'

type LinkType = 'page' | 'custom'

const validateRequiredLinkField =
  (linkType: LinkType, message: string) =>
  (value: unknown, { siblingData }: { siblingData?: { linkType?: LinkType | null } }) => {
    if (siblingData?.linkType === linkType && !value) {
      return message
    }

    return true
  }

const createLinkFields = ({ includeDescription = false }: { includeDescription?: boolean } = {}): Field[] => {
  const fields: Field[] = [
    {
      name: 'label',
      type: 'text',
      required: true,
      dbName: 'label',
    } as any,
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

  if (includeDescription) {
    fields.splice(1, 0, {
      name: 'description',
      type: 'textarea',
      dbName: 'desc',
    } as any)
  }

  return fields
}

export const HeaderNavbar12Block: Block = {
  slug: 'headerNavbar12',
  interfaceName: 'HeaderNavbar12Block',
  labels: {
    singular: 'Header Navbar 12',
    plural: 'Header Navbar 12 Blocks',
  },
  fields: [
    {
      name: 'logoMode',
      type: 'radio',
      required: true,
      defaultValue: 'siteSettingsLogo',
      options: [
        {
          label: 'Use Site Settings Logo',
          value: 'siteSettingsLogo',
        },
        {
          label: 'Use Custom Logo',
          value: 'customLogo',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'customLogo',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      },
      admin: {
        condition: (_: unknown, siblingData: { logoMode?: 'siteSettingsLogo' | 'customLogo' | null }) =>
          siblingData?.logoMode === 'customLogo',
      },
    },
    {
      name: 'navigationItems',
      type: 'array',
      dbName: 'nav',
      minRows: 1,
      labels: {
        singular: 'Navigation Item',
        plural: 'Navigation Items',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        ...createLinkFields(),
        {
          name: 'children',
          type: 'array',
          dbName: 'child',
          labels: {
            singular: 'Dropdown Item',
            plural: 'Dropdown Items',
          },
          admin: {
            initCollapsed: true,
            description: 'Add child items to turn this navigation item into a dropdown.',
          },
          fields: createLinkFields({
            includeDescription: true,
          }),
        } as any,
      ],
    } as any,
    {
      name: 'secondaryActions',
      type: 'array',
      dbName: 'secondary',
      minRows: 0,
      maxRows: 2,
      labels: {
        singular: 'Secondary Action',
        plural: 'Secondary Actions',
      },
      admin: {
        initCollapsed: true,
        description: 'Optional links shown to the right of the navigation.',
      },
      fields: createLinkFields(),
    } as any,
    {
      name: 'cta',
      label: 'Primary CTA',
      type: 'group',
      dbName: 'cta',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
        },
        ...createLinkFields(),
      ],
    } as any,
  ],
}
