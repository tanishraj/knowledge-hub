import { slugField, type CollectionConfig } from 'payload'

import { Footer2Block } from '../blocks/Footer2/config'

export const Footers: CollectionConfig = {
  slug: 'footers',
  labels: {
    singular: 'Footer',
    plural: 'Footers',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    description: 'Reusable site footer presets powered by footer layout blocks.',
    listSearchableFields: ['title', 'slug'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  timestamps: true,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField({
      useAsSlug: 'title',
    }),
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      minRows: 1,
      maxRows: 1,
      blocks: [Footer2Block],
      admin: {
        initCollapsed: true,
        description: 'Select the footer block variant to use for this preset.',
      },
    },
  ],
}
