import React from 'react'

import { BlockRenderer } from '@/components/BlockRenderer'
import { PortalHomeIntro } from '@/components/PortalHomeIntro'
import { getPageBySlug } from '@/lib/getPageBySlug'
import './styles.css'

export default async function HomePage() {
  const homePage = await getPageBySlug({ slug: 'home' })

  if (homePage?.layout?.length) {
    return <BlockRenderer layout={homePage.layout} />
  }

  return (
    <div className="landing-shell">
      <PortalHomeIntro />
    </div>
  )
}
