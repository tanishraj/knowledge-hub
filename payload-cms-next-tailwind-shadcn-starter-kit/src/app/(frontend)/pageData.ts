import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

import type { Metadata } from 'next'
import type { Page } from '@/payload-types'

export const getPageBySlug = cache(async (slug: string): Promise<Page | null> => {
  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
    limit: 1,
  })

  return result.docs[0] ?? null
})

export async function getPageMetadataBySlug(slug: string): Promise<Metadata> {
  const page = await getPageBySlug(slug)

  if (!page) {
    return {}
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  }
}
