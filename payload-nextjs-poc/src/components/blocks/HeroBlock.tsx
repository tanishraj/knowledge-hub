'use client'

import { PortalButtonLink } from '@/components/PortalButtonLink'
import type { HeroBlockData } from '@/types/cms'
import { Badge, Text } from '@tanishraj/ui-kit'

export function HeroBlock({
  headline,
  subheadline,
  buttonLink,
  buttonText,
}: HeroBlockData) {
  return (
    <section className="portal-surface hero-block">
      <div className="hero-block__content">
        <Badge className="portal-badge" size="sm" variant="primary">
          Payload-powered content block
        </Badge>
        <Text as="h1" className="hero-block__title" size="6xl" weight="bold">
          {headline}
        </Text>
        {subheadline ? (
          <Text as="p" className="hero-block__subheadline" size="lg" tone="caption">
            {subheadline}
          </Text>
        ) : null}
        {buttonText && buttonLink ? (
          <div className="hero-block__actions">
            <PortalButtonLink appearance="filled" href={buttonLink} size="lg" variant="primary">
              {buttonText}
            </PortalButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  )
}
