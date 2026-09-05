'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

const UsFlag = () => (
  <svg viewBox="0 0 24 16" className="size-full" aria-hidden>
    <rect width="24" height="16" rx="2" fill="#B22234" />
    <rect y="1.23" width="24" height="1.23" fill="#fff" />
    <rect y="3.69" width="24" height="1.23" fill="#fff" />
    <rect y="6.15" width="24" height="1.23" fill="#fff" />
    <rect y="8.62" width="24" height="1.23" fill="#fff" />
    <rect y="11.08" width="24" height="1.23" fill="#fff" />
    <rect y="13.54" width="24" height="1.23" fill="#fff" />
    <rect width="10" height="8.62" rx="1" fill="#3C3B6E" />
    <circle cx="2" cy="2" r="0.45" fill="#fff" />
    <circle cx="4" cy="2" r="0.45" fill="#fff" />
    <circle cx="6" cy="2" r="0.45" fill="#fff" />
    <circle cx="8" cy="2" r="0.45" fill="#fff" />
    <circle cx="3" cy="3.6" r="0.45" fill="#fff" />
    <circle cx="5" cy="3.6" r="0.45" fill="#fff" />
    <circle cx="7" cy="3.6" r="0.45" fill="#fff" />
    <circle cx="2" cy="5.2" r="0.45" fill="#fff" />
    <circle cx="4" cy="5.2" r="0.45" fill="#fff" />
    <circle cx="6" cy="5.2" r="0.45" fill="#fff" />
    <circle cx="8" cy="5.2" r="0.45" fill="#fff" />
    <circle cx="3" cy="6.8" r="0.45" fill="#fff" />
    <circle cx="5" cy="6.8" r="0.45" fill="#fff" />
    <circle cx="7" cy="6.8" r="0.45" fill="#fff" />
  </svg>
)

const CrFlag = () => (
  <svg viewBox="0 0 24 16" className="size-full" aria-hidden>
    <rect width="24" height="16" rx="2" fill="#002B7F" />
    <rect y="2.67" width="24" height="10.66" fill="#fff" />
    <rect y="5.33" width="24" height="5.34" fill="#CE1126" />
  </svg>
)

interface LanguageSwitcherProps {
  onSelect?: () => void
}

const LanguageSwitcher = ({ onSelect }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()

  const select = (lang: 'en' | 'es') => {
    setLanguage(lang)
    onSelect?.()
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => select('en')}
        aria-label={t('nav.languages.en', 'English')}
        aria-pressed={language === 'en'}
        className={`h-5 w-7 overflow-hidden rounded-sm transition-opacity ${
          language === 'en'
            ? 'ring-accent cursor-default ring-2 ring-offset-1 ring-offset-primary'
            : 'cursor-pointer opacity-55 hover:opacity-100'
        }`}>
        <UsFlag />
      </button>
      <button
        type="button"
        onClick={() => select('es')}
        aria-label={t('nav.languages.es', 'Español')}
        aria-pressed={language === 'es'}
        className={`h-5 w-7 overflow-hidden rounded-sm transition-opacity ${
          language === 'es'
            ? 'ring-accent cursor-default ring-2 ring-offset-1 ring-offset-primary'
            : 'cursor-pointer opacity-55 hover:opacity-100'
        }`}>
        <CrFlag />
      </button>
    </div>
  )
}

export default LanguageSwitcher
