'use client'

import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Record<string, unknown>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [language, setLanguageState] = useState<Language>('en')
  const [translations, setTranslations] = useState<Record<string, unknown>>({})

  useEffect(() => {
    // Load language from localStorage or default to 'en'
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language') as Language
      const initialLang = stored && (stored === 'en' || stored === 'es') ? stored : 'en'
      setLanguageState(initialLang)
      document.documentElement.lang = initialLang
      // Set cookie for server-side access
      document.cookie = `language=${initialLang}; path=/; max-age=31536000` // 1 year
      loadTranslations(initialLang)
    }
  }, [])

  const loadTranslations = async (lang: Language) => {
    try {
      const { deepMergeTranslations } = await import('../lib/mergeTranslations')
      const [baseModule, sprint4Module] = await Promise.all([
        import(`../locales/${lang}.json`),
        import(`../locales/${lang}-sprint4.json`),
      ])
      const base = (baseModule.default || baseModule) as Record<string, unknown>
      const sprint4 = (sprint4Module.default || sprint4Module) as Record<string, unknown>
      setTranslations(deepMergeTranslations(base, sprint4))
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error)
      // Fallback to English if translation fails
      if (lang !== 'en') {
        const { deepMergeTranslations } = await import('../lib/mergeTranslations')
        const [enBase, enSprint4] = await Promise.all([
          import('../locales/en.json'),
          import('../locales/en-sprint4.json'),
        ])
        setTranslations(
          deepMergeTranslations(
            (enBase.default || enBase) as Record<string, unknown>,
            (enSprint4.default || enSprint4) as Record<string, unknown>,
          ),
        )
      }
    }
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
      // Set cookie for server-side access (so Server Components see the new language)
      document.cookie = `language=${lang}; path=/; max-age=31536000` // 1 year
      loadTranslations(lang)
      document.documentElement.lang = lang
      // Re-run Server Components so testimonials & projects load for the new language
      router.refresh()
    }
  }

  // Update HTML lang attribute when language changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

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
