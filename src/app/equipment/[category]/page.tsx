import CatalogCategoryPage from '@/components/Catalog/CatalogCategoryPage'
import JsonLd from '@/components/SEO/JsonLd'
import {
  equipmentCategorySlugs,
  equipmentSlugToCategory,
  type EquipmentCategoryKey,
} from '@/appData/catalog'
import { buildPageMetadata, getMergedTranslations } from '@/lib/getPageMetadata'
import { buildBreadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return Object.values(equipmentCategorySlugs).map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const category = equipmentSlugToCategory[slug]
  if (!category) return {}

  const { translations } = await getMergedTranslations()
  const catalog = translations.pages as {
    catalog: {
      categories: Record<EquipmentCategoryKey, { title: string; description: string }>
    }
  }
  const page = catalog.catalog.categories[category]

  return buildPageMetadata({
    title: `${page.title} | STDM Costa Rica`,
    description: page.description,
    path: `/equipment/${slug}`,
  })
}

export default async function EquipmentCategoryRoute({ params }: Props) {
  const { category: slug } = await params
  const category = equipmentSlugToCategory[slug]
  if (!category) notFound()

  const { translations } = await getMergedTranslations()
  const catalog = translations.pages as {
    catalog: {
      categories: Record<EquipmentCategoryKey, { title: string; description: string }>
    }
  }
  const page = catalog.catalog.categories[category]
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stdm-la.com'

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: page.title,
      description: page.description,
      url: `${siteUrl}/equipment/${slug}`,
    },
    buildBreadcrumbSchema([
      { name: 'Home', url: siteUrl },
      { name: 'Equipment', url: `${siteUrl}/equipment` },
      { name: page.title, url: `${siteUrl}/equipment/${slug}` },
    ]),
  ]

  return (
    <>
      <JsonLd data={schema} />
      <CatalogCategoryPage category={category} />
    </>
  )
}
