'use client'

import { useTranslation } from '@/hooks/useTranslation'
import SectionHeading from '../SectionHeading/SectionHeading'

const steps = [1, 2, 3, 4] as const

const HowWeWorkSection = () => {
  const { t } = useTranslation()

  return (
    <section id="how-we-work" className="my-14">
      <SectionHeading
        title={t('sections.howWeWork.title')}
        subtitle={t('sections.howWeWork.subtitle')}
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-[3.75rem] md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step}
            className="bg-secondary border-border flex items-start gap-4 rounded-[14px] border p-5"
          >
            <span className="text-accent flex size-12 shrink-0 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold">{step}</span>
            </span>
            <div>
              <p className="text-primary-content text-pretty">
                {t(`sections.howWeWork.step${step}`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-tertiary-content mt-6 text-sm italic">
        {t('sections.howWeWork.tagline')}
      </p>
    </section>
  )
}

export default HowWeWorkSection
