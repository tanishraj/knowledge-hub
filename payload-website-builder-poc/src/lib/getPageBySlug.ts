import config from '@payload-config'
import { getPayload } from 'payload'

import type { Page } from '@/payload-types'

export async function getPageBySlug(slug: string) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'pages',
    depth: 1,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return (result.docs[0] as Page | undefined) ?? null
}
