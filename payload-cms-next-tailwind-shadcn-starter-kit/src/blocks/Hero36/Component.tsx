import { Hero36 } from '@/components/hero36'
import type { Hero36Block as Hero36BlockData, Media } from '@/payload-types'

const isMediaDoc = (value: number | Media | null | undefined): value is Media => {
  return typeof value === 'object' && value !== null
}

export function Hero36BlockComponent(props: Hero36BlockData) {
  const cards = props.cards.map((card) => {
    const image =
      card.visualType === 'image' && isMediaDoc(card.image) && card.image.url
        ? {
            src: card.image.url,
            alt: card.image.alt,
          }
        : undefined

    return {
      title: card.title,
      description: card.description,
      href: card.href ?? undefined,
      icon: card.visualType === 'icon' ? card.icon ?? undefined : undefined,
      image,
    }
  })

  return (
    <Hero36
      badge={props.badge?.text ? { text: props.badge.text } : undefined}
      heading={props.heading}
      description={props.description ?? undefined}
      cards={cards}
    />
  )
}
