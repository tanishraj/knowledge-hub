import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

import { isValidLivePreviewToken } from '@/lib/livePreview'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const slug = url.searchParams.get('slug')
  const token = url.searchParams.get('token')

  if (!slug || !isValidLivePreviewToken(slug, token)) {
    return NextResponse.json({ message: 'Invalid live preview request.' }, { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  return NextResponse.redirect(new URL(`/preview/${slug}`, request.url))
}
