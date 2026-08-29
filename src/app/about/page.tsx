import AboutPageContent from '@/components/About/AboutPageContent'
import JsonLd from '@/components/SEO/JsonLd'
import { teamData } from '@/appData'
import { buildPageMetadata, getMergedTranslations } from '@/lib/getPageMetadata'
import { buildBreadcrumbSchema, buildOrganizationSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const { translations } = await getMergedTranslations()
  const pages = translations.pages as {
    about: { metadata: { title: string; description: string } }
  }
  const meta = pages.about.metadata

  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path: '/about',
  })
}

export default async function AboutPage() {
  const { translations } = await getMergedTranslations()
  const pages = translations.pages as {
    about: { headline: string; metadata: { description: string } }
  }
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stdm-la.com'

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: pages.about.headline,
      description: pages.about.metadata.description,
      url: `${siteUrl}/about`,
      mainEntity: {
        '@context': 'https://schema.org',
        ...buildOrganizationSchema(),
      },
    },
    buildBreadcrumbSchema([
      { name: 'Home', url: siteUrl },
      { name: pages.about.headline, url: `${siteUrl}/about` },
    ]),
  ]

  return (
    <>
      <JsonLd data={schema} />
      <AboutPageContent team={teamData} />
    </>
  )
}
