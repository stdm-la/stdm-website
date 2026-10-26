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

function persistLanguage(lang: Language) {
  localStorage.setItem('language', lang)
  // Cookie is what Server Components use for projects, testimonials, and metadata.
  document.cookie = `language=${lang}; path=/; max-age=31536000`
  document.documentElement.lang = lang
}

export function LanguageProvider({
  children,
  initialLanguage = 'en',
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
    const stored = localStorage.getItem('language')
    const storedLang = stored === 'en' || stored === 'es' ? stored : null

    if (storedLang && storedLang !== initialLanguage) {
      setLanguageState(storedLang)
      setTranslations(getLocaleMessages(storedLang))
      persistLanguage(storedLang)
      router.refresh()
      return
    }

    persistLanguage(initialLanguage)
  }, [initialLanguage, router])

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
