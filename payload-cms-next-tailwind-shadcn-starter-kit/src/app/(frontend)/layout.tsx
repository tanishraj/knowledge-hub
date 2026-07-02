import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import '../../styles/globals.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export const dynamic = 'force-dynamic'

const validThemeColors = new Set(['default', 'blue', 'sera'])

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
  const payload = await getPayload({
    config: configPromise,
  })

  const themeSettings = await payload.findGlobal({
    slug: 'theme-settings',
    depth: 0,
  })

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
