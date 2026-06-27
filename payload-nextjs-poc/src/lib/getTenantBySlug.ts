import config from '@payload-config'
import { getPayload } from 'payload'

import type { Tenant } from '@/payload-types'

export async function getTenantBySlug(slug: string) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'tenants',
    depth: 0,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return (result.docs[0] as Tenant | undefined) ?? null
}
