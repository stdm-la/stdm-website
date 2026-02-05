'use client'

import { useTranslation } from '@/hooks/useTranslation'
import SectionHeading from '../SectionHeading/SectionHeading'

const WhoWeHelpSection = () => {
  const { t } = useTranslation()

  return (
    <section id="who-we-help" className="my-14">
      <SectionHeading
        title={t('sections.whoWeHelp.title')}
      />

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-[3.75rem] md:grid-cols-2">
        <div className="bg-secondary border-border rounded-[14px] border p-6 md:p-8">
          <h3 className="text-accent mb-4 text-xl font-semibold">
            {t('sections.whoWeHelp.ngos.title')}
          </h3>
          <p className="text-primary-content text-pretty">
            {t('sections.whoWeHelp.ngos.description')}
          </p>
        </div>
        <div className="bg-secondary border-border rounded-[14px] border p-6 md:p-8">
          <h3 className="text-accent mb-4 text-xl font-semibold">
            {t('sections.whoWeHelp.smbs.title')}
          </h3>
          <p className="text-primary-content text-pretty">
            {t('sections.whoWeHelp.smbs.description')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhoWeHelpSection
