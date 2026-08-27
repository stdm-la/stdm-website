import type { Project } from '@/lib/types'
import type { BusinessUnitKey } from '@/appData/services'
import { businessUnitServiceKeys, equipmentSupportKeys } from '@/appData/services'
import en from '@/locales/en.json'
import es from '@/locales/es.json'

const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/stdm-la/',
  'https://www.instagram.com/stdm.world/',
  'https://www.facebook.com/profile.php?id=61566958860944',
  'https://github.com/stdm-la',
]

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://stdm-la.com'
}

function getTranslations(lang: 'en' | 'es') {
  return lang === 'es' ? es : en
}

function organizationRef(siteUrl: string) {
  return {
    '@type': 'Organization',
    name: 'STDM',
    legalName: 'SIS Technologies Digital Marketing S.R.L.',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    sameAs: SOCIAL_PROFILES,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+506-85174990',
      email: 'contact@stdm-la.com',
      contactType: 'customer service',
      areaServed: 'CR',
      availableLanguage: ['English', 'Spanish'],
    },
  }
}

export function buildOrganizationSchema() {
  const siteUrl = getSiteUrl()
  return organizationRef(siteUrl)
}

export function buildWebSiteSchema() {
  const siteUrl = getSiteUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'STDM',
    url: siteUrl,
    publisher: organizationRef(siteUrl),
  }
}

export function buildHomeSchema() {
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationRef(siteUrl),
      {
        '@type': 'WebSite',
        name: 'STDM',
        url: siteUrl,
        publisher: organizationRef(siteUrl),
      },
    ],
  }
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildBusinessUnitSchema(unit: BusinessUnitKey, lang: 'en' | 'es' = 'en') {
  const siteUrl = getSiteUrl()
  const translations = getTranslations(lang)
  const page = translations.pages[unit]
  const serviceKeys = businessUnitServiceKeys[unit]

  const services = serviceKeys.map((key) => {
    const service = page.services[key as keyof typeof page.services] as {
      title: string
      description: string
    }
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: organizationRef(siteUrl),
      areaServed: {
        '@type': 'Country',
        name: 'Costa Rica',
      },
      url: `${siteUrl}/${unit}`,
    }
  })

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: page.headline, url: `${siteUrl}/${unit}` },
  ])

  if (unit === 'equipment') {
    const equipmentPage = translations.pages.equipment

    const products = serviceKeys.map((key) => {
      const product = equipmentPage.services[key as keyof typeof equipmentPage.services] as {
        title: string
        description: string
      }
      return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        brand: { '@type': 'Brand', name: 'STDM' },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          seller: organizationRef(siteUrl),
        },
      }
    })

    const supportServices = equipmentSupportKeys.map((key) => {
      const support = equipmentPage.support[key as keyof typeof equipmentPage.support] as {
        title: string
        description: string
      }
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: support.title,
        description: support.description,
        provider: organizationRef(siteUrl),
      }
    })

    return [...services, ...products, ...supportServices, breadcrumbs]
  }

  return [...services, breadcrumbs]
}

export function buildProjectsSchema(projects: Project[], lang: 'en' | 'es' = 'en') {
  const siteUrl = getSiteUrl()
  const translations = getTranslations(lang)

  const caseStudies = projects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: project.title,
    description: project.description,
    about: {
      '@type': 'Organization',
      name: project.client,
    },
    genre: translations.projectCategories[project.category],
    datePublished: project.createdAt,
    url: `${siteUrl}/projects#${project.slug}`,
    creator: organizationRef(siteUrl),
    mainEntityOfPage: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.shortDescription,
    },
  }))

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    {
      name: translations.pages.projects.headline,
      url: `${siteUrl}/projects`,
    },
  ])

  return [...caseStudies, breadcrumbs]
}

export function buildIndustriesSchema(lang: 'en' | 'es' = 'en') {
  const siteUrl = getSiteUrl()
  const translations = getTranslations(lang)
  const page = translations.pages.industries

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: page.headline, url: `${siteUrl}/industries` },
  ])

  return breadcrumbs
}

export async function getServerLanguage(): Promise<'en' | 'es'> {
  const { cookies } = await import('next/headers')
  const cookieStore = await cookies()
  const lang = cookieStore.get('language')?.value
  return lang === 'es' ? 'es' : 'en'
}
