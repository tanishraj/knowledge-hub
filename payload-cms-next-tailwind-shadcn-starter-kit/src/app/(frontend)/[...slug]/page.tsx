import type { Metadata } from 'next'
import { notFound, permanentRedirect, redirect } from 'next/navigation'

import { PageContent } from '../PageContent'
import { getPageByPath, getPageMetadataByPath } from '../pageData'
import { getRedirectByPath } from '@/lib/redirects'

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
  const matchedRedirect = await getRedirectByPath(`/${slug.join('/')}`)

  if (matchedRedirect) {
    if (matchedRedirect.permanent) {
      permanentRedirect(matchedRedirect.destination)
    }

    redirect(matchedRedirect.destination)
  }

  const page = await getPageByPath(slug)

  if (!page) {
    notFound()
  }

  return <PageContent page={page} />
}
