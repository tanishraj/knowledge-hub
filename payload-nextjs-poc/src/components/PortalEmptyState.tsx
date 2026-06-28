'use client'

import React from 'react'

import { Badge, EmptyState, Text } from '@tanishraj/ui-kit'

type PortalEmptyStateProps = {
  eyebrow: string
  title: React.ReactNode
  description: React.ReactNode
  children?: React.ReactNode
}

export function PortalEmptyState({
  eyebrow,
  title,
  description,
  children,
}: PortalEmptyStateProps) {
  return (
    <section className="portal-surface portal-empty-state">
      <Badge className="portal-badge" size="sm" variant="primary">
        {eyebrow}
      </Badge>

      <EmptyState
        className="portal-empty-state__content"
        copyClassName="portal-empty-state__copy"
        description={
          <Text as="p" size="lg" tone="caption">
            {description}
          </Text>
        }
        orientation="vertical"
        size="md"
        title={
          <Text as="h1" size="5xl" weight="bold">
            {title}
          </Text>
        }
      >
        {children ? <div className="portal-empty-state__actions">{children}</div> : null}
      </EmptyState>
    </section>
  )
}
