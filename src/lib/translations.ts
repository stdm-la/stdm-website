import en from '@/locales/en.json'
import es from '@/locales/es.json'
import enSprint4 from '@/locales/en-sprint4.json'
import esSprint4 from '@/locales/es-sprint4.json'
import { deepMergeTranslations } from '@/lib/mergeTranslations'

export type Language = 'en' | 'es'

/** Spanish unless the visitor explicitly chose English. */
export function resolveLanguage(value: string | null | undefined): Language {
  return value === 'en' ? 'en' : 'es'
}

const messages: Record<Language, Record<string, unknown>> = {
  en: deepMergeTranslations(en as Record<string, unknown>, enSprint4 as Record<string, unknown>),
  es: deepMergeTranslations(es as Record<string, unknown>, esSprint4 as Record<string, unknown>),
}

/** Merged UI copy for a locale. Synchronous so server and client renders resolve keys. */
export function getLocaleMessages(language: Language): Record<string, unknown> {
  return messages[language]
}
