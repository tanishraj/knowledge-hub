import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageContent } from '../PageContent'
import { getPageByPath, getPageMetadataByPath } from '../pageData'

type PageProps = {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return getPageMetadataByPath(slug)
}

export default async function CmsPage({ params }: PageProps) {
  const { slug } = await params
  const page = await getPageByPath(slug)

  if (!page) {
    notFound()
  }

  return <PageContent page={page} />
}
