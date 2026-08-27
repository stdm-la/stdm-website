export function getWhatsAppNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '50685174990'
}

export function buildWhatsAppUrl(message?: string) {
  const number = getWhatsAppNumber().replace(/\D/g, '')
  const base = `https://wa.me/${number}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function buildContactHref(params?: {
  source?: string
  interest?: string
}) {
  if (!params?.source && !params?.interest) return '/#contact'
  const search = new URLSearchParams()
  if (params.source) search.set('source', params.source)
  if (params.interest) search.set('interest', params.interest)
  return `/#contact?${search.toString()}`
}
