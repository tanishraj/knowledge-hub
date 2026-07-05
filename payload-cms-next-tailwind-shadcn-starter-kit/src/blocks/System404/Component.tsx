import { SystemPageHero } from '@/components/system-page-hero'
import { getMediaImageProps } from '@/lib/media'
import type { System404Block as System404BlockData } from '@/payload-types'

export function System404BlockComponent(props: System404BlockData) {
  const image = getMediaImageProps({
    media: props.image,
    preset: 'system',
  })

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
