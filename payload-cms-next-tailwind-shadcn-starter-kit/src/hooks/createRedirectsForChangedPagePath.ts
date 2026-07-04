import type {
  CollectionAfterChangeHook,
  PayloadRequest,
} from 'payload'

import type { Page, Redirect } from '@/payload-types'

import { normalizeRedirectPath } from '@/lib/redirects'
import { getPageHref, isPageDoc } from '@/lib/pagePaths'

const isPublished = (value: { _status?: 'draft' | 'published' | null } | null | undefined) =>
  value?._status === 'published'

const getRelationshipID = (value: number | Page | null | undefined): number | null => {
  if (typeof value === 'number') {
    return value
  }

  if (isPageDoc(value)) {
    return value.id
  }

  return null
}

const findExistingRedirect = async (
  fromPath: string,
  req: PayloadRequest,
): Promise<Redirect | null> => {
  const result = await req.payload.find({
    collection: 'redirects',
    where: {
      fromPath: {
        equals: normalizeRedirectPath(fromPath),
      },
    },
    limit: 1,
    depth: 0,
    req,
  })

  return result.docs[0] ?? null
}

const createRedirectIfMissing = async ({
  fromPath,
  pageID,
  req,
}: {
  fromPath: string
  pageID: number
  req: PayloadRequest
}) => {
  const normalizedFromPath = normalizeRedirectPath(fromPath)
  const existing = await findExistingRedirect(normalizedFromPath, req)

  if (existing) {
    return
  }

  await req.payload.create({
    collection: 'redirects',
    data: {
      fromPath: normalizedFromPath,
      destinationType: 'page',
      page: pageID,
      statusCode: '301',
      enabled: true,
      _status: 'published',
    },
    req,
  })
}

const hydratePagePath = async (
  pageLike: Pick<Page, 'slug' | 'parent'>,
  req: PayloadRequest,
): Promise<string | null> => {
  const segments = [pageLike.slug]
  let currentParent = pageLike.parent

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

  return normalizeRedirectPath(`/${segments.join('/')}`)
}

const isDescendantOf = (page: Page, ancestorID: number): boolean => {
  let currentParent = page.parent

  while (currentParent != null) {
    const parentID = getRelationshipID(currentParent)

    if (parentID == null) {
      return false
    }

    if (parentID === ancestorID) {
      return true
    }

    if (!isPageDoc(currentParent)) {
      return false
    }

    currentParent = currentParent.parent
  }

  return false
}

const createDescendantRedirects = async ({
  newRootPath,
  oldRootPath,
  pageID,
  req,
}: {
  newRootPath: string
  oldRootPath: string
  pageID: number
  req: PayloadRequest
}) => {
  const publishedPages = await req.payload.find({
    collection: 'pages',
    where: {
      _status: {
        equals: 'published',
      },
    },
    depth: 10,
    limit: 1000,
    req,
  })

  const descendants = publishedPages.docs.filter((page) => isDescendantOf(page, pageID))

  for (const descendant of descendants) {
    const currentPath = getPageHref(descendant)

    if (!currentPath || !currentPath.startsWith(`${newRootPath}/`)) {
      continue
    }

    const suffix = currentPath.slice(newRootPath.length)
    const oldDescendantPath = normalizeRedirectPath(`${oldRootPath}${suffix}`)

    if (oldDescendantPath === currentPath) {
      continue
    }

    await createRedirectIfMissing({
      fromPath: oldDescendantPath,
      pageID: descendant.id,
      req,
    })
  }
}

export const createRedirectsForChangedPagePath: CollectionAfterChangeHook<Page> = async ({
  doc,
  operation,
  previousDoc,
  req,
}) => {
  if (operation !== 'update' || !previousDoc) {
    return doc
  }

  if (!isPublished(previousDoc) || !isPublished(doc)) {
    return doc
  }

  const oldPath = await hydratePagePath(previousDoc, req)
  const newPath = await hydratePagePath(doc, req)

  if (!oldPath || !newPath || oldPath === newPath) {
    return doc
  }

  const pageID = typeof doc.id === 'number' ? doc.id : Number(doc.id)

  await createRedirectIfMissing({
    fromPath: oldPath,
    pageID,
    req,
  })

  await createDescendantRedirects({
    newRootPath: newPath,
    oldRootPath: oldPath,
    pageID,
    req,
  })

  return doc
}
