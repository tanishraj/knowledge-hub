import React from 'react'

import { BlockRenderer } from '@/components/BlockRenderer'
import { getPageBySlug } from '@/lib/getPageBySlug'
import './styles.css'

export default async function HomePage() {
  const homePage = await getPageBySlug({ slug: 'home' })

  if (homePage?.layout?.length) {
    return <BlockRenderer layout={homePage.layout} />
  }

  return (
    <div className="landing-shell">
      <section className="landing-panel">
        <p className="eyebrow">Payload CMS + Next.js POC</p>
        <h1>Block-driven pages are wired and ready.</h1>
        <p className="lead">
          Open the admin panel, create a tenant, invite a customer user, and add a page
          with the slug <code>home</code>. Payload will give each customer a secure login
          while keeping their content isolated from everyone else.
        </p>
        <div className="action-row">
          <a className="primary-link" href="/admin">
            Open admin
          </a>
          <a className="secondary-link" href="/acme/home">
            Preview <code>/acme/home</code>
          </a>
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
      </section>
    </div>
  )
}
