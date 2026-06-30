'use client'

import { BlockRenderer } from '@/components/BlockRenderer'
import { HeroSection } from '@/components/HeroSection'
import { Hero231 } from '@/components/hero231'
import type { Page } from '@/payload-types'
import { RefreshRouteOnSave, useLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

type Props = {
  initialData: Page
}

export function PageLivePreview({ initialData }: Props) {
  const router = useRouter()
  const { data } = useLivePreview<Page>({
    depth: 1,
    initialData,
    serverURL,
  })

  return (
    <>
      <RefreshRouteOnSave depth={1} refresh={() => router.refresh()} serverURL={serverURL} />
      <div className="page-shell">
        {data.heroDesignVersion === 'hero231' ? (
          <Hero231
            badge={data.heroBadge}
            description={data.heroDescription}
            primaryHref={data.heroPrimaryHref}
            primaryLabel={data.heroPrimaryLabel}
            secondaryHref={data.heroSecondaryHref}
            secondaryLabel={data.heroSecondaryLabel}
            tagline={data.heroTagline}
          />
        ) : (
          <HeroSection
            badge={data.heroBadge}
            description={data.heroDescription}
            primaryHref={data.heroPrimaryHref}
            primaryLabel={data.heroPrimaryLabel}
            secondaryHref={data.heroSecondaryHref}
            secondaryLabel={data.heroSecondaryLabel}
            tagline={data.heroTagline}
          />
        )}
        <BlockRenderer layout={data.layout} />
      </div>
    </>
  )
}
