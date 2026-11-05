import type { BusinessUnitKey } from './services'

export type EquipmentCategoryKey = 'digitalDisplays' | 'interactiveDisplays'

export const equipmentCategorySlugs: Record<EquipmentCategoryKey, string> = {
  digitalDisplays: 'digital-displays',
  interactiveDisplays: 'interactive-displays',
}

export const equipmentSlugToCategory: Record<string, EquipmentCategoryKey> = Object.fromEntries(
  Object.entries(equipmentCategorySlugs).map(([key, slug]) => [slug, key as EquipmentCategoryKey]),
)

/** Product lines per category (inquiry-based catalog, not e-commerce SKUs) */
export const catalogProductKeys: Record<EquipmentCategoryKey, string[]> = {
  digitalDisplays: ['indoorLcd', 'outdoorLed', 'videoWall', 'windowDisplay'],
  interactiveDisplays: ['touchScreen', 'interactiveKiosk', 'collaborationDisplay'],
}

export type SeoLandingDefinition = {
  slug: string
  unit: BusinessUnitKey
  contentKey: string
  relatedPath: string
}

export const seoLandings: SeoLandingDefinition[] = [
  {
    slug: 'software-development-costa-rica',
    unit: 'technology',
    contentKey: 'softwareDevelopment',
    relatedPath: '/technology',
  },
  {
    slug: 'cloud-solutions-costa-rica',
    unit: 'technology',
    contentKey: 'cloudSolutions',
    relatedPath: '/technology',
  },
  {
    slug: 'it-consulting-costa-rica',
    unit: 'technology',
    contentKey: 'itConsulting',
    relatedPath: '/technology',
  },
  {
    slug: 'it-infrastructure-costa-rica',
    unit: 'technology',
    contentKey: 'itInfrastructure',
    relatedPath: '/technology',
  },
  {
    slug: 'digital-marketing-costa-rica',
    unit: 'digital',
    contentKey: 'digitalMarketing',
    relatedPath: '/digital',
  },
  {
    slug: 'social-media-marketing-costa-rica',
    unit: 'digital',
    contentKey: 'socialMedia',
    relatedPath: '/digital',
  },
  {
    slug: 'paid-media-costa-rica',
    unit: 'digital',
    contentKey: 'digitalAdvertising',
    relatedPath: '/digital',
  },
  {
    slug: 'digital-displays-costa-rica',
    unit: 'equipment',
    contentKey: 'digitalDisplays',
    relatedPath: '/equipment/digital-displays',
  },
  {
    slug: 'interactive-displays-costa-rica',
    unit: 'equipment',
    contentKey: 'interactiveDisplays',
    relatedPath: '/equipment/interactive-displays',
  },
]

export function getSeoLandingBySlug(slug: string) {
  return seoLandings.find((landing) => landing.slug === slug)
}
