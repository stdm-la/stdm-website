'use client'

import Link from 'next/link'
import type { SeoLandingDefinition } from '@/appData/catalog'
import { useTranslation } from '@/hooks/useTranslation'
import LeadCta from '../Leads/LeadCta'

interface SeoLandingPageProps {
  landing: SeoLandingDefinition
}

const SeoLandingPage = ({ landing }: SeoLandingPageProps) => {
  const { t } = useTranslation()
  const prefix = `pages.seoLandings.${landing.contentKey}`
  const benefits = ['benefit1', 'benefit2', 'benefit3', 'benefit4'] as const

  return (
    <main>
      <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(45dvh-4rem)] bg-no-repeat">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
          <p className="text-accent mb-3 text-sm font-medium tracking-wide uppercase">
            {t('pages.seoLandings.badge')} · Costa Rica
          </p>
          <h1 className="text-neutral text-3xl font-bold tracking-tight md:text-4xl lg:max-w-3xl">
            {t(`${prefix}.headline`)}
          </h1>
          <p className="text-tertiary-content mt-4 max-w-2xl text-lg leading-relaxed">
            {t(`${prefix}.subheadline`)}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/#contact?source=seo-${landing.slug}&interest=${encodeURIComponent(t(`${prefix}.headline`))}`}
              className="bg-brand-gradient shadow-brand-glow inline-block rounded-xl px-[14px] py-[10px] text-sm font-semibold text-white transition-opacity hover:opacity-90">
              {t('hero.primaryCta')}
            </Link>
            <Link
              href={landing.relatedPath}
              className="text-neutral border-border hover:border-accent/50 inline-block rounded-xl border bg-secondary px-[14px] py-[10px] text-sm transition-colors">
              {t('pages.seoLandings.relatedCta')}
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <h2 className="text-primary-content font-heading text-2xl font-bold">
          {t(`${prefix}.whyTitle`)}
        </h2>
        <p className="text-tertiary-content mt-4 max-w-3xl leading-relaxed">
          {t(`${prefix}.whyBody`)}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((key) => (
            <article
              key={key}
              className="bg-secondary border-border rounded-xl border p-6">
              <h3 className="text-brand-gradient font-semibold">
                {t(`${prefix}.${key}Title`)}
              </h3>
              <p className="text-primary-content mt-2 text-sm leading-relaxed">
                {t(`${prefix}.${key}Body`)}
              </p>
            </article>
          ))}
        </div>

        <LeadCta
          className="mt-16"
          source={`seo-${landing.slug}`}
          interest={t(`${prefix}.headline`)}
          title={t(`${prefix}.ctaTitle`)}
          description={t(`${prefix}.ctaDescription`)}
        />
      </div>
    </main>
  )
}

export default SeoLandingPage
