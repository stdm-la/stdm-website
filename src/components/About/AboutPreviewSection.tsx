'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import SectionHeading from '../SectionHeading/SectionHeading'

const AboutPreviewSection = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="my-14">
      <SectionHeading
        title={t('sections.aboutPreview.title')}
        subtitle={t('sections.aboutPreview.subtitle')}
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
        {(['history', 'vision', 'coverage'] as const).map((key) => (
          <article
            key={key}
            className="bg-secondary border-border hover:shadow-brand-glow rounded-xl border p-6 transition-shadow">
            <h3 className="text-brand-gradient text-lg font-semibold">
              {t(`sections.aboutPreview.${key}Title`)}
            </h3>
            <p className="text-primary-content mt-3 text-sm leading-relaxed">
              {t(`sections.aboutPreview.${key}Body`)}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/about"
          className="text-accent hover:text-neutral text-sm font-medium underline underline-offset-4 transition-colors">
          {t('sections.aboutPreview.viewAll')}
        </Link>
      </div>
    </section>
  )
}

export default AboutPreviewSection
