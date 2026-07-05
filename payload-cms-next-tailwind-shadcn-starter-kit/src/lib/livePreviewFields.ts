export const LIVE_PREVIEW_FOCUS_FIELD = 'payload-live-preview-focus-field'
export const LIVE_PREVIEW_SET_FIELD = 'payload-live-preview-set-field'
export const LIVE_PREVIEW_INLINE_EDITING_EVENT = 'payload-live-preview-inline-editing'

export type LivePreviewFocusFieldMessage = {
  path: string
  type: typeof LIVE_PREVIEW_FOCUS_FIELD
}

export type LivePreviewSetFieldMessage = {
  path: string
  type: typeof LIVE_PREVIEW_SET_FIELD
  value: string
}

export const createLivePreviewFocusFieldMessage = (path: string): LivePreviewFocusFieldMessage => ({
  path,
  type: LIVE_PREVIEW_FOCUS_FIELD,
})

export const sendLivePreviewFocusField = (path: string) => {
  if (typeof window === 'undefined') {
    return
  }

  window.parent.postMessage(createLivePreviewFocusFieldMessage(path), '*')
}

export const createLivePreviewSetFieldMessage = (
  path: string,
  value: string,
): LivePreviewSetFieldMessage => ({
  path,
  type: LIVE_PREVIEW_SET_FIELD,
  value,
})

export const sendLivePreviewSetField = (path: string, value: string) => {
  if (typeof window === 'undefined') {
    return
  }

  window.parent.postMessage(createLivePreviewSetFieldMessage(path, value), '*')
}

export const setLivePreviewInlineEditing = (isEditing: boolean) => {
  if (typeof window === 'undefined') {
    return
  }

  window.dispatchEvent(
    new CustomEvent<boolean>(LIVE_PREVIEW_INLINE_EDITING_EVENT, {
      detail: isEditing,
    }),
  )
}

export const getAdminFieldID = (path: string) => `field-${path.replace(/\./g, '__')}`

export const getCollapsibleRowIDs = (path: string) => {
  const segments = path.split('.')

  return segments.reduce<string[]>((rowIDs, segment, index) => {
    if (!/^\d+$/.test(segment) || index === 0) {
      return rowIDs
    }

    rowIDs.push(`${segments.slice(0, index).join('-')}-row-${segment}`)

    return rowIDs
  }, [])
}

export const getAdminTabLabelForPath = (path: string) => {
  const [rootField] = path.split('.')

  switch (rootField) {
    case 'metaTitle':
    case 'metaDescription':
      return 'SEO'
    case 'parent':
    case 'showInNavigation':
      return 'Settings'
    default:
      return 'Content'
  }
}
