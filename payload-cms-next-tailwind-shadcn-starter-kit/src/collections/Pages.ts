import { slugField, type CollectionConfig } from 'payload'

import { Footer2Block } from '../blocks/Footer2/config'
import { Hero36Block } from '../blocks/Hero36/config'

const defaultPreviewURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description:
      'Flexible website pages with reusable layout blocks, SEO controls, and publishing settings.',
    listSearchableFields: ['title', 'slug'],
    livePreview: {
      breakpoints: [
        {
          name: 'desktop',
          label: 'Desktop',
          width: 1440,
          height: 900,
        },
        {
          name: 'tablet',
          label: 'Tablet',
          width: 834,
          height: 1112,
        },
        {
          name: 'mobile',
          label: 'Mobile',
          width: 390,
          height: 844,
        },
      ],
      url: ({ data }) => {
        if (typeof data?.slug !== 'string' || !data.slug) {
          return null
        }

        return `${defaultPreviewURL}/preview/${data.slug}`
      },
    },
    components: {
      edit: {
        beforeDocumentControls: [
          './components/admin/LivePreviewFieldBridge#LivePreviewFieldBridge',
        ],
      },
    },
  },
  access: {
    read: () => true,
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
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Hero36Block, Footer2Block],
              admin: {
                initCollapsed: true,
                description: 'Compose the page with reusable frontend sections.',
              },
            },
            {
              name: 'content',
              type: 'richText',
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              required: true,
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'parent',
              type: 'relationship',
              relationTo: 'pages',
              admin: {
                description: 'Use this for nested page hierarchies like /services/web-development.',
              },
            },
            {
              name: 'showInNavigation',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
}
