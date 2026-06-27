import config from '@payload-config'
import { getPayload } from 'payload'

import type { PageDocument } from '@/types/cms'

type Args = {
  slug: string
  tenantId?: number | string
}

export async function getPageBySlug({ slug, tenantId }: Args) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'pages',
    depth: 1,
    limit: tenantId ? 1 : 2,
    where: tenantId
      ? {
          and: [
            {
              slug: {
                equals: slug,
              },
            },
            {
              tenant: {
                equals: tenantId,
              },
            },
          ],
        }
      : {
          slug: {
            equals: slug,
          },
        },
  })

  if (!tenantId && result.docs.length > 1) {
    return null
  }

  return (result.docs[0] as PageDocument | undefined) ?? null
}
