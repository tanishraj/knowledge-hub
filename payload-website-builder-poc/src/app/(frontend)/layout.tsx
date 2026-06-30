import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Dynamic page builder with Next.js, Payload CMS, shadcn, and live preview.',
  title: 'Payload Website Builder POC',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
