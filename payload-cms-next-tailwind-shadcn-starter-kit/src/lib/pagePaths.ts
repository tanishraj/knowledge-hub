import type { Page } from '@/payload-types'

export const isPageDoc = (value: number | Page | null | undefined): value is Page => {
  return typeof value === 'object' && value !== null
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
