import {
  slugField,
  type CollectionConfig,
  type RelationshipFieldSingleValidation,
} from 'payload'

import type { Page } from '@/payload-types'

import { Hero36Block } from '../blocks/Hero36/config'
import { createRedirectsForChangedPagePath } from '../hooks/createRedirectsForChangedPagePath'
import { populatePageUrlPreview } from '../hooks/populatePageUrlPreview'
import { preventReferencedPageUnpublish } from '../hooks/preventReferencedPageUnpublish'
import {
  syncNavigationLinkAfterChange,
  syncNavigationLinkAfterDelete,
} from '../hooks/syncNavigationLinkForPage'

const extractPageID = (value: number | Page | null | undefined): number | null => {
  if (typeof value === 'number') {
    return value
  }

  if (typeof value === 'object' && value !== null) {
    return value.id
  }

  return null
}

const validateParentRelationship: RelationshipFieldSingleValidation = async (
  value,
  { id, req },
) => {
  const parentID = extractPageID(value as number | Page | null | undefined)

  if (!parentID || id == null) {
    return true
  }

  const currentPageID = typeof id === 'string' ? Number(id) : id

  if (parentID === currentPageID) {
    return 'A page cannot be its own parent.'
  }

  const visited = new Set<number>([currentPageID])
  let nextParentID: number | null = parentID

  while (nextParentID != null) {
    if (visited.has(nextParentID)) {
      return 'This parent selection would create a circular page hierarchy.'
    }

    visited.add(nextParentID)

    const parentPage = await req.payload.findByID({
      collection: 'pages',
      id: nextParentID,
      depth: 0,
      req,
    })

    nextParentID = extractPageID(parentPage.parent as number | Page | null | undefined)
  }

  return true
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description:
      'Flexible website pages with reusable layout blocks, SEO controls, and publishing settings.',
    listSearchableFields: ['title', 'slug'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterRead: [populatePageUrlPreview],
    afterChange: [syncNavigationLinkAfterChange, createRedirectsForChangedPagePath],
    afterDelete: [syncNavigationLinkAfterDelete],
    beforeChange: [preventReferencedPageUnpublish],
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
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Hero36Block],
              admin: {
                initCollapsed: true,
                description:
                  'Compose the page with reusable frontend sections.',
              },
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
              name: 'publicUrlPreview',
              label: 'Public URL',
              type: 'text',
              virtual: true,
              admin: {
                readOnly: true,
                description: 'Resolved from the current saved slug and parent hierarchy.',
              },
            },
            {
              name: 'parent',
              type: 'relationship',
              relationTo: 'pages',
              filterOptions: ({ id }) => {
                if (id == null) {
                  return true
                }

                return {
                  id: {
                    not_equals: id,
                  },
                }
              },
              validate: validateParentRelationship,
              admin: {
                description: 'Use this for nested page hierarchies like /services/web-development.',
              },
            },
            {
              name: 'showInNavigation',
              type: 'checkbox',
              defaultValue: false,
              label: 'Sync to Navigation Links',
              admin: {
                description: 'Create or maintain a reusable link record for this page.',
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
}
