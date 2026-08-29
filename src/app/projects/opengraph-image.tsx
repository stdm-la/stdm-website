import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'STDM Projects & Case Studies'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: 'Projects',
      title: 'Projects & Case Studies',
      subtitle: 'Real results across technology, digital, advertising and equipment',
    }),
    { ...size },
  )
}
