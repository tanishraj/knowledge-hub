import { SystemPageHero } from '@/components/system-page-hero'
import type { Media, System404Block as System404BlockData } from '@/payload-types'

const isMediaDoc = (value: number | Media | null | undefined): value is Media => {
  return typeof value === 'object' && value !== null
}

export function System404BlockComponent(props: System404BlockData) {
  const image =
    isMediaDoc(props.image) && props.image.url
      ? {
          src: props.image.url,
          alt: props.image.alt,
        }
      : undefined

  return (
    <SystemPageHero
      kind="404"
      badge={props.badge}
      heading={props.heading}
      description={props.description}
      supportingNote={props.supportingNote}
      primaryAction={props.primaryAction}
      secondaryAction={props.secondaryAction}
      image={image}
    />
  )
}
