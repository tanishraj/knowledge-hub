import '../../styles/globals.css'
import { Hero36 } from '@/components/hero36'

import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Home',
  }
}

export default function HomePage() {
  return (
    <Hero36
      badge={{ text: 'Payload + Next.js Starter Kit' }}
      heading="Build content-rich apps faster with Payload, Next.js, and shadcn/ui"
      description="This starter kit gives you a clean Payload 3 foundation with authentication, media uploads, Tailwind styling, generated types, and reusable frontend components so you can start shipping features instead of wiring boilerplate."
      cards={[
        {
          title: 'CMS-ready architecture',
          description:
            'Payload is already configured with auth, media, SQLite, and generated types so you can model content and start building immediately.',
          href: '/admin',
          icon: 'database',
        },
        {
          title: 'Reusable landing page blocks',
          description:
            'Use polished frontend sections like Hero36 as a foundation for marketing pages, product surfaces, and future Payload-driven layouts.',
          href: 'https://ui.shadcn.com',
          icon: 'blocks',
        },
        {
          title: 'Fast local iteration',
          description:
            'Develop quickly with Next.js, Tailwind, and shadcn/ui while keeping your frontend and Payload schema in the same codebase.',
          href: 'https://payloadcms.com/docs',
          icon: 'rocket',
        },
      ]}
    />
  )
}
