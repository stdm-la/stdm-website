import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'STDM Digital Marketing Solutions'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: 'Digital Marketing',
      title: 'Digital Marketing Solutions',
      subtitle: 'SEO, social media, digital advertising and analytics in Costa Rica',
    }),
    { ...size },
  )
}
