import type { PayloadRequest } from 'payload'

import type { Page } from '@/payload-types'

type PagePathSource = Pick<Page, 'parent' | 'slug'>

export const isPageDoc = (value: number | Page | null | undefined): value is Page => {
  return typeof value === 'object' && value !== null
}

export const getPageID = (value: number | Page | null | undefined): number | null => {
  if (typeof value === 'number') {
    return value
  }

  if (isPageDoc(value)) {
    return value.id
  }

  return null
}

export const getPageSlugSegments = (page: Page): string[] => {
  const segments = [page.slug]
  let currentParent = page.parent

  while (isPageDoc(currentParent)) {
    segments.unshift(currentParent.slug)
    currentParent = currentParent.parent
  }

  return segments
}

export const getPageHref = (page: number | Page | null | undefined): string | undefined => {
  if (!isPageDoc(page)) {
    return undefined
  }

  return `/${getPageSlugSegments(page).join('/')}`
}

export const getPageHrefFromSource = async (
  page: PagePathSource,
  req: PayloadRequest,
): Promise<string | null> => {
  if (!page.slug) {
    return null
  }

  const segments = [page.slug]
  let currentParent = page.parent

  while (currentParent != null) {
    if (isPageDoc(currentParent)) {
      segments.unshift(currentParent.slug)
      currentParent = currentParent.parent
      continue
    }

    const parentPage = await req.payload.findByID({
      collection: 'pages',
      id: currentParent,
      depth: 0,
      req,
    })

    segments.unshift(parentPage.slug)
    currentParent = parentPage.parent as number | Page | null | undefined
  }

  return `/${segments.join('/')}`
}
