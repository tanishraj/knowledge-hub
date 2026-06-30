import { CallToAction } from '@/blocks/CallToAction'
import { FAQ } from '@/blocks/FAQ'
import { Feature } from '@/blocks/Feature'
import { Testimonial } from '@/blocks/Testimonial'
import type { CollectionConfig } from 'payload'

const previewBreakpoints = [
  { name: 'desktop', label: 'Desktop', width: 1440, height: 900 },
  { name: 'tablet', label: 'Tablet', width: 1055, height: 1181 },
  { name: 'mobile', label: 'Mobile', width: 390, height: 844 },
]

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      breakpoints: previewBreakpoints,
      url: ({ data }) => {
        if (!data?.id) {
          return null
        }

        const appURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

        return `${appURL}/preview/page/${data.id}`
      },
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroBackgroundColor',
              type: 'select',
              defaultValue: 'background',
              options: [
                { label: 'Background', value: 'background' },
                { label: 'Muted', value: 'muted' },
                { label: 'Primary', value: 'primary' },
              ],
            },
            {
              name: 'heroDesignVersion',
              type: 'select',
              defaultValue: 'hero231',
              options: [
                { label: 'HERO231', value: 'hero231' },
                { label: 'HERO12', value: 'hero12' },
                { label: 'HERO18', value: 'hero18' },
              ],
              required: true,
            },
            {
              name: 'heroBadge',
              type: 'text',
              defaultValue: 'Your Website Builder',
            },
            {
              name: 'heroTagline',
              type: 'text',
              required: true,
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'heroPrimaryLabel',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'heroPrimaryHref',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'heroSecondaryLabel',
                  type: 'text',
                },
                {
                  name: 'heroSecondaryHref',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Feature, Testimonial, CallToAction, FAQ],
              required: true,
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
            },
            {
              name: 'metaDescription',
              type: 'textarea',
            },
          ],
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: true,
  },
}
