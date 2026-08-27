import type { MetadataRoute } from 'next'
import { equipmentCategorySlugs, seoLandings } from '@/appData/catalog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

  const corePages = [
    'technology',
    'digital',
    'advertising',
    'equipment',
    'projects',
    'industries',
    'about',
  ] as const

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...corePages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...Object.values(equipmentCategorySlugs).map((slug) => ({
      url: `${baseUrl}/equipment/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...seoLandings.map((landing) => ({
      url: `${baseUrl}/solutions/${landing.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ]
}
