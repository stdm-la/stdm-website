'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import Script from 'next/script'

const HUBSPOT_FORM_BY_LANGUAGE = {
  en: {
    region: 'na1',
    portalId: '51154975',
    formId: '7b9979ac-1580-47c4-9a79-19791a1ae1b7',
  },
  es: {
    region: 'na1',
    portalId: '51154975',
    formId: 'f824d2f9-15c2-40e9-99e5-0bd19c4eb967',
  },
} as const

/**
 * HubSpot is the active CRM for inbound leads.
 * Optional `source` / `interest` query params (on /#contact?…) are surfaced for attribution.
 * Context follows the URL only — generic `/#contact` clears any previous CTA attribution.
 */
const ContactForm = () => {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const formConfig = HUBSPOT_FORM_BY_LANGUAGE[language] ?? HUBSPOT_FORM_BY_LANGUAGE.en
  const [interest, setInterest] = useState<string | null>(null)
  const [source, setSource] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const syncLeadAttribution = () => {
      const fromHash = window.location.hash.includes('?')
        ? new URLSearchParams(window.location.hash.split('?')[1])
        : null
      const fromSearch = new URLSearchParams(window.location.search)

      const nextInterest = fromHash?.get('interest') || fromSearch.get('interest') || null
      const nextSource = fromHash?.get('source') || fromSearch.get('source') || null

      // Drop any legacy session keys so generic /#contact never rehydrates an old CTA.
      if (!nextInterest && !nextSource) {
        sessionStorage.removeItem('stdm_lead_interest')
        sessionStorage.removeItem('stdm_lead_source')
      }

      setInterest(nextInterest)
      setSource(nextSource)
    }

    syncLeadAttribution()
    window.addEventListener('hashchange', syncLeadAttribution)
    return () => window.removeEventListener('hashchange', syncLeadAttribution)
  }, [])

  return (
    <>
      {(interest || source) && (
        <div className="border-border bg-primary mb-4 rounded-xl border px-4 py-3 text-sm">
          <p className="text-primary-content">
            <span className="text-accent font-medium">{t('leads.contextLabel')}: </span>
            {interest || source}
          </p>
          {source && interest && (
            <p className="text-tertiary-content mt-1 text-xs">
              {t('leads.sourceLabel')}: {source}
            </p>
          )}
        </div>
      )}
      <Script
        src={`https://js.hsforms.net/forms/embed/${formConfig.portalId}.js`}
        strategy="afterInteractive"
      />
      <div
        key={`${language}-${formConfig.formId}`}
        className="hs-form-frame w-full"
        data-region={formConfig.region}
        data-form-id={formConfig.formId}
        data-portal-id={formConfig.portalId}
      />
    </>
  )
}

export default ContactForm
