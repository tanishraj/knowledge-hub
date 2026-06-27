import { BlockRenderer } from '@/components/BlockRenderer'
import { getPageBySlug } from '@/lib/getPageBySlug'
import { EmptyState } from '@tanishraj/ui-kit'
import { Compass, LayoutTemplate } from 'lucide-react'

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
        <EmptyState
          className="empty-page-state"
          description={
            <>
              In multi-tenant mode, visit pages with a path like <code>/acme/home</code>.
              You can also use <code>/preview/{slug}</code> only when that page slug is unique
              across all tenants.
            </>
          }
          icon={<Compass size={32} />}
          size="lg"
          title="Use a tenant slug in the URL."
        >
          <div className="empty-page-meta">Tenant-aware routing</div>
        </EmptyState>
      </div>
    )
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
          <div className="empty-page-meta">Draft page found</div>
        </EmptyState>
      )}
    </div>
  )
}
