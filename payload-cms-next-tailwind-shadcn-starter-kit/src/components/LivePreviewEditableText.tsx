'use client'

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type MouseEvent,
  type KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
} from 'react'

import { sendLivePreviewSetField, setLivePreviewInlineEditing } from '@/lib/livePreviewFields'
import { cn } from '@/lib/utils'

type LivePreviewEditableTextProps<TTag extends ElementType> = {
  as?: TTag
  className?: string
  enabled?: boolean
  multiline?: boolean
  path: string
  value?: null | string
} & Omit<
  ComponentPropsWithoutRef<TTag>,
  'children' | 'contentEditable' | 'suppressContentEditableWarning'
>

const syncDelayMs = 300

const normalizePreviewValue = (value: string, multiline: boolean) => {
  const normalized = value.replace(/\u00a0/g, ' ')

  if (multiline) {
    return normalized.replace(/\r\n/g, '\n')
  }

  return normalized.replace(/\s*\n\s*/g, ' ').trim()
}

const setElementText = (element: HTMLElement, value: string) => {
  if (element.textContent === value) {
    return
  }

  element.textContent = value
}

export function LivePreviewEditableText<TTag extends ElementType = 'span'>({
  as,
  className,
  enabled = true,
  multiline = false,
  path,
  value,
  ...rest
}: LivePreviewEditableTextProps<TTag>) {
  const Component = useMemo(() => (as ?? 'span') as ElementType, [as])
  const elementRef = useRef<HTMLElement | null>(null)
  const isEditingRef = useRef(false)
  const syncTimerRef = useRef<number | null>(null)
  const lastSyncedValueRef = useRef(value ?? '')

  useEffect(() => {
    const nextValue = value ?? ''

    lastSyncedValueRef.current = nextValue

    if (!enabled || isEditingRef.current || !elementRef.current) {
      return
    }

    setElementText(elementRef.current, nextValue)
  }, [enabled, value])

  useEffect(() => {
    return () => {
      if (syncTimerRef.current) {
        window.clearTimeout(syncTimerRef.current)
      }
    }
  }, [])

  const commitValue = () => {
    if (!elementRef.current) {
      return
    }

    const nextValue = normalizePreviewValue(elementRef.current.innerText, multiline)

    setElementText(elementRef.current, nextValue)

    if (nextValue === lastSyncedValueRef.current) {
      return
    }

    lastSyncedValueRef.current = nextValue
    sendLivePreviewSetField(path, nextValue)
  }

  const scheduleSync = () => {
    if (syncTimerRef.current) {
      window.clearTimeout(syncTimerRef.current)
    }

    syncTimerRef.current = window.setTimeout(() => {
      commitValue()
    }, syncDelayMs)
  }

  const handleBlur = () => {
    isEditingRef.current = false
    setLivePreviewInlineEditing(false)
    commitValue()
  }

  const handleFocus = () => {
    isEditingRef.current = true
    setLivePreviewInlineEditing(true)
  }

  const handleMouseDown = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()

      if (elementRef.current) {
        setElementText(elementRef.current, lastSyncedValueRef.current)
        elementRef.current.blur()
      }

      return
    }

    if (!multiline && event.key === 'Enter') {
      event.preventDefault()
      event.currentTarget.blur()
    }
  }

  if (!enabled) {
    return <Component {...rest}>{value}</Component>
  }

  return (
    <Component
      {...rest}
      ref={(node: HTMLElement | null) => {
        elementRef.current = node
      }}
      className={cn(
        'cursor-text rounded-[0.35rem] outline-none transition hover:ring-2 hover:ring-primary/20 focus:ring-2 focus:ring-primary/35 whitespace-pre-wrap',
        !multiline && 'inline-block',
        className,
      )}
      contentEditable
      data-live-preview-path={path}
      onBlur={handleBlur}
      onClick={handleClick}
      onFocus={handleFocus}
      onInput={scheduleSync}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      role="textbox"
      spellCheck
      suppressContentEditableWarning
      tabIndex={0}
    >
      {value ?? ''}
    </Component>
  )
}
