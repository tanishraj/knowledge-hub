'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import { PageContent } from '@/components/PageContent'
import { LIVE_PREVIEW_INLINE_EDITING_EVENT } from '@/lib/livePreviewFields'
import type { Page, SiteSetting } from '@/payload-types'

type LivePreviewMessage = {
  data?: Page
  type?: string
}

type PageLivePreviewProps = {
  initialPage: Page | null
  siteSettings: SiteSetting
}

export function PageLivePreview({ initialPage, siteSettings }: PageLivePreviewProps) {
  const router = useRouter()
  const [page, setPage] = useState<Page | null>(initialPage)
  const isInlineEditingRef = useRef(false)
  const pendingPageRef = useRef<Page | null>(null)

  useEffect(() => {
    setPage(initialPage)
  }, [initialPage])

  useEffect(() => {
    window.parent.postMessage({ ready: true, type: 'payload-live-preview' }, '*')

    const handleMessage = (event: MessageEvent<LivePreviewMessage>) => {
      if (event.data?.type === 'payload-document-event') {
        router.refresh()
        return
      }

      if (event.data?.type === 'payload-live-preview' && event.data.data) {
        if (isInlineEditingRef.current) {
          pendingPageRef.current = event.data.data
          return
        }

        setPage(event.data.data)
      }
    }

    const handleInlineEditing = (event: Event) => {
      const detail = (event as CustomEvent<boolean>).detail

      isInlineEditingRef.current = detail

      if (!detail && pendingPageRef.current) {
        setPage(pendingPageRef.current)
        pendingPageRef.current = null
      }
    }

    window.addEventListener('message', handleMessage)
    window.addEventListener(LIVE_PREVIEW_INLINE_EDITING_EVENT, handleInlineEditing)

    return () => {
      window.removeEventListener('message', handleMessage)
      window.removeEventListener(LIVE_PREVIEW_INLINE_EDITING_EVENT, handleInlineEditing)
    }
  }, [router])

  if (!page) {
    return (
      <section className="py-24">
        <div className="container max-w-2xl text-center">
          <h1 className="text-2xl font-semibold">Live preview is ready</h1>
          <p className="mt-4 text-muted-foreground">
            Start editing this page in Payload Admin to see your changes appear here.
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="sticky top-4 z-50 mx-auto mt-4 flex w-fit max-w-[calc(100%-2rem)] items-center rounded-full border border-border/80 bg-background/90 px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
        Click highlighted content to focus the matching field in Payload.
      </div>
      <PageContent page={page} previewMode siteSettings={siteSettings} />
    </>
  )
}
