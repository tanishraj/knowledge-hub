import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Main headline',
      required: true,
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Supporting copy',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'CTA button text',
      required: true,
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'CTA button link',
      defaultValue: '/admin',
      required: true,
    },
  ],
}
