import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'
import { cache } from 'react'

import { RenderBlocks } from '@/blocks/renderBlocks'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

type RichTextNode = {
  children?: RichTextNode[]
  text?: string
  type?: string
}

const hasVisibleRichTextContent = (node?: RichTextNode | null): boolean => {
  if (!node) {
    return false
  }

  if (typeof node.text === 'string' && node.text.trim().length > 0) {
    return true
  }

  if (!node.children?.length) {
    return false
  }

  return node.children.some((child) => hasVisibleRichTextContent(child))
}

const getPageBySlug = cache(async (slug: string) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
    limit: 1,
  })

  return result.docs[0] ?? null
})

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
  const page = await getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  const hasContent = hasVisibleRichTextContent(page.content?.root)

  return (
    <>
      <RenderBlocks blocks={page.layout} />
      {page.content && hasContent && (
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="prose prose-neutral max-w-3xl">
              <RichText data={page.content} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
