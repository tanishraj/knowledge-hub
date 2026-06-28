import { BlockRenderer } from '@/components/BlockRenderer'
import { PortalButtonLink } from '@/components/PortalButtonLink'
import { PortalEmptyState } from '@/components/PortalEmptyState'
import { getPageBySlug } from '@/lib/getPageBySlug'
import { getTenantBySlug } from '@/lib/getTenantBySlug'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{
    slug: string
    tenant: string
  }>
}

export default async function TenantCmsPage({ params }: PageProps) {
  const { slug, tenant } = await params
  const tenantDoc = await getTenantBySlug(tenant)

  if (!tenantDoc) {
    notFound()
  }

  const page = await getPageBySlug({
    slug,
    tenantId: tenantDoc.id,
  })

  if (!page) {
    notFound()
  }

  return (
    <div className="page-shell">
      {page.layout?.length ? (
        <BlockRenderer layout={page.layout} />
      ) : (
        <PortalEmptyState
          description="Add a block in Payload Admin and publish the page to see it rendered here."
          eyebrow={tenantDoc.name}
          title={page.title}
        >
          <PortalButtonLink appearance="outline" href="/admin" variant="default">
            Open admin
          </PortalButtonLink>
        </PortalEmptyState>
      )}
    </div>
  )
}
