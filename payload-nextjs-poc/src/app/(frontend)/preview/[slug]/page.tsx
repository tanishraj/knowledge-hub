import { BlockRenderer } from '@/components/BlockRenderer'
import { PortalButtonLink } from '@/components/PortalButtonLink'
import { PortalEmptyState } from '@/components/PortalEmptyState'
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
        <PortalEmptyState
          description={
            <>
            In multi-tenant mode, visit pages with a path like <code>/acme/home</code>.
            You can also use <code>/preview/{slug}</code> only when that page slug is unique
            across all tenants.
            </>
          }
          eyebrow="Tenant-aware routing"
          title="Use a tenant slug in the URL."
        >
          <PortalButtonLink appearance="outline" href="/" variant="default">
            Back home
          </PortalButtonLink>
        </PortalEmptyState>
      </div>
    )
  }

  return (
    <div className="page-shell">
      {page.layout?.length ? (
        <BlockRenderer layout={page.layout} />
      ) : (
        <PortalEmptyState
          description="Add a block in Payload Admin and publish the page to see it rendered here."
          eyebrow="Draft page found"
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
