import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

import type { Redirect } from '@/payload-types'

import { getPageHref } from './pagePaths'

export const normalizeRedirectPath = (value: string): string => {
  const [rawPathname] = value.trim().split('?')
  const pathname = rawPathname.trim()

  if (!pathname || pathname === '/') {
    return '/'
  }

  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`
  return withLeadingSlash.replace(/\/+$/, '')
}

const resolveRedirectDestination = (
  redirect: Redirect,
): {
  destination?: string
  permanent: boolean
} => {
  const destination =
    redirect.destinationType === 'page'
      ? getPageHref(redirect.page)
      : redirect.url ?? undefined

  return {
    destination,
    permanent: redirect.statusCode !== '302',
  }
}

const getRedirectDocByPath = cache(async (pathname: string): Promise<Redirect | null> => {
  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'redirects',
    where: {
      and: [
        {
          fromPath: {
            equals: normalizeRedirectPath(pathname),
          },
        },
        {
          enabled: {
            equals: true,
          },
        },
      ],
    },
    depth: 1,
    limit: 1,
  })

  return result.docs[0] ?? null
})

export const getRedirectByPath = cache(
  async (
    pathname: string,
  ): Promise<{ destination: string; permanent: boolean } | null> => {
    const redirect = await getRedirectDocByPath(pathname)

    if (!redirect) {
      return null
    }

    const resolved = resolveRedirectDestination(redirect)

    if (!resolved.destination) {
      return null
    }

    return resolved as { destination: string; permanent: boolean }
  },
)
