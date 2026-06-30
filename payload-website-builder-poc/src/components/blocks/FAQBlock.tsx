'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { FAQBlock as FAQBlockData } from '@/payload-types'

export function FAQBlock({ headline, items }: FAQBlockData) {
  return (
    <section className="grid gap-6">
      <div className="max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {headline}
        </h2>
      </div>

      <div className="grid gap-4">
        {items?.map((item, index) => (
          <Card key={item.id ?? index} className="rounded-[1.25rem] border border-border/60 bg-background/80">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{item.question}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
              {item.answer}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
