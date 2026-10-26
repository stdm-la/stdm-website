'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { hasStoredCookieConsent, persistCookieConsent } from '@/lib/cookieConsent'

const CookieNotice = ({ initialAccepted = false }: { initialAccepted?: boolean }) => {
  const { t } = useTranslation()
  const [accepted, setAccepted] = useState(initialAccepted)

  useEffect(() => {
    if (accepted || !hasStoredCookieConsent()) return
    persistCookieConsent()
    setAccepted(true)
  }, [accepted])

  if (accepted) return null

  const acknowledge = () => {
    persistCookieConsent()
    setAccepted(true)
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[1100] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:p-4">
      <section
        role="region"
        aria-labelledby="cookie-notice-title"
        className="border-border bg-secondary/95 pointer-events-auto mx-auto w-full max-w-[720px] rounded-xl border p-4 shadow-xl backdrop-blur-md md:ml-4 md:mr-auto">
        <div className="flex items-start justify-between gap-3">
          <h2 id="cookie-notice-title" className="text-neutral font-heading text-sm font-semibold">
            {t('cookies.title')}
          </h2>
          <button
            type="button"
            onClick={acknowledge}
            aria-label={t('cookies.dismiss')}
            className="text-primary-content hover:text-neutral focus-visible:ring-accent -mt-1 -mr-1 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors focus-visible:ring-2 focus-visible:outline-none">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none">
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <p className="text-primary-content mt-1 text-sm leading-relaxed">{t('cookies.description')}</p>
        <button
          type="button"
          onClick={acknowledge}
          className="bg-brand-gradient shadow-brand-glow focus-visible:ring-accent mt-4 cursor-pointer rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:outline-none">
          {t('cookies.accept')}
        </button>
      </section>
    </div>
  )
}

export default CookieNotice
