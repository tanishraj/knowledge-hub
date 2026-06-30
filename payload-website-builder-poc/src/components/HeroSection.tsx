'use client'

import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  badge?: string | null
  description: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: null | string
  secondaryLabel?: null | string
  tagline: string
}

export function HeroSection({
  badge,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tagline,
}: Props) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-border/60 bg-background/90 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)]">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_right,rgba(56,189,248,0.14),transparent_26%)]" />
        <div className="relative px-8 py-16 sm:px-10 lg:px-14 lg:py-20">
          <div className="max-w-4xl">
            {badge ? (
              <Badge className="mb-5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em]" variant="secondary">
                {badge}
              </Badge>
            ) : null}
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl px-5')} href={primaryHref}>
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link
                  className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'rounded-xl px-5')}
                  href={secondaryHref}
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
