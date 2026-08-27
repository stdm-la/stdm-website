import { ImageResponse } from 'next/og'
import { buildOgImageJsx, ogImageSize } from '@/lib/ogImage'

export const runtime = 'edge'
export const alt = 'About STDM'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: 'About STDM',
      title: 'SIS Technologies Digital Marketing S.R.L.',
      subtitle: 'Technology, digital and advertising solutions integrator in Costa Rica',
    }),
    { ...size },
  )
}
