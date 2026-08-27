'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import LeadCta from '../Leads/LeadCta'
import SectionHeading from '../SectionHeading/SectionHeading'
import TeamSection from '../Team/TeamSection'
import { TeamMember } from '@/lib/types'

const capabilityKeys = ['technology', 'digital', 'advertising', 'equipment'] as const
const methodologySteps = [1, 2, 3, 4] as const

interface AboutPageContentProps {
  team: TeamMember[]
}

const AboutPageContent = ({ team }: AboutPageContentProps) => {
  const { t } = useTranslation()

  return (
    <main>
      <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(40dvh-4rem)] bg-no-repeat">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
          <p className="text-accent mb-3 text-sm font-medium tracking-wide uppercase">
            {t('nav.about')}
          </p>
          <h1 className="text-neutral text-3xl font-bold tracking-tight md:text-4xl lg:max-w-3xl">
            {t('pages.about.headline')}
          </h1>
          <p className="text-tertiary-content mt-4 max-w-2xl text-lg leading-relaxed">
            {t('pages.about.subheadline')}
          </p>
          <p className="text-tertiary-content mt-3 text-sm">
            {t('footer.legalName')}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-primary-content font-heading text-2xl font-bold">
              {t('pages.about.historyTitle')}
            </h2>
            <p className="text-tertiary-content mt-4 leading-relaxed">
              {t('pages.about.historyBody')}
            </p>
          </div>
          <div>
            <h2 className="text-primary-content font-heading text-2xl font-bold">
              {t('pages.about.visionTitle')}
            </h2>
            <p className="text-tertiary-content mt-4 leading-relaxed">
              {t('pages.about.visionBody')}
            </p>
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            title={t('pages.about.capabilitiesTitle')}
            subtitle={t('pages.about.capabilitiesSubtitle')}
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {capabilityKeys.map((key) => (
              <article
                key={key}
                className="bg-secondary border-border rounded-xl border p-6">
                <h3 className="text-brand-gradient text-lg font-semibold">
                  {t(`sections.businessUnits.${key}.title`)}
                </h3>
                <p className="text-primary-content mt-3 text-sm leading-relaxed">
                  {t(`pages.about.capabilities.${key}`)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="bg-secondary border-border rounded-xl border p-6 md:p-8">
            <h2 className="text-primary-content font-heading text-xl font-bold">
              {t('pages.about.experienceTitle')}
            </h2>
            <p className="text-tertiary-content mt-4 leading-relaxed">
              {t('pages.about.experienceBody')}
            </p>
          </div>
          <div className="bg-secondary border-border rounded-xl border p-6 md:p-8">
            <h2 className="text-primary-content font-heading text-xl font-bold">
              {t('pages.about.coverageTitle')}
            </h2>
            <p className="text-tertiary-content mt-4 leading-relaxed">
              {t('pages.about.coverageBody')}
            </p>
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            title={t('pages.about.methodologyTitle')}
            subtitle={t('pages.about.methodologySubtitle')}
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {methodologySteps.map((step) => (
              <article
                key={step}
                className="bg-secondary border-border flex gap-4 rounded-xl border p-6">
                <span className="bg-brand-gradient shadow-brand-glow flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                  {step}
                </span>
                <div>
                  <h3 className="text-primary-content font-semibold">
                    {t(`pages.about.methodology.step${step}Title`)}
                  </h3>
                  <p className="text-tertiary-content mt-2 text-sm leading-relaxed">
                    {t(`pages.about.methodology.step${step}Body`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <TeamSection team={team} />
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/projects"
            className="text-accent hover:text-neutral text-sm font-medium underline underline-offset-4 transition-colors">
            {t('pages.about.viewProjects')}
          </Link>
        </div>

        <LeadCta
          className="mt-16"
          source="about"
          interest={t('pages.about.headline')}
          title={t('pages.about.ctaTitle')}
          description={t('pages.about.ctaDescription')}
        />
      </div>
    </main>
  )
}

export default AboutPageContent
