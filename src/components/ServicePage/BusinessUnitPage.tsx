'use client'

import Link from 'next/link'
import {
  equipmentCategorySlugs,
  type EquipmentCategoryKey,
} from '@/appData/catalog'
import { useTranslation } from '@/hooks/useTranslation'
import {
  businessUnitServiceKeys,
  equipmentSupportKeys,
  type BusinessUnitKey,
} from '@/appData/services'
import { buildContactHref, buildWhatsAppUrl } from '@/lib/leads'
import LeadCta from '../Leads/LeadCta'
import SectionHeading from '../SectionHeading/SectionHeading'

interface BusinessUnitPageProps {
  unit: BusinessUnitKey
}

const BusinessUnitPage = ({ unit }: BusinessUnitPageProps) => {
  const { t } = useTranslation()
  const serviceKeys = businessUnitServiceKeys[unit]
  const prefix = `pages.${unit}`
  const unitTitle = t(`${prefix}.headline`)

  return (
    <main>
      <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(50dvh-4rem)] bg-no-repeat">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
          <p className="text-accent mb-3 text-sm font-medium tracking-wide uppercase">
            {t('nav.services.label')}
          </p>
          <h1 className="text-neutral text-3xl font-bold tracking-tight md:text-4xl lg:max-w-3xl">
            {unitTitle}
          </h1>
          <p className="text-tertiary-content mt-4 max-w-2xl text-lg leading-relaxed">
            {t(`${prefix}.subheadline`)}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={buildContactHref({ source: unit, interest: unitTitle })}
              className="bg-brand-gradient shadow-brand-glow inline-block rounded-xl px-[14px] py-[10px] text-sm font-semibold text-white transition-opacity hover:opacity-90">
              {t('hero.primaryCta')}
            </Link>
            <a
              href={buildWhatsAppUrl(
                t('leads.whatsappInterestMessage').replace('{interest}', unitTitle),
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral border-border hover:border-accent/50 inline-block rounded-xl border bg-secondary px-[14px] py-[10px] text-sm transition-colors">
              {t('leads.whatsappCta')}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <SectionHeading
          title={t(`${prefix}.servicesTitle`)}
          subtitle={t(`${prefix}.servicesSubtitle`)}
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key) => {
            const title = t(`${prefix}.services.${key}.title`)
            const isEquipment = unit === 'equipment'
            const categoryKey = key as EquipmentCategoryKey
            const href =
              isEquipment && equipmentCategorySlugs[categoryKey]
                ? `/equipment/${equipmentCategorySlugs[categoryKey]}`
                : undefined

            const card = (
              <article className="bg-secondary border-border hover:shadow-brand-glow h-full rounded-xl border p-6 transition-shadow">
                <h2 className="text-brand-gradient text-lg font-semibold">{title}</h2>
                <p className="text-primary-content mt-3 text-sm leading-relaxed">
                  {t(`${prefix}.services.${key}.description`)}
                </p>
                {href && (
                  <p className="text-accent mt-4 text-sm font-medium">
                    {t('pages.catalog.viewCatalog')} →
                  </p>
                )}
              </article>
            )

            return href ? (
              <Link key={key} href={href} className="block transition-transform hover:scale-[1.01]">
                {card}
              </Link>
            ) : (
              <div key={key}>{card}</div>
            )
          })}
        </div>

        {unit === 'equipment' && (
          <div className="mt-16">
            <SectionHeading
              title={t('pages.equipment.supportTitle')}
              subtitle={t('pages.equipment.supportSubtitle')}
            />
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {equipmentSupportKeys.map((key) => (
                <div key={key} className="bg-secondary border-border rounded-xl border p-5">
                  <h3 className="text-primary-content font-semibold">
                    {t(`pages.equipment.support.${key}.title`)}
                  </h3>
                  <p className="text-tertiary-content mt-2 text-sm">
                    {t(`pages.equipment.support.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <LeadCta
          className="mt-16"
          source={unit}
          interest={unitTitle}
          title={t(`${prefix}.ctaTitle`)}
          description={t(`${prefix}.ctaDescription`)}
        />
      </div>
    </main>
  )
}

export default BusinessUnitPage
