import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'

import '../../styles/globals.css'

import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const validThemeColors = new Set(['default', 'blue', 'sera'])

const getFrontendGlobals = cache(async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const [themeSettings, seoSettings] = await Promise.all([
    payload.findGlobal({
      slug: 'theme-settings',
      depth: 0,
    }),
    payload.findGlobal({
      slug: 'seo-settings',
      depth: 0,
    }),
  ])

  return {
    seoSettings,
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

export async function generateMetadata(): Promise<Metadata> {
  const { seoSettings } = await getFrontendGlobals()
  const defaultTitle = seoSettings.defaultTitle || defaultSiteTitle
  const title = seoSettings.titleTemplate
    ? {
        default: defaultTitle,
        template: seoSettings.titleTemplate,
      }
    : defaultTitle

  return {
    title,
    description: seoSettings.defaultDescription || defaultSiteDescription,
    robots: getRobotsMetadata(seoSettings.robots),
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
  const { themeSettings } = await getFrontendGlobals()

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
          <script dangerouslySetInnerHTML={{ __html: systemThemeScript }} />
        )}
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
