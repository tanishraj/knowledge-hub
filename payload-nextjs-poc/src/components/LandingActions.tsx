'use client'

import React from 'react'

import { PortalButtonLink } from '@/components/PortalButtonLink'

export function LandingActions() {
  return (
    <div className="action-row">
      <PortalButtonLink appearance="filled" href="/admin" size="lg" variant="primary">
        Open admin
      </PortalButtonLink>
      <PortalButtonLink
        appearance="outline"
        href="/acme/home"
        size="lg"
        variant="default"
      >
        Preview <code>/acme/home</code>
      </PortalButtonLink>
    </div>
  )
}
