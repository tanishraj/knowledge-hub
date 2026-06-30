import type { Block } from 'payload'

export const CallToAction: Block = {
  slug: 'callToAction',
  interfaceName: 'CallToActionBlock',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Get started today',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'primaryLabel',
          type: 'text',
          required: true,
        },
        {
          name: 'primaryHref',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'secondaryLabel',
          type: 'text',
        },
        {
          name: 'secondaryHref',
          type: 'text',
        },
      ],
    },
  ],
}
