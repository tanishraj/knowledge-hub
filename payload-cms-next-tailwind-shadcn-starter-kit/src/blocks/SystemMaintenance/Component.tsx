import { SystemPageHero } from '@/components/system-page-hero'
import { getMediaImageProps } from '@/lib/media'
import type { SystemMaintenanceBlock as SystemMaintenanceBlockData } from '@/payload-types'

export function SystemMaintenanceBlockComponent(props: SystemMaintenanceBlockData) {
  const image = getMediaImageProps({
    media: props.image,
    preset: 'system',
  })

  return (
    <SystemPageHero
      kind="maintenance"
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
