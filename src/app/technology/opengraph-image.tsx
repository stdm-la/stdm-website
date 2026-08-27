import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'STDM Technology & IT Solutions'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: 'Technology & IT',
      title: 'Technology & IT Solutions',
      subtitle: 'Software, cloud, IT consulting, infrastructure and cybersecurity in Costa Rica',
    }),
    { ...size },
  )
}
