'use client'

import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { getLocaleMessages, type Language } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Record<string, unknown>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function hasLanguageCookie() {
  return document.cookie.split(';').some((part) => part.trim().startsWith('language='))
}

function persistLanguage(lang: Language) {
  localStorage.setItem('language', lang)
  document.documentElement.lang = lang
  // Spanish is the default and stays cookieless. Any other locale is stored so
  // Server Components can render it; switching back to Spanish removes the cookie.
  if (lang === 'es') {
    if (hasLanguageCookie()) {
      document.cookie = 'language=; path=/; max-age=0'
    }
    return
  }
  document.cookie = `language=${lang}; path=/; max-age=31536000`
}

export function LanguageProvider({
  children,
  initialLanguage = 'es',
}: {
  children: ReactNode
  initialLanguage?: Language
}) {
  const router = useRouter()
  const [language, setLanguageState] = useState<Language>(initialLanguage)
  // Messages must be present on the first render. Loading them in an effect
  // left this state as {} during SSR, so useTranslation fell back to key paths.
  const [translations, setTranslations] = useState<Record<string, unknown>>(() =>
    getLocaleMessages(initialLanguage),
  )

  useEffect(() => {
    // Keep storage aligned with the server language. A missing cookie is Spanish,
    // so this does not create a language cookie on the first visit.
    persistLanguage(initialLanguage)
  }, [initialLanguage])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setTranslations(getLocaleMessages(lang))
    persistLanguage(lang)
    router.refresh()
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
