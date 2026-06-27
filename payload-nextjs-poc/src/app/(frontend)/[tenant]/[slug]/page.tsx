import { BlockRenderer } from '@/components/BlockRenderer'
import { getPageBySlug } from '@/lib/getPageBySlug'
import { getTenantBySlug } from '@/lib/getTenantBySlug'
import { EmptyState } from '@tanishraj/ui-kit'
import { LayoutTemplate } from 'lucide-react'
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
        <EmptyState
          className="empty-page-state"
          description="Add a block in Payload Admin and publish the page to see it rendered here."
          icon={<LayoutTemplate size={32} />}
          size="lg"
          title={page.title}
        >
          <div className="empty-page-meta">{tenantDoc.name}</div>
        </EmptyState>
      )}
    </div>
  )
}
