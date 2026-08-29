import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'STDM | Technology, Digital & Advertising Solutions'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      title: 'Technology, Digital & Advertising Solutions',
      subtitle: 'An integrated partner for technology, marketing, advertising and equipment',
    }),
    { ...size },
  )
}
