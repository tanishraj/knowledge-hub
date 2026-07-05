import { SystemPageHero } from '@/components/system-page-hero'
import { getMediaImageProps } from '@/lib/media'
import type { SystemComingSoonBlock as SystemComingSoonBlockData } from '@/payload-types'

export function SystemComingSoonBlockComponent(props: SystemComingSoonBlockData) {
  const image = getMediaImageProps({
    media: props.image,
    preset: 'system',
  })

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
