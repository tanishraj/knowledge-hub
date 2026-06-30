'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { CallToActionBlock as CallToActionBlockData } from '@/payload-types'
import Link from 'next/link'

export function CallToActionBlock({
  eyebrow,
  headline,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CallToActionBlockData) {
  return (
    <section className="rounded-[2rem] border border-border/60 bg-muted/40 px-8 py-12 sm:px-10">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
        ) : null}
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {headline}
        </h2>
        <p className="mt-4 text-base leading-8 text-muted-foreground">{description}</p>
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
    </section>
  )
}
