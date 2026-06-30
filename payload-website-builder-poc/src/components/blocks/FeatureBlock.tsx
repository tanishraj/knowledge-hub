'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { FeatureBlock as FeatureBlockData } from '@/payload-types'

export function FeatureBlock({ eyebrow, headline, description, items }: FeatureBlockData) {
  return (
    <section className="grid gap-8">
      <div className="grid gap-4">
        {eyebrow ? (
          <Badge className="w-fit rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em]" variant="outline">
            {eyebrow}
          </Badge>
        ) : null}
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items?.map((item, index) => (
          <Card key={item.id ?? index} className="rounded-[1.5rem] border border-border/60 bg-background/80">
            <CardHeader className="pb-3">
              <div className="mb-3 flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, '0')}
              </div>
              <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-6 text-sm leading-7 text-muted-foreground">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
