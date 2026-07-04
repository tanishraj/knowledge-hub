import type { Page } from '@/payload-types'

import { getPageHref } from './pagePaths'

export type CmsLinkValue = {
  linkType?: 'page' | 'custom' | null
  openInNewTab?: boolean | null
  page?: number | Page | null
  url?: string | null
}

export const resolveCmsLink = (
  value: CmsLinkValue,
): { href?: string; openInNewTab?: boolean } => {
  const href = value.linkType === 'page' ? getPageHref(value.page) : value.url ?? undefined

  if (!href) {
    return {}
  }

  return {
    href,
    openInNewTab: value.openInNewTab ?? undefined,
  }
}
