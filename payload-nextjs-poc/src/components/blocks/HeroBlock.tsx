import type { HeroBlockData } from '@/types/cms'
import { Badge, Link, Text } from '@tanishraj/ui-kit'
import { ArrowRight } from 'lucide-react'

export function HeroBlock({
  headline,
  subheadline,
  buttonLink,
  buttonText,
}: HeroBlockData) {
  return (
    <section className="hero-block">
      <div className="hero-block__glow" />
      <div className="hero-block__content">
        <div className="hero-block__eyebrow">
          <Badge size="sm" variant="info">
            Payload-powered content block
          </Badge>
        </div>
        <h1>{headline}</h1>
        {subheadline ? (
          <Text as="p" className="hero-block__subheadline" size="lg" tone="caption">
            {subheadline}
          </Text>
        ) : null}
        <div className="hero-block__actions">
          <Link
            className="hero-block__cta"
            href={buttonLink}
            size="lg"
            trailingIcon={ArrowRight}
            underline="none"
            variant="primary"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
