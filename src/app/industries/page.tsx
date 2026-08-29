import IndustriesPageContent from '@/components/Industries/IndustriesPageContent'
import JsonLd from '@/components/SEO/JsonLd'
import { buildPageMetadata, getMergedTranslations, getServerLanguage } from '@/lib/getPageMetadata'
import { buildIndustriesSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const { translations } = await getMergedTranslations()
  const pages = translations.pages as {
    industries: { metadata: { title: string; description: string } }
  }
  const meta = pages.industries.metadata

  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path: '/industries',
  })
}

export default async function IndustriesPage() {
  const lang = await getServerLanguage()
  const schema = buildIndustriesSchema(lang)

  return (
    <>
      <JsonLd data={schema} />
      <IndustriesPageContent />
    </>
  )
}
