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
      subtitle: 'IT, digital marketing and technical support — tailored for your market',
    }),
    { ...size },
  )
}
