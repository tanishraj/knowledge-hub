import type { MouseEventHandler } from 'react'

import { sendLivePreviewFocusField } from '@/lib/livePreviewFields'
import { cn } from '@/lib/utils'

type LivePreviewEditPropsOptions<TElement extends HTMLElement> = {
  className?: string
  enabled?: boolean
  label: string
  path: string
}

export const getLivePreviewEditProps = <TElement extends HTMLElement>({
  className,
  enabled = false,
  label,
  path,
}: LivePreviewEditPropsOptions<TElement>) => {
  if (!enabled) {
    return {
      className,
    }
  }

  const handleClick: MouseEventHandler<TElement> = (event) => {
    event.preventDefault()
    event.stopPropagation()
    sendLivePreviewFocusField(path)
  }

  return {
    className: cn(
      'cursor-pointer rounded-[0.35rem] outline-none transition hover:ring-2 hover:ring-primary/25 focus-visible:ring-2 focus-visible:ring-primary/35',
      className,
    ),
    onClick: handleClick,
    title: `Edit ${label}`,
  }
}
