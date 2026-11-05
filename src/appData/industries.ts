import type { ProjectCategory } from '@/lib/types'

export const projectCategoryKeys: ProjectCategory[] = [
  'software',
  'infrastructure',
  'cloud',
  'marketing',
  'equipment',
  'automation',
]

export const industryKeys = [
  'retail',
  'manufacturing',
  'construction',
  'education',
  'healthcare',
  'hospitality',
  'professionalServices',
  'financialServices',
] as const

export type IndustryKey = (typeof industryKeys)[number]
