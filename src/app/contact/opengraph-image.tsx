import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'Contact STDM'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: 'Contact',
      title: 'Let\'s Talk',
      subtitle: 'Request a consultation with STDM in Costa Rica',
    }),
    { ...size },
  )
}
