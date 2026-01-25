import { useLanguage } from '@/contexts/LanguageContext'

export function useTranslation() {
  const { translations } = useLanguage()

  const t = (key: string, defaultValue?: string): string => {
    const keys = key.split('.')
    let value: unknown = translations

    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return defaultValue || key
      }
    }

    return typeof value === 'string' ? value : defaultValue || key
  }

  return { t }
}
