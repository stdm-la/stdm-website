import SeoLandingPage from '@/components/SEO/SeoLandingPage'
import JsonLd from '@/components/SEO/JsonLd'
import { getSeoLandingBySlug, seoLandings } from '@/appData/catalog'
import { buildPageMetadata, getMergedTranslations } from '@/lib/getPageMetadata'
import { buildBreadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return seoLandings.map((landing) => ({ slug: landing.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const landing = getSeoLandingBySlug(slug)
  if (!landing) return {}

  const { translations } = await getMergedTranslations()
  const pages = translations.pages as {
    seoLandings: Record<
      string,
      { metadata: { title: string; description: string }; headline: string }
    >
  }
  const page = pages.seoLandings[landing.contentKey]

  return buildPageMetadata({
    title: page.metadata.title,
    description: page.metadata.description,
    path: `/solutions/${slug}`,
  })
}

export default async function SeoLandingRoute({ params }: Props) {
  const { slug } = await params
  const landing = getSeoLandingBySlug(slug)
  if (!landing) notFound()

  const { translations } = await getMergedTranslations()
  const pages = translations.pages as {
    seoLandings: Record<string, { headline: string; metadata: { description: string } }>
  }
  const page = pages.seoLandings[landing.contentKey]
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stdm-la.com'

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.headline,
      description: page.metadata.description,
      url: `${siteUrl}/solutions/${slug}`,
      about: {
        '@type': 'Place',
        name: 'Costa Rica',
      },
    },
    buildBreadcrumbSchema([
      { name: 'Home', url: siteUrl },
      { name: page.headline, url: `${siteUrl}/solutions/${slug}` },
    ]),
  ]

  return (
    <>
      <JsonLd data={schema} />
      <SeoLandingPage landing={landing} />
    </>
  )
}
