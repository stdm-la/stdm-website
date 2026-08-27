'use client'

import Link from 'next/link'
import {
  catalogProductKeys,
  equipmentCategorySlugs,
  type EquipmentCategoryKey,
} from '@/appData/catalog'
import { equipmentSupportKeys } from '@/appData/services'
import { useTranslation } from '@/hooks/useTranslation'
import LeadCta from '../Leads/LeadCta'
import SectionHeading from '../SectionHeading/SectionHeading'

interface CatalogCategoryPageProps {
  category: EquipmentCategoryKey
}

const CatalogCategoryPage = ({ category }: CatalogCategoryPageProps) => {
  const { t } = useTranslation()
  const prefix = `pages.catalog.categories.${category}`
  const products = catalogProductKeys[category]
  const categoryTitle = t(`${prefix}.title`)

  return (
    <main>
      <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(40dvh-4rem)] bg-no-repeat">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
          <nav className="text-tertiary-content mb-4 text-sm">
            <Link href="/equipment" className="hover:text-neutral transition-colors">
              {t('nav.equipment')}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral">{categoryTitle}</span>
          </nav>
          <h1 className="text-neutral text-3xl font-bold tracking-tight md:text-4xl lg:max-w-3xl">
            {categoryTitle}
          </h1>
          <p className="text-tertiary-content mt-4 max-w-2xl text-lg leading-relaxed">
            {t(`${prefix}.description`)}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <SectionHeading
          title={t('pages.catalog.productsTitle')}
          subtitle={t('pages.catalog.productsSubtitle')}
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((productKey) => (
            <article
              key={productKey}
              className="bg-secondary border-border hover:shadow-brand-glow flex flex-col rounded-xl border p-6 transition-shadow">
              <h2 className="text-brand-gradient text-lg font-semibold">
                {t(`${prefix}.products.${productKey}.title`)}
              </h2>
              <p className="text-primary-content mt-3 flex-1 text-sm leading-relaxed">
                {t(`${prefix}.products.${productKey}.description`)}
              </p>
              <p className="text-tertiary-content mt-4 text-xs">
                {t('pages.catalog.inquiryNote')}
              </p>
            </article>
          ))}
        </div>

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

        <div className="mt-10">
          <p className="text-tertiary-content mb-4 text-sm">
            {t('pages.catalog.otherCategories')}
          </p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(equipmentCategorySlugs) as EquipmentCategoryKey[])
              .filter((key) => key !== category)
              .map((key) => (
                <Link
                  key={key}
                  href={`/equipment/${equipmentCategorySlugs[key]}`}
                  className="bg-secondary border-border text-primary-content hover:text-accent rounded-full border px-3 py-1.5 text-sm transition-colors">
                  {t(`pages.catalog.categories.${key}.title`)}
                </Link>
              ))}
          </div>
        </div>

        <LeadCta
          className="mt-16"
          source="equipment-catalog"
          interest={categoryTitle}
          title={t('pages.catalog.ctaTitle')}
          description={t('pages.catalog.ctaDescription')}
        />
      </div>
    </main>
  )
}

export default CatalogCategoryPage
