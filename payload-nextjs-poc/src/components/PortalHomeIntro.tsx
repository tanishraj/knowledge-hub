'use client'

import React from 'react'

import { LandingActions } from '@/components/LandingActions'
import { UIKitDemo } from '@/components/UIKitDemo'
import { Badge, Divider, Text } from '@tanishraj/ui-kit'

export function PortalHomeIntro() {
  return (
    <>
      <section className="portal-surface portal-hero">
        <Badge className="portal-badge" size="sm" variant="primary">
          Payload CMS + Next.js POC
        </Badge>
        <Text as="h1" className="portal-hero__title" size="7xl" weight="bold">
          Block-driven pages are wired and ready.
        </Text>
        <Text as="p" className="portal-lead" size="lg" tone="caption">
          Open the admin panel, create a tenant, invite a customer user, and add a page
          with the slug <code>home</code>. Payload will give each customer a secure login
          while keeping their content isolated from everyone else.
        </Text>
        <LandingActions />
        <Divider />
        <div className="portal-checklist">
          <Text as="p" size="md" weight="semibold">
            Suggested first page setup
          </Text>
          <ol className="portal-checklist__list">
            <li className="portal-checklist__item">
              <Badge size="sm" variant="default">
                01
              </Badge>
              <Text as="span" size="md" tone="caption">
                Create your first admin user at <code>/admin</code>.
              </Text>
            </li>
            <li className="portal-checklist__item">
              <Badge size="sm" variant="default">
                02
              </Badge>
              <Text as="span" size="md" tone="caption">
                Create a tenant such as <code>Acme Bakery</code> with slug <code>acme</code>.
              </Text>
            </li>
            <li className="portal-checklist__item">
              <Badge size="sm" variant="default">
                03
              </Badge>
              <Text as="span" size="md" tone="caption">
                Create a customer user linked to that tenant.
              </Text>
            </li>
            <li className="portal-checklist__item">
              <Badge size="sm" variant="default">
                04
              </Badge>
              <Text as="span" size="md" tone="caption">
                Add a Home page with slug <code>home</code> and publish it.
              </Text>
            </li>
            <li className="portal-checklist__item">
              <Badge size="sm" variant="default">
                05
              </Badge>
              <Text as="span" size="md" tone="caption">
                Visit <code>/acme/home</code> to view the tenant-scoped content.
              </Text>
            </li>
          </ol>
        </div>
      </section>

      <UIKitDemo />
    </>
  )
}
