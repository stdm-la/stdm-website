import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'STDM Equipment & Technology'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: 'Equipment & Technology',
      title: 'Equipment & Technology',
      subtitle: 'Large format printers, CNC, digital displays and installation support',
    }),
    { ...size },
  )
}
