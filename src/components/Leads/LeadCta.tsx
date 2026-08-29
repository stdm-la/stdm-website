'use client'

import Link from 'next/link'
import { buildContactHref, buildWhatsAppUrl } from '@/lib/leads'
import { useTranslation } from '@/hooks/useTranslation'

interface LeadCtaProps {
  source: string
  interest?: string
  title?: string
  description?: string
  className?: string
}

const LeadCta = ({ source, interest, title, description, className = '' }: LeadCtaProps) => {
  const { t } = useTranslation()
  const whatsappMessage = interest
    ? t('leads.whatsappInterestMessage').replace('{interest}', interest)
    : t('leads.whatsappDefaultMessage')

  return (
    <div
      className={`bg-secondary border-border rounded-2xl border p-8 text-center md:p-12 ${className}`}>
      <h2 className="text-neutral font-heading text-2xl font-bold md:text-3xl">
        {title || t('leads.ctaTitle')}
      </h2>
      <p className="text-tertiary-content mx-auto mt-4 max-w-xl">
        {description || t('leads.ctaDescription')}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={buildContactHref({ source, interest })}
          className="bg-brand-gradient shadow-brand-glow inline-block rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
          {t('hero.primaryCta')}
        </Link>
        <a
          href={buildWhatsAppUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="border-border text-neutral hover:border-accent/50 inline-block rounded-xl border bg-primary px-6 py-3 text-sm font-semibold transition-colors">
          {t('leads.whatsappCta')}
        </a>
        <Link
          href={buildContactHref({ source, interest })}
          className="text-accent hover:text-neutral text-sm font-medium underline underline-offset-4 transition-colors">
          {t('hero.secondaryCta')}
        </Link>
      </div>
    </div>
  )
}

export default LeadCta
