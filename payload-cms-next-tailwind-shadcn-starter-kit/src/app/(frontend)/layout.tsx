import configPromise from '@payload-config'
import Script from 'next/script'
import { getPayload } from 'payload'
import React, { cache } from 'react'

import '../../styles/globals.css'

import type { Metadata } from 'next'
import { RenderFooter } from '@/blocks/renderFooter'
import { RenderHeader } from '@/blocks/renderHeader'
import type { Footer, Header, Media } from '@/payload-types'

export const dynamic = 'force-dynamic'

const validThemeColors = new Set(['default', 'blue', 'sera'])
const defaultSiteURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

const getFrontendGlobals = cache(async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const [pageSettings, themeSettings, seoSettings, siteSettings] = await Promise.all([
    payload.findGlobal({
      slug: 'page-settings',
      depth: 0,
    }),
    payload.findGlobal({
      slug: 'theme-settings',
      depth: 0,
    }),
    payload.findGlobal({
      slug: 'seo-settings',
      depth: 1,
    }),
    payload.findGlobal({
      slug: 'site-settings',
      depth: 1,
    }),
  ])
  const activeHeaderID =
    typeof pageSettings.activeHeader === 'number'
      ? pageSettings.activeHeader
      : pageSettings.activeHeader?.id
  const activeFooterID =
    typeof pageSettings.activeFooter === 'number'
      ? pageSettings.activeFooter
      : pageSettings.activeFooter?.id
  const activeHeader: Header | null =
    activeHeaderID != null
      ? await payload.findByID({
          collection: 'headers',
          id: activeHeaderID,
          depth: 10,
        })
      : null
  const activeFooter: Footer | null =
    activeFooterID != null
      ? await payload.findByID({
          collection: 'footers',
          id: activeFooterID,
          depth: 10,
        })
      : null

  return {
    activeFooter,
    activeHeader,
    seoSettings,
    siteSettings,
    themeSettings,
  }
})

const defaultSiteTitle = 'Payload Blank Template'
const defaultSiteDescription = 'A blank template using Payload in a Next.js app.'

function getRobotsMetadata(value: string | null | undefined): Metadata['robots'] {
  switch (value) {
    case 'noindex,follow':
      return { index: false, follow: true }
    case 'index,nofollow':
      return { index: true, follow: false }
    case 'noindex,nofollow':
      return { index: false, follow: false }
    case 'index,follow':
    default:
      return { index: true, follow: true }
  }
}

function getMediaUrl(media: number | Media | null | undefined): string | undefined {
  if (!media || typeof media === 'number') {
    return undefined
  }

  if (!media.url) {
    return undefined
  }

  return new URL(media.url, defaultSiteURL).toString()
}

export async function generateMetadata(): Promise<Metadata> {
  const { seoSettings, siteSettings } = await getFrontendGlobals()
  const defaultTitle = seoSettings.defaultTitle || defaultSiteTitle
  const title = seoSettings.titleTemplate
    ? {
        default: defaultTitle,
        template: seoSettings.titleTemplate,
      }
    : defaultTitle
  const defaultImageUrl = getMediaUrl(seoSettings.defaultImage)
  const faviconUrl = getMediaUrl(siteSettings.favicon)

  return {
    metadataBase: new URL(defaultSiteURL),
    title,
    description: seoSettings.defaultDescription || defaultSiteDescription,
    icons: faviconUrl
      ? {
          icon: faviconUrl,
          shortcut: faviconUrl,
          apple: faviconUrl,
        }
      : undefined,
    openGraph: defaultImageUrl
      ? {
          images: [
            {
              url: defaultImageUrl,
            },
          ],
        }
      : undefined,
    robots: getRobotsMetadata(seoSettings.robots),
    twitter: defaultImageUrl
      ? {
          card: 'summary_large_image',
          images: [defaultImageUrl],
        }
      : undefined,
    verification: {
      google: seoSettings.googleSiteVerification || undefined,
    },
  }
}

const systemThemeScript = `
(() => {
  const root = document.documentElement
  const media = window.matchMedia('(prefers-color-scheme: dark)')

  const apply = () => {
    const scheme = media.matches ? 'dark' : 'light'
    root.classList.toggle('dark', scheme === 'dark')
    root.style.colorScheme = scheme
  }

  apply()

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', apply)
  } else if (typeof media.addListener === 'function') {
    media.addListener(apply)
  }
})()
`

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const { activeFooter, activeHeader, siteSettings, themeSettings } =
    await getFrontendGlobals()

  const colorScheme = themeSettings.colorScheme ?? 'system'
  const rawThemeColor = String(themeSettings.themeColor ?? 'default')
  const savedThemeColor = rawThemeColor === 'amber' ? 'sera' : rawThemeColor
  const themeColor = validThemeColors.has(savedThemeColor) ? savedThemeColor : 'default'
  const htmlClassName = colorScheme === 'dark' ? 'dark' : undefined
  const htmlStyle =
    colorScheme === 'system'
      ? ({ colorScheme: 'light dark' } as React.CSSProperties)
      : ({ colorScheme } as React.CSSProperties)

  return (
    <html
      lang="en"
      className={htmlClassName}
      data-theme-color={themeColor}
      style={htmlStyle}
      suppressHydrationWarning
    >
      <head>
        {colorScheme === 'system' && (
          <Script
            id="system-theme-script"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: systemThemeScript }}
          />
        )}
      </head>
      <body>
        <RenderHeader
          header={activeHeader}
          siteSettings={siteSettings}
        />
        <main className={activeHeader ? 'pt-[3.75rem]' : undefined}>{children}</main>
        <RenderFooter
          footer={activeFooter}
          siteSettings={siteSettings}
        />
      </body>
    </html>
  )
}
