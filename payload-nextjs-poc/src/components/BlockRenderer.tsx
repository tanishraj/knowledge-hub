import { HeroBlock } from '@/components/blocks/HeroBlock'
import type { PageLayoutBlock } from '@/types/cms'

type Props = {
  layout?: PageLayoutBlock[] | null
}

export function BlockRenderer({ layout }: Props) {
  if (!layout?.length) {
    return null
  }

  return (
    <>
      {layout.map((block, index) => {
        switch (block.blockType) {
          case 'hero':
            return <HeroBlock key={block.id ?? index} {...block} />
          default:
            return null
        }
      })}
    </>
  )
}
