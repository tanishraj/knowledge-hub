import type { Block } from 'payload'

export const Feature: Block = {
  slug: 'feature',
  interfaceName: 'FeatureBlock',
  labels: {
    singular: 'Feature',
    plural: 'Features',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Built for teams',
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
      name: 'items',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
