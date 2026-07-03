import { RichText } from '@payloadcms/richtext-lexical/react'

import { RenderBlocks } from '@/blocks/renderBlocks'
import type { Page } from '@/payload-types'

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

export function PageContent({ page }: { page: Page }) {
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
