import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'STDM | IT, Digital Marketing and Technical Support'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      title: 'IT, Digital Marketing and Technical Support',
      subtitle: 'An integrated partner for IT, digital marketing and technical support',
    }),
    { ...size },
  )
}
