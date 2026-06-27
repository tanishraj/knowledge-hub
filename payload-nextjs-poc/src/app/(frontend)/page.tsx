import React from 'react'

import { BlockRenderer } from '@/components/BlockRenderer'
import { getPageBySlug } from '@/lib/getPageBySlug'
import { Badge, Link, MetricCard, Text } from '@tanishraj/ui-kit'
import { ArrowRight } from 'lucide-react'
import './styles.css'

export default async function HomePage() {
  const homePage = await getPageBySlug({ slug: 'home' })

  if (homePage?.layout?.length) {
    return <BlockRenderer layout={homePage.layout} />
  }

  return (
    <div className="landing-shell">
      <section className="landing-panel">
        <div className="eyebrow">
          <Badge size="sm" variant="info">
            Payload CMS + Next.js + UI Kit
          </Badge>
        </div>
        <h1>Block-driven pages are wired and ready.</h1>
        <Text as="p" className="lead" size="lg" tone="caption">
          Open the admin panel, create a tenant, invite a customer user, and add a page
          with the slug <code>home</code>. Payload will give each customer a secure login
          while keeping their content isolated from everyone else.
        </Text>
        <div className="action-row">
          <Link href="/admin" size="lg" trailingIcon={ArrowRight} underline="none" variant="primary">
            Open admin
          </Link>
          <Link href="/acme/home" size="lg" underline="hover" variant="default">
            Preview <code>/acme/home</code>
          </Link>
        </div>
        <div className="metric-grid">
          <MetricCard
            hint={{ color: 'success', text: 'Shared Payload backend' }}
            label={{ text: 'Tenants' }}
            value={{ text: '1 portal per customer', supportText: 'Acme, Bakery, Agency, etc.' }}
          />
          <MetricCard
            hint={{ color: 'secondary', text: 'Reusable components' }}
            label={{ text: 'UI Layer' }}
            value={{ text: '@tanishraj/ui-kit', supportText: 'Buttons, forms, tables, states' }}
          />
          <MetricCard
            hint={{ color: 'warning', text: 'Access-controlled' }}
            label={{ text: 'Content Model' }}
            value={{ text: 'Tenant-scoped', supportText: 'Pages and media isolated by login' }}
          />
        </div>
        <div className="checklist">
          <p>Suggested first page setup:</p>
          <ul>
            <li>Create your first admin user at <code>/admin</code>.</li>
            <li>Create a tenant such as <code>Acme Bakery</code> with slug <code>acme</code>.</li>
            <li>Create a customer user linked to that tenant.</li>
            <li>Add a Home page with slug <code>home</code> and publish it.</li>
            <li>Visit <code>/acme/home</code> to view the tenant-scoped content.</li>
          </ul>
        </div>
        <div className="portal-actions">
          <Badge size="sm" variant="success">
            Customer login uses Payload auth
          </Badge>
          <Badge size="sm" variant="warning">
            Tenant model is active
          </Badge>
          <Badge size="sm" variant="info">
            UI kit powers the frontend
          </Badge>
        </div>
      </section>
    </div>
  )
}
