export type BusinessUnitKey = 'technology' | 'digital' | 'equipment'

export const businessUnitRoutes: Record<BusinessUnitKey, string> = {
  technology: '/technology',
  digital: '/digital',
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
  equipment: ['digitalDisplays', 'interactiveDisplays'],
}

export const equipmentSupportKeys = [
  'installation',
  'configuration',
  'commissioning',
  'training',
  'maintenance',
  'technicalSupport',
]
