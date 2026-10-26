import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import { COOKIE_CONSENT_NAME, isCookieConsentAccepted } from '@/lib/cookieConsent'
import { getLocaleMessages, resolveLanguage, type Language } from '@/lib/translations'

export async function getServerLanguage(): Promise<Language> {
  const cookieStore = await cookies()
  return resolveLanguage(cookieStore.get('language')?.value)
}

export async function hasAcceptedCookieNotice(): Promise<boolean> {
  const cookieStore = await cookies()
  return isCookieConsentAccepted(cookieStore.get(COOKIE_CONSENT_NAME)?.value)
}

export async function getMergedTranslations() {
  const lang = await getServerLanguage()
  return {
    lang,
    translations: getLocaleMessages(lang),
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
