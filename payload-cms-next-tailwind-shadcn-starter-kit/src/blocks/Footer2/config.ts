import type { Block } from 'payload'

export const Footer2Block: Block = {
  slug: 'footer2',
  interfaceName: 'Footer2Block',
  labels: {
    singular: 'Footer 2',
    plural: 'Footer 2 Blocks',
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'sections',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      labels: {
        singular: 'Section',
        plural: 'Sections',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          minRows: 1,
          labels: {
            singular: 'Link',
            plural: 'Links',
          },
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
    },
    {
      name: 'legalLinks',
      type: 'array',
      labels: {
        singular: 'Legal Link',
        plural: 'Legal Links',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
