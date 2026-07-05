import crypto from 'crypto'

const previewTokenLifetimeMs = 5 * 60 * 1000

const getLivePreviewSecret = () => {
  return process.env.PAYLOAD_LIVE_PREVIEW_SECRET || process.env.PAYLOAD_SECRET || null
}

const signPreviewPayload = (payload: string) => {
  const secret = getLivePreviewSecret()

  if (!secret) {
    return null
  }

  return crypto.createHmac('sha256', secret).update(payload).digest('base64url')
}

export const createLivePreviewToken = (slug: string) => {
  const expiresAt = Date.now() + previewTokenLifetimeMs
  const payload = `${slug}:${expiresAt}`
  const signature = signPreviewPayload(payload)

  if (!signature) {
    return null
  }

  return `${expiresAt}.${signature}`
}

export const isValidLivePreviewToken = (slug: string, token: string | null) => {
  if (!token) {
    return false
  }

  const [expiresAtRaw, providedSignature] = token.split('.')

  if (!expiresAtRaw || !providedSignature) {
    return false
  }

  const expiresAt = Number(expiresAtRaw)

  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) {
    return false
  }

  const expectedSignature = signPreviewPayload(`${slug}:${expiresAt}`)

  if (!expectedSignature) {
    return false
  }

  return crypto.timingSafeEqual(Buffer.from(providedSignature), Buffer.from(expectedSignature))
}
