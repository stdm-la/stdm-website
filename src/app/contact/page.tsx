import ContactPageContent from '@/components/Contact/ContactPageContent'
import JsonLd from '@/components/SEO/JsonLd'
import { buildPageMetadata, getMergedTranslations } from '@/lib/getPageMetadata'
import { buildBreadcrumbSchema, buildOrganizationSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const { translations } = await getMergedTranslations()
  const pages = translations.pages as {
    contact: { metadata: { title: string; description: string } }
  }
  const meta = pages.contact.metadata

  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path: '/contact',
  })
}

export default async function ContactPage() {
  const { translations } = await getMergedTranslations()
  const pages = translations.pages as {
    contact: { headline: string; metadata: { description: string } }
  }
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stdm-la.com'

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: pages.contact.headline,
      description: pages.contact.metadata.description,
      url: `${siteUrl}/contact`,
      mainEntity: {
        '@context': 'https://schema.org',
        ...buildOrganizationSchema(),
      },
    },
    buildBreadcrumbSchema([
      { name: 'Home', url: siteUrl },
      { name: pages.contact.headline, url: `${siteUrl}/contact` },
    ]),
  ]

  return (
    <>
      <JsonLd data={schema} />
      <ContactPageContent />
    </>
  )
}
