'use client'

import { useLanguage } from '@/contexts/LanguageContext'
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

const ContactForm = () => {
  const { language } = useLanguage()
  const formConfig = HUBSPOT_FORM_BY_LANGUAGE[language] ?? HUBSPOT_FORM_BY_LANGUAGE.en

  return (
    <>
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
