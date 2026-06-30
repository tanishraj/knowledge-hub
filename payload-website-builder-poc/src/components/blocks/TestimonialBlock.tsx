'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { TestimonialBlock as TestimonialBlockData } from '@/payload-types'

export function TestimonialBlock({ quote, name, role, stats }: TestimonialBlockData) {
  return (
    <Card className="overflow-hidden rounded-[2rem] border border-border/60 bg-background/90">
      <CardContent className="grid gap-8 px-8 py-8 md:grid-cols-[minmax(0,1.45fr)_minmax(240px,0.9fr)] md:px-10 md:py-10">
        <div>
          <Badge className="mb-5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em]" variant="secondary">
            Customer proof
          </Badge>
          <p className="text-pretty text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl">
            “{quote}”
          </p>
          <div className="mt-6">
            <p className="text-base font-semibold text-foreground">{name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{role}</p>
          </div>
        </div>

        <div className="grid gap-3">
          {stats?.map((stat, index) => (
            <div key={stat.id ?? index} className="rounded-[1.25rem] border border-border/60 bg-muted/40 px-5 py-4">
              <p className="text-3xl font-semibold tracking-tight text-foreground">{stat.value}</p>
              <Separator className="my-3" />
              <p className="text-sm leading-6 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
