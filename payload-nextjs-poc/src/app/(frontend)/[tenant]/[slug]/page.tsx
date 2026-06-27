import { BlockRenderer } from '@/components/BlockRenderer'
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
        <section className="empty-page-state">
          <p className="eyebrow">{tenantDoc.name}</p>
          <h1>{page.title}</h1>
          <p>Add a block in Payload Admin and publish the page to see it rendered here.</p>
        </section>
      )}
    </div>
  )
}
