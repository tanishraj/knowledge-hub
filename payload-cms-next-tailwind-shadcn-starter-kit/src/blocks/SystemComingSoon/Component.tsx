import { SystemPageHero } from '@/components/system-page-hero'
import type { Media, SystemComingSoonBlock as SystemComingSoonBlockData } from '@/payload-types'

const isMediaDoc = (value: number | Media | null | undefined): value is Media => {
  return typeof value === 'object' && value !== null
}

export function SystemComingSoonBlockComponent(props: SystemComingSoonBlockData) {
  const image =
    isMediaDoc(props.image) && props.image.url
      ? {
          src: props.image.url,
          alt: props.image.alt,
        }
      : undefined

  return (
    <SystemPageHero
      kind="comingSoon"
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
