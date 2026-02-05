'use client'

import { whatWeBuildData } from '@/appData'
import { useTranslation } from '@/hooks/useTranslation'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from '../Services/ServiceCard'

const WhatWeBuildSection = () => {
  const { t } = useTranslation()

  return (
    <section id="solutions" className="my-14">
      <SectionHeading
        title={t('sections.whatWeBuild.title')}
        subtitle={t('sections.whatWeBuild.subtitle')}
      />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-2 lg:grid-cols-4">
        {whatWeBuildData.map((item, index) => (
          <ServiceCard
            key={index}
            icon={item.icon}
            title={item.title}
            shortDescription={item.shortDescription}
          />
        ))}
      </div>

      <p className="text-tertiary-content mt-6 text-sm italic">
        {t('sections.whatWeBuild.focus')}
      </p>
    </section>
  )
}

export default WhatWeBuildSection
