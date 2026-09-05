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

      <div className="mt-8 md:mt-[3.75rem]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step}
              className="bg-secondary border-border hover:shadow-brand-glow flex flex-col rounded-xl border p-5 transition-shadow">
              <span className="bg-brand-gradient shadow-brand-glow mb-4 flex size-12 items-center justify-center rounded-full text-white">
                <span className="text-lg font-bold">{step}</span>
              </span>
              <h3 className="text-brand-gradient text-lg font-semibold">
                {t(`sections.howWeWork.step${step}Title`)}
              </h3>
              <p className="text-primary-content mt-2 text-sm leading-relaxed text-pretty">
                {t(`sections.howWeWork.step${step}`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-tertiary-content mt-6 text-sm italic">
        {t('sections.howWeWork.tagline')}
      </p>
    </section>
  )
}

export default HowWeWorkSection
