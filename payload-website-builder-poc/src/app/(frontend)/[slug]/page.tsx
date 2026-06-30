import { BlockRenderer } from '@/components/BlockRenderer'
import { HeroSection } from '@/components/HeroSection'
import { Hero231 } from '@/components/hero231'
import { getPageBySlug } from '@/lib/getPageBySlug'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  return (
    <div className="page-shell">
      {page.heroDesignVersion === 'hero231' ? (
        <Hero231
          badge={page.heroBadge}
          description={page.heroDescription}
          primaryHref={page.heroPrimaryHref}
          primaryLabel={page.heroPrimaryLabel}
          secondaryHref={page.heroSecondaryHref}
          secondaryLabel={page.heroSecondaryLabel}
          tagline={page.heroTagline}
        />
      ) : (
        <HeroSection
          badge={page.heroBadge}
          description={page.heroDescription}
          primaryHref={page.heroPrimaryHref}
          primaryLabel={page.heroPrimaryLabel}
          secondaryHref={page.heroSecondaryHref}
          secondaryLabel={page.heroSecondaryLabel}
          tagline={page.heroTagline}
        />
      )}
      <BlockRenderer layout={page.layout} />
    </div>
  )
}
