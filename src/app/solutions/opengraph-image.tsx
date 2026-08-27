import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'STDM Digital Experiences & Local Solutions'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: 'Digital Experiences',
      title: 'Local Solutions in Costa Rica',
      subtitle: 'Technology, digital marketing, advertising and equipment — tailored for your market',
    }),
    { ...size },
  )
}
