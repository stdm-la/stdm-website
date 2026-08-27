import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'STDM Industries We Serve'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: 'Industries',
      title: 'Industries We Serve',
      subtitle: 'Integrated solutions for retail, manufacturing, healthcare and more in Costa Rica',
    }),
    { ...size },
  )
}
