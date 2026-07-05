'use client'

import { useEffect } from 'react'
import { useForm, useFormFields } from '@payloadcms/ui'

import {
  getAdminFieldID,
  getAdminTabLabelForPath,
  getCollapsibleRowIDs,
  LIVE_PREVIEW_FOCUS_FIELD,
  LIVE_PREVIEW_SET_FIELD,
  type LivePreviewFocusFieldMessage,
  type LivePreviewSetFieldMessage,
} from '@/lib/livePreviewFields'

const highlightClassName = 'payload-live-preview-focus-highlight'
const highlightStyleID = 'payload-live-preview-focus-highlight-style'
const focusableSelector =
  'input, textarea, select, button, [contenteditable="true"], [tabindex]:not([tabindex="-1"])'

const ensureHighlightStyles = () => {
  if (document.getElementById(highlightStyleID)) {
    return
  }

  const style = document.createElement('style')

  style.id = highlightStyleID
  style.textContent = `
    .${highlightClassName} {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--theme-success-500, #10b981) 55%, transparent);
      border-radius: 0.5rem;
      transition: box-shadow 0.2s ease;
    }
  `

  document.head.appendChild(style)
}

const findTabButton = (label: string) => {
  const tabs = Array.from(document.querySelectorAll<HTMLElement>('[role="tab"]'))

  return tabs.find((tab) => tab.textContent?.trim() === label)
}

const openTabForPath = (path: string) => {
  const tab = findTabButton(getAdminTabLabelForPath(path))

  if (!tab || tab.getAttribute('aria-selected') === 'true') {
    return
  }

  tab.click()
}

const expandRowsForPath = (path: string) => {
  for (const rowID of getCollapsibleRowIDs(path)) {
    const row = document.getElementById(rowID)
    const collapsible = row?.querySelector<HTMLElement>('.collapsible')

    if (!collapsible?.classList.contains('collapsible--collapsed')) {
      continue
    }

    const toggle = collapsible.querySelector<HTMLButtonElement>('.collapsible__toggle')

    toggle?.click()
  }
}

const findFieldContainer = (path: string) => {
  const fieldID = getAdminFieldID(path)

  return (
    document.getElementById(fieldID) ??
    document.querySelector<HTMLElement>(`[name="${path}"]`) ??
    document.querySelector<HTMLElement>(`[data-path="${path}"]`) ??
    document.querySelector<HTMLElement>(`[data-field-path="${path}"]`)
  )
}

const focusField = (path: string) => {
  openTabForPath(path)

  window.setTimeout(() => {
    expandRowsForPath(path)

    window.setTimeout(() => {
      const container = findFieldContainer(path)

      if (!container) {
        return
      }

      const target = container.matches(focusableSelector)
        ? container
        : container.querySelector<HTMLElement>(focusableSelector)

      container.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })

      target?.focus({
        preventScroll: true,
      })

      ensureHighlightStyles()
      container.classList.add(highlightClassName)

      window.setTimeout(() => {
        container.classList.remove(highlightClassName)
      }, 1800)
    }, 140)
  }, 30)
}

export function LivePreviewFieldBridge() {
  const dispatchField = useFormFields(([_, dispatch]) => dispatch)
  const { setModified } = useForm()

  useEffect(() => {
    const handleMessage = (
      event: MessageEvent<LivePreviewFocusFieldMessage | LivePreviewSetFieldMessage>,
    ) => {
      if (!event.data?.path) {
        return
      }

      if (event.data.type === LIVE_PREVIEW_FOCUS_FIELD) {
        focusField(event.data.path)
        return
      }

      if (event.data.type === LIVE_PREVIEW_SET_FIELD) {
        dispatchField({
          path: event.data.path,
          type: 'UPDATE',
          value: event.data.value,
        })
        setModified(true)
        return
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [dispatchField, setModified])

  return null
}
