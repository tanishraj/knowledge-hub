import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

import { Footer2 } from '@/components/footer2'
import type { Footer2Block as Footer2BlockData, Media, SiteSetting } from '@/payload-types'
import { resolveCmsLink } from '@/lib/cmsLinks'

const isMediaDoc = (value: number | Media | null | undefined): value is Media => {
  return typeof value === 'object' && value !== null
}

const getSiteSettings = cache(async (): Promise<SiteSetting> => {
  const payload = await getPayload({
    config: configPromise,
  })

  return payload.findGlobal({
    slug: 'site-settings',
    depth: 1,
  })
})

export async function Footer2BlockComponent(props: Footer2BlockData) {
  const siteSettings = await getSiteSettings()
  const logoImage = isMediaDoc(siteSettings.logo) ? siteSettings.logo : null
  const logo =
    logoImage?.url && logoImage.alt
      ? {
          url: '/',
          src: logoImage.url,
          alt: logoImage.alt,
          title: siteSettings.siteName || logoImage.alt,
        }
      : undefined

  const sections = props.sections?.map((section) => {
    const links = (section.links ?? []).flatMap((link) => {
      const { href, openInNewTab } = resolveCmsLink(link)

      if (!href) {
        return []
      }

      return [
        {
          name: link.name,
          href,
          openInNewTab,
        },
      ]
    })

    return {
      title: section.title,
      links,
    }
  })

  const legalLinks = props.legalLinks?.flatMap((link) => {
    const { href, openInNewTab } = resolveCmsLink(link)

    if (!href) {
      return []
    }

    return [
      {
        name: link.name,
        href,
        openInNewTab,
      },
    ]
  })

  return (
    <Footer2
      logo={logo}
      description={props.description ?? undefined}
      sections={sections}
      copyright={props.copyright ?? undefined}
      legalLinks={legalLinks}
    />
  )
}
