import { Footer2BlockComponent } from './Footer2/Component'

import type { Footer } from '@/payload-types'

type FooterBlock = NonNullable<Footer['layout']>[number]

export function RenderFooter({
  footer,
}: {
  footer?: Footer | null
}) {
  const block = footer?.layout?.[0] as FooterBlock | undefined

  if (!block) {
    return null
  }

  switch (block.blockType) {
    case 'footer2':
      return <Footer2BlockComponent {...block} />
    default:
      return null
  }
}
