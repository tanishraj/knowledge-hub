import type { Metadata } from 'next'

import { PageLivePreview } from '@/components/PageLivePreview'
import { getPageBySlug } from '@/lib/getPageBySlug'
import { getSiteSettings } from '@/lib/getSiteSettings'

type PreviewPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: PreviewPageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  return {
    description: page?.metaDescription ?? undefined,
    robots: {
      index: false,
      follow: false,
    },
    title: page?.metaTitle ?? 'Live Preview',
  }
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { slug } = await params
  const [page, siteSettings] = await Promise.all([getPageBySlug(slug), getSiteSettings()])

  return <PageLivePreview initialPage={page} siteSettings={siteSettings} />
}
