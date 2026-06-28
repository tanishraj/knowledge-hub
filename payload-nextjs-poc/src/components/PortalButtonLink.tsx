'use client'

import React from 'react'

import { Button } from '@tanishraj/ui-kit'
import type { ComponentProps } from 'react'
import { useRouter } from 'next/navigation'

type PortalButtonLinkProps = Omit<ComponentProps<typeof Button>, 'onClick' | 'type'> & {
  href: string
}

export function PortalButtonLink({
  href,
  children,
  ...buttonProps
}: PortalButtonLinkProps) {
  const router = useRouter()

  return (
    <Button
      {...buttonProps}
      type="button"
      onClick={() => {
        router.push(href)
      }}
    >
      {children}
    </Button>
  )
}
