'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Record<string, unknown>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
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
      const translationsModule = await import(`../locales/${lang}.json`)
      setTranslations(translationsModule.default || translationsModule)
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error)
      // Fallback to English if translation fails
      if (lang !== 'en') {
        const enTranslations = await import('../locales/en.json')
        setTranslations(enTranslations.default || enTranslations)
      }
    }
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
      // Set cookie for server-side access
      document.cookie = `language=${lang}; path=/; max-age=31536000` // 1 year
      loadTranslations(lang)
      // Update HTML lang attribute
      document.documentElement.lang = lang
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
