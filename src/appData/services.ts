export type BusinessUnitKey = 'technology' | 'digital' | 'advertising' | 'equipment'

export const businessUnitRoutes: Record<BusinessUnitKey, string> = {
  technology: '/technology',
  digital: '/digital',
  advertising: '/advertising',
  equipment: '/equipment',
}

export const businessUnitServiceKeys: Record<BusinessUnitKey, string[]> = {
  technology: [
    'softwareDevelopment',
    'cloudSolutions',
    'itConsulting',
    'devops',
    'infrastructure',
    'cybersecurity',
    'industrialTechnology',
    'installationSupport',
  ],
  digital: [
    'digitalMarketing',
    'digitalAdvertising',
    'seo',
    'socialMedia',
    'marketingAutomation',
    'analytics',
  ],
  advertising: [
    'outdoorAdvertising',
    'indoorAdvertising',
    'signage',
    'customProjects',
  ],
  equipment: [
    'largeFormatPrinters',
    'cncEquipment',
    'digitalDisplays',
    'interactiveDisplays',
    'digitalSignageEquipment',
  ],
}

export const equipmentSupportKeys = [
  'installation',
  'configuration',
  'commissioning',
  'training',
  'maintenance',
  'technicalSupport',
]
