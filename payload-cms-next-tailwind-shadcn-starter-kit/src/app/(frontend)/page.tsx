import '../../styles/globals.css'

import type { Metadata } from 'next'
import { notFound, permanentRedirect, redirect } from 'next/navigation'

import { PageContent } from './PageContent'
import { getPageBySlug, getPageMetadataBySlug } from './pageData'
import { getRedirectByPath } from '@/lib/redirects'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadataBySlug('home')
}

export default async function HomePage() {
  const matchedRedirect = await getRedirectByPath('/')

  if (matchedRedirect) {
    if (matchedRedirect.permanent) {
      permanentRedirect(matchedRedirect.destination)
    }

    redirect(matchedRedirect.destination)
  }

  const page = await getPageBySlug('home')

  if (!page) {
    notFound()
  }

  return <PageContent page={page} />
}
