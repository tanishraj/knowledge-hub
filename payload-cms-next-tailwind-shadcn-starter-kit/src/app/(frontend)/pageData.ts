import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

import type { Metadata } from 'next'
import type { Page } from '@/payload-types'
import { getPageHref, getPageSlugSegments } from '@/lib/pagePaths'

const extractPageID = (value: number | Page | null | undefined): number | null => {
  if (typeof value === 'number') {
    return value
  }

  if (typeof value === 'object' && value !== null) {
    return value.id
  }

  return null
}

const getPageSettings = cache(async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  return payload.findGlobal({
    slug: 'page-settings',
    depth: 0,
  })
})

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

const getPageByPathname = cache(async (pathname: string): Promise<Page | null> => {
  const segments = pathname.split('/').filter(Boolean)

  if (!segments.length) {
    return null
  }

  const payload = await getPayload({
    config: configPromise,
  })

  const leafSlug = segments[segments.length - 1]
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: leafSlug,
      },
    },
    depth: segments.length,
    limit: 1,
  })

  const page = result.docs[0] ?? null

  if (!page) {
    return null
  }

  const resolvedSegments = getPageSlugSegments(page)

  return resolvedSegments.join('/') === pathname ? page : null
})

export async function getPageByPath(segments: string[]): Promise<Page | null> {
  return getPageByPathname(segments.join('/'))
}

export const getHomepagePage = cache(async (): Promise<Page | null> => {
  const homepageID = extractPageID((await getPageSettings()).homepage)

  if (homepageID == null) {
    return null
  }

  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'pages',
    where: {
      and: [
        {
          id: {
            equals: homepageID,
          },
        },
        {
          _status: {
            equals: 'published',
          },
        },
      ],
    },
    depth: 1,
    limit: 1,
  })

  return result.docs[0] ?? null
})

export async function getHomepagePath(): Promise<string | null> {
  const homepage = await getHomepagePage()
  const href = getPageHref(homepage)

  if (!href || href === '/') {
    return null
  }

  return href
}

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

export async function getPageMetadataByPath(segments: string[]): Promise<Metadata> {
  const page = await getPageByPath(segments)

  if (!page) {
    return {}
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  }
}

export async function getHomepageMetadata(): Promise<Metadata> {
  const page = await getHomepagePage()

  if (!page) {
    return {}
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  }
}
