import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'STDM Technical Support'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: 'Technical Support',
      title: 'Technical Support',
      subtitle: 'Commercial displays, interactive screens and installation support',
    }),
    { ...size },
  )
}
