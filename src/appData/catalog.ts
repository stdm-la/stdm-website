import type { BusinessUnitKey } from './services'

export type EquipmentCategoryKey =
  | 'largeFormatPrinters'
  | 'cncEquipment'
  | 'digitalDisplays'
  | 'interactiveDisplays'
  | 'digitalSignageEquipment'

export const equipmentCategorySlugs: Record<EquipmentCategoryKey, string> = {
  largeFormatPrinters: 'large-format-printers',
  cncEquipment: 'cnc-equipment',
  digitalDisplays: 'digital-displays',
  interactiveDisplays: 'interactive-displays',
  digitalSignageEquipment: 'digital-signage',
}

export const equipmentSlugToCategory: Record<string, EquipmentCategoryKey> = Object.fromEntries(
  Object.entries(equipmentCategorySlugs).map(([key, slug]) => [slug, key as EquipmentCategoryKey]),
)

/** Product lines per category (inquiry-based catalog, not e-commerce SKUs) */
export const catalogProductKeys: Record<EquipmentCategoryKey, string[]> = {
  largeFormatPrinters: ['solventPrinter', 'uvPrinter', 'ecoSolventPrinter', 'plotterCutter'],
  cncEquipment: ['cncRouter', 'laserCnc', 'plasmaCutter'],
  digitalDisplays: ['indoorLcd', 'outdoorLed', 'videoWall', 'windowDisplay'],
  interactiveDisplays: ['touchScreen', 'interactiveKiosk', 'collaborationDisplay'],
  digitalSignageEquipment: ['mediaPlayer', 'signageSoftware', 'mountingKits', 'completeKit'],
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
    slug: 'digital-advertising-costa-rica',
    unit: 'digital',
    contentKey: 'digitalAdvertising',
    relatedPath: '/digital',
  },
  {
    slug: 'outdoor-advertising-costa-rica',
    unit: 'advertising',
    contentKey: 'outdoorAdvertising',
    relatedPath: '/advertising',
  },
  {
    slug: 'signage-costa-rica',
    unit: 'advertising',
    contentKey: 'signage',
    relatedPath: '/advertising',
  },
  {
    slug: 'large-format-printers-costa-rica',
    unit: 'equipment',
    contentKey: 'largeFormatPrinters',
    relatedPath: '/equipment/large-format-printers',
  },
  {
    slug: 'cnc-costa-rica',
    unit: 'equipment',
    contentKey: 'cnc',
    relatedPath: '/equipment/cnc-equipment',
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
