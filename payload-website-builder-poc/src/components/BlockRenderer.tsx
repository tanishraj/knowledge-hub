import { CallToActionBlock } from '@/components/blocks/CallToActionBlock'
import { FAQBlock } from '@/components/blocks/FAQBlock'
import { FeatureBlock } from '@/components/blocks/FeatureBlock'
import { TestimonialBlock } from '@/components/blocks/TestimonialBlock'
import type { Page } from '@/payload-types'

type Props = {
  layout?: Page['layout'] | null
}

export function BlockRenderer({ layout }: Props) {
  if (!layout?.length) {
    return null
  }

  return layout.map((block, index) => {
    switch (block.blockType) {
      case 'feature':
        return <FeatureBlock key={block.id ?? index} {...block} />
      case 'callToAction':
        return <CallToActionBlock key={block.id ?? index} {...block} />
      case 'testimonial':
        return <TestimonialBlock key={block.id ?? index} {...block} />
      case 'faq':
        return <FAQBlock key={block.id ?? index} {...block} />
      default:
        return null
    }
  })
}
