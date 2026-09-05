'use client'

import Link from 'next/link'
import { industryKeys } from '@/appData/industries'
import { useTranslation } from '@/hooks/useTranslation'
import SectionHeading from '../SectionHeading/SectionHeading'
import IndustryIcon from './IndustryIcon'

const WhoWeHelpSection = () => {
  const { t } = useTranslation()

  return (
    <section id="industries-we-serve" className="my-14">
      <SectionHeading title={t('sections.industriesWeServe.title')} />

      <div className="mt-8 grid grid-cols-2 gap-4 md:mt-[3.75rem] md:grid-cols-4 md:gap-6">
        {industryKeys.map((key) => (
          <div
            key={key}
            className="bg-secondary border-border hover:shadow-brand-glow flex flex-col items-center gap-3 rounded-xl border p-4 text-center transition-shadow md:p-6">
            <IndustryIcon name={key} />
            <h3 className="text-brand-gradient text-base font-semibold md:text-lg">
              {t(`sections.industriesWeServe.${key}`)}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/industries"
          className="text-accent hover:text-neutral text-sm font-medium underline underline-offset-4 transition-colors">
          {t('sections.industriesViewAll')}
        </Link>
      </div>
    </section>
  )
}

export default WhoWeHelpSection
