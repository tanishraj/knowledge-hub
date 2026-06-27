import { BlockRenderer } from '@/components/BlockRenderer'
import { getPageBySlug } from '@/lib/getPageBySlug'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function PreviewPage({ params }: PageProps) {
  const { slug } = await params
  const page = await getPageBySlug({ slug })

  if (!page) {
    return (
      <div className="page-shell">
        <section className="empty-page-state">
          <p className="eyebrow">Tenant-aware routing</p>
          <h1>Use a tenant slug in the URL.</h1>
          <p>
            In multi-tenant mode, visit pages with a path like <code>/acme/home</code>.
            You can also use <code>/preview/{slug}</code> only when that page slug is unique
            across all tenants.
          </p>
        </section>
      </div>
    )
  }

  return (
    <div className="page-shell">
      {page.layout?.length ? (
        <BlockRenderer layout={page.layout} />
      ) : (
        <section className="empty-page-state">
          <p className="eyebrow">Draft page found</p>
          <h1>{page.title}</h1>
          <p>Add a block in Payload Admin and publish the page to see it rendered here.</p>
        </section>
      )}
    </div>
  )
}
