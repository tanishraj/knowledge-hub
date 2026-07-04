import '../../styles/globals.css'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageContent } from './PageContent'
import { getHomepageMetadata, getHomepagePage } from './pageData'

export async function generateMetadata(): Promise<Metadata> {
  return getHomepageMetadata()
}

export default async function HomePage() {
  const page = await getHomepagePage()

  if (!page) {
    notFound()
  }

  return <PageContent page={page} />
}
