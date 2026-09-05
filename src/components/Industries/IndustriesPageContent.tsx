'use client'

import Link from 'next/link'
import { industryKeys } from '@/appData/industries'
import { useTranslation } from '@/hooks/useTranslation'

const IndustriesPageContent = () => {
  const { t } = useTranslation()

  return (
    <main>
      <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(40dvh-4rem)] bg-no-repeat">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
          <p className="text-accent mb-3 text-sm font-medium tracking-wide uppercase">
            {t('sections.industriesWeServe.title')}
          </p>
          <h1 className="text-neutral text-3xl font-bold tracking-tight md:text-4xl lg:max-w-3xl">
            {t('pages.industries.headline')}
          </h1>
          <p className="text-tertiary-content mt-4 max-w-2xl text-lg leading-relaxed">
            {t('pages.industries.subheadline')}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {industryKeys.map((key) => (
            <article
              key={key}
              className="bg-secondary border-border hover:shadow-brand-glow rounded-xl border p-6 transition-shadow md:p-8">
              <h2 className="text-brand-gradient text-xl font-semibold">
                {t(`sections.industriesWeServe.${key}`)}
              </h2>
              <p className="text-primary-content mt-3 text-sm leading-relaxed">
                {t(`pages.industries.items.${key}.description`)}
              </p>
            </article>
          ))}
        </div>

        <div className="bg-secondary border-border mt-16 rounded-2xl border p-8 text-center md:p-12">
          <h2 className="text-neutral font-heading text-2xl font-bold md:text-3xl">
            {t('pages.industries.ctaTitle')}
          </h2>
          <p className="text-tertiary-content mx-auto mt-4 max-w-xl">
            {t('pages.industries.ctaDescription')}
          </p>
          <Link
            href="/contact"
            className="bg-brand-gradient shadow-brand-glow mt-6 inline-block rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            {t('hero.primaryCta')}
          </Link>
        </div>
      </div>
    </main>
  )
}

export default IndustriesPageContent
