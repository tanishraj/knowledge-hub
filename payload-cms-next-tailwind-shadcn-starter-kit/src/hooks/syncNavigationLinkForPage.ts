import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  PayloadRequest,
} from 'payload'

import type { NavigationLink, Page } from '@/payload-types'

const findSyncedNavigationLink = async (
  pageID: number,
  req: PayloadRequest,
): Promise<NavigationLink | null> => {
  const result = await req.payload.find({
    collection: 'navigation-links',
    where: {
      syncPage: {
        equals: pageID,
      },
    },
    limit: 1,
    depth: 0,
    req,
  })

  return result.docs[0] ?? null
}

const findReusablePageLink = async (
  pageID: number,
  req: PayloadRequest,
): Promise<NavigationLink | null> => {
  const result = await req.payload.find({
    collection: 'navigation-links',
    where: {
      page: {
        equals: pageID,
      },
    },
    limit: 1,
    depth: 0,
    req,
  })

  return result.docs[0] ?? null
}

export const syncNavigationLinkAfterChange: CollectionAfterChangeHook<Page> = async ({
  doc,
  req,
}) => {
  const pageID = typeof doc.id === 'number' ? doc.id : Number(doc.id)
  const existing =
    (await findSyncedNavigationLink(pageID, req)) ??
    (await findReusablePageLink(pageID, req))

  if (doc.showInNavigation) {
    const data = {
      linkType: 'page' as const,
      page: pageID,
      sourceType: 'pageSynced' as const,
      syncPage: pageID,
      title: existing?.title || doc.title,
    }

    if (existing) {
      await req.payload.update({
        collection: 'navigation-links',
        id: existing.id,
        data,
        req,
      })
    } else {
      await req.payload.create({
        collection: 'navigation-links',
        data,
        req,
      })
    }

    return doc
  }

  if (existing) {
    await req.payload.update({
      collection: 'navigation-links',
      id: existing.id,
      data: {
        linkType: 'page',
        page: pageID,
        sourceType: 'manual',
        syncPage: null,
      },
      req,
    })
  }

  return doc
}

export const syncNavigationLinkAfterDelete: CollectionAfterDeleteHook<Page> = async ({
  doc,
  req,
}) => {
  const pageID = typeof doc?.id === 'number' ? doc.id : Number(doc?.id)

  if (!pageID) {
    return doc
  }

  const existing = await findSyncedNavigationLink(pageID, req)

  if (!existing) {
    return doc
  }

  await req.payload.update({
    collection: 'navigation-links',
    id: existing.id,
    data: {
      page: null,
      sourceType: 'manual',
      syncPage: null,
    },
    req,
  })

  return doc
}
