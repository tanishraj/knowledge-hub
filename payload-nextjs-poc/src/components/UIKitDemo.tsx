'use client'

import React, { useState } from 'react'

import { Badge, Button, Divider, Input, Modal, Text } from '@tanishraj/ui-kit'

export function UIKitDemo() {
  const [open, setOpen] = useState(false)

  return (
    <section className="ui-kit-demo" aria-labelledby="ui-kit-demo-title">
      <div className="ui-kit-demo__copy">
        <Badge className="portal-badge" size="sm" variant="info">
          UI kit installed
        </Badge>
        <Text as="h2" className="ui-kit-demo__title" id="ui-kit-demo-title" size="4xl" weight="bold">
          The shared component library is ready to use.
        </Text>
        <Text as="p" className="ui-kit-demo__lead" size="lg" tone="caption">
          This demo renders <code>Input</code>, <code>Button</code>, and <code>Modal</code>{' '}
          from <code>@tanishraj/ui-kit</code> inside the Next.js app.
        </Text>
      </div>

      <div className="portal-surface ui-kit-demo__surface">
        <div className="ui-kit-demo__stack">
          <Input label="Workspace name" placeholder="Acme Bakery" />

          <div className="ui-kit-demo__actions">
            <Button appearance="filled" variant="primary" onClick={() => setOpen(true)}>
              Open modal
            </Button>
            <Button appearance="outline" variant="default" onClick={() => setOpen(false)}>
              Reset
            </Button>
          </div>

          <Divider />

          <Text as="p" size="md" tone="caption">
            This is a good place to start replacing one-off form controls with shared,
            theme-aware UI kit components.
          </Text>
        </div>
      </div>

      <Modal
        open={open}
        title="Create workspace"
        onClose={() => setOpen(false)}
        footer={
          <div className="ui-kit-demo__modal-actions">
            <Button appearance="outline" variant="default" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button appearance="filled" variant="primary" onClick={() => setOpen(false)}>
              Continue
            </Button>
          </div>
        }
      >
        Your UI kit components are available in this app and ready for real screens.
      </Modal>
    </section>
  )
}
