import { PageContent } from '@/components/PageContent'
import { getPageBySlug } from '@/lib/getPageBySlug'
import { getSiteSettings } from '@/lib/getSiteSettings'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    return {}
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  }
}

export default async function CmsPage({ params }: PageProps) {
  const { slug } = await params
  const [page, siteSettings] = await Promise.all([getPageBySlug(slug), getSiteSettings()])

  if (!page) {
    notFound()
  }

  return <PageContent page={page} siteSettings={siteSettings} />
}
