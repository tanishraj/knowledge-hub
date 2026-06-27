'use client'

import { BlockRenderer } from '@/components/BlockRenderer'
import type { PageDocument } from '@/types/cms'
import { RefreshRouteOnSave, useLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

type Props = {
  initialData: PageDocument
}

export function PageLivePreview({ initialData }: Props) {
  const router = useRouter()
  const { data } = useLivePreview<PageDocument>({
    depth: 1,
    initialData,
    serverURL,
  })

  return (
    <>
      <RefreshRouteOnSave depth={1} refresh={() => router.refresh()} serverURL={serverURL} />
      <div className="page-shell">
        {data.layout?.length ? (
          <BlockRenderer layout={data.layout} />
        ) : (
          <section className="empty-page-state">
            <p className="eyebrow">Live preview</p>
            <h1>{data.title}</h1>
            <p>Start typing in Payload Admin to watch this page update in real time.</p>
          </section>
        )}
      </div>
    </>
  )
}
