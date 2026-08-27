import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import { deepMergeTranslations } from '@/lib/mergeTranslations'
import en from '@/locales/en.json'
import es from '@/locales/es.json'
import enSprint4 from '@/locales/en-sprint4.json'
import esSprint4 from '@/locales/es-sprint4.json'

export async function getServerLanguage(): Promise<'en' | 'es'> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('language')?.value
  return lang === 'es' ? 'es' : 'en'
}

export async function getMergedTranslations() {
  const lang = await getServerLanguage()
  const base = (lang === 'es' ? es : en) as Record<string, unknown>
  const sprint4 = (lang === 'es' ? esSprint4 : enSprint4) as Record<string, unknown>
  return {
    lang,
    translations: deepMergeTranslations(base, sprint4),
  }
}

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://stdm-la.com'
}

/** Build consistent page metadata with canonical + Open Graph URL. */
export function buildPageMetadata(options: {
  title: string
  description: string
  path?: string
}): Metadata {
  const siteUrl = getSiteUrl()
  const path = options.path || '/'
  const url = path === '/' ? siteUrl : `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`

  return {
    title: options.title,
    description: options.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      siteName: 'STDM',
      type: 'website',
    },
    twitter: {
      title: options.title,
      description: options.description,
      card: 'summary_large_image',
    },
  }
}

export async function getRootMetadata(): Promise<Metadata> {
  const { lang, translations } = await getMergedTranslations()
  const meta = translations.metadata as {
    title: string
    description: string
    siteName: string
  }
  const siteUrl = getSiteUrl()

  return {
    ...buildPageMetadata({
      title: meta.title,
      description: meta.description,
      path: '/',
    }),
    category: 'technology',
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: siteUrl,
      siteName: meta.siteName || 'STDM',
      type: 'website',
      locale: lang === 'es' ? 'es_CR' : 'en_US',
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/icon1.png', sizes: '96x96', type: 'image/png' },
      ],
      apple: [{ url: '/icon2.png', sizes: '180x180', type: 'image/png' }],
    },
  }
}

export async function getBusinessUnitMetadata(unit: string): Promise<Metadata> {
  const { translations } = await getMergedTranslations()
  const pages = translations.pages as Record<
    string,
    { metadata: { title: string; description: string } }
  >
  const page = pages[unit]

  return buildPageMetadata({
    title: page.metadata.title,
    description: page.metadata.description,
    path: `/${unit}`,
  })
}
