'use client'

import { BlockRenderer } from '@/components/BlockRenderer'
import { PortalEmptyState } from '@/components/PortalEmptyState'
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
          <PortalEmptyState
            description="Start typing in Payload Admin to watch this page update in real time."
            eyebrow="Live preview"
            title={data.title}
          />
        )}
      </div>
    </>
  )
}
