import { CollectionConfig } from 'payload'
import { loggedIn } from './access/loggedIn'
import { formatSlug } from './hooks/formatSlug'
import { defaultLexical } from '@/fields/lexicalEditor'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
    create: loggedIn,
    update: loggedIn,
    delete: loggedIn,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
    livePreview: {
      url: ({ data }) => {
        const isHomePage = data.slug === 'home'
        return `${process.env.NEXT_PUBLIC_SERVER_URL}${!isHomePage ? `/${data.slug}` : ''}`
      },
    },
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      label: 'Slug',
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
      index: true,
    },
  ],
  trash: true,
}
