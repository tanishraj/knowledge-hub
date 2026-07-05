'use client'

import { RichText } from '@payloadcms/richtext-lexical/react'

import { getLivePreviewEditProps } from '@/lib/livePreviewEditing'
import { RenderBlocks } from '@/blocks/renderBlocks'
import type { Page, SiteSetting } from '@/payload-types'

type RichTextNode = {
  children?: RichTextNode[]
  text?: string
  type?: string
}

export const hasVisibleRichTextContent = (node?: RichTextNode | null): boolean => {
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

type PageContentProps = {
  page: Pick<Page, 'content' | 'layout'>
  previewMode?: boolean
  siteSettings: SiteSetting
}

export function PageContent({ page, previewMode = false, siteSettings }: PageContentProps) {
  const hasContent = hasVisibleRichTextContent(page.content?.root)

  return (
    <>
      <RenderBlocks blocks={page.layout} previewMode={previewMode} siteSettings={siteSettings} />
      {page.content && hasContent && (
        <section className="py-16 md:py-24">
          <div className="container">
            <div
              {...getLivePreviewEditProps<HTMLDivElement>({
                className: 'prose prose-neutral max-w-3xl',
                enabled: previewMode,
                label: 'rich text content',
                path: 'content',
              })}
            >
              <RichText data={page.content} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
