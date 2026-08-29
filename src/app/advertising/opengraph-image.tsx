import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'STDM Advertising & Signage'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: 'Advertising & Signage',
      title: 'Advertising & Signage Solutions',
      subtitle: 'Outdoor advertising, indoor displays and custom signage in Costa Rica',
    }),
    { ...size },
  )
}
