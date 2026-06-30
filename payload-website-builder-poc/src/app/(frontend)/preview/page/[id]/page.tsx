import { PageLivePreview } from '@/components/live-preview/PageLivePreview'
import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function PreviewPage({ params }: Props) {
  const { id } = await params
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  if (!user) {
    notFound()
  }

  const page = await payload.findByID({
    id,
    collection: 'pages',
    depth: 1,
    draft: true,
  })

  if (!page) {
    notFound()
  }

  return <PageLivePreview initialData={page} />
}
