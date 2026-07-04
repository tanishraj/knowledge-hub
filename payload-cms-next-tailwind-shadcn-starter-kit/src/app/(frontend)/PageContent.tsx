import { RenderBlocks } from '@/blocks/renderBlocks'
import type { Page } from '@/payload-types'

export function PageContent({ page }: { page: Page }) {
  return <RenderBlocks blocks={page.layout} />
}
