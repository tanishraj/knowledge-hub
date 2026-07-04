import { slugField, type CollectionConfig } from 'payload'

import { HeaderNavbar12Block } from '../blocks/HeaderNavbar12/config'

export const Headers: CollectionConfig = {
  slug: 'headers',
  labels: {
    singular: 'Header',
    plural: 'Headers',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    description: 'Reusable site header presets powered by header layout blocks.',
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
      blocks: [HeaderNavbar12Block],
      admin: {
        initCollapsed: true,
        description: 'Select the header block variant to use for this preset.',
      },
    },
  ],
}
