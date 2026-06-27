import React from 'react'
import '@tanishraj/ui-kit/globals.css'
import '@tanishraj/ui-kit/theme-indigo.css'
import './styles.css'

export const metadata = {
  description: 'A Payload CMS and Next.js proof of concept with block-driven pages.',
  title: 'Payload Next.js POC',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="ui-platform-shell">
        <main>{children}</main>
      </body>
    </html>
  )
}
