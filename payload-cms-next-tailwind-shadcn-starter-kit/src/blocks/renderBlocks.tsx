import type { Page } from '@/payload-types'

import { Hero36BlockComponent } from './Hero36/Component'

type PageBlock = NonNullable<Page['layout']>[number]

export function RenderBlocks({ blocks }: { blocks?: PageBlock[] | null }) {
  if (!blocks?.length) {
    return null
  }

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'hero36':
            return (
              <Hero36BlockComponent key={block.id ?? `${block.blockType}-${index}`} {...block} />
            )
          default:
            return null
        }
      })}
    </>
  )
}
