import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A Payload CMS and Next.js proof of concept with block-driven pages.',
  title: 'Payload Next.js POC',
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
