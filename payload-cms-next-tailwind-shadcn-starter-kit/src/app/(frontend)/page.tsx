import '../../styles/globals.css'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageContent } from './PageContent'
import { getPageBySlug, getPageMetadataBySlug } from './pageData'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadataBySlug('home')
}

export default async function HomePage() {
  const page = await getPageBySlug('home')

  if (!page) {
    notFound()
  }

  return <PageContent page={page} />
}
