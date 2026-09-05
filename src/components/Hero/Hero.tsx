'use client'

import { useState } from 'react'
import Link from 'next/link'
import { businessUnitsData } from '@/appData'
import { useTranslation } from '@/hooks/useTranslation'
import { buildWhatsAppUrl } from '@/lib/leads'
import HeroCarousel from './HeroCarousel'

const valuePillars = [
  { key: 'create', fallback: 'Create' },
  { key: 'operate', fallback: 'Operate' },
  { key: 'grow', fallback: 'Grow' },
] as const

const Hero = () => {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const current = businessUnitsData[index]

  return (
    <section className="relative min-h-[calc(100dvh-6rem)] w-full overflow-hidden md:min-h-[calc(100dvh-7rem)]">
      <HeroCarousel index={index} onIndexChange={setIndex} />

      <div className="relative z-10 flex min-h-[calc(100dvh-6rem)] items-stretch md:min-h-[calc(100dvh-7rem)]">
        <div className="mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-[1200px] flex-col justify-between px-4 pt-12 pb-24 md:min-h-[calc(100dvh-7rem)] md:flex-row md:py-16">
          <div className="mt-16 max-w-2xl self-start md:mt-28">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              {t('hero.headline')}
            </h1>

            <h2 className="mt-5 text-xl leading-relaxed font-normal text-white/80 md:text-2xl">
              {t('hero.subheadline')}
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {valuePillars.map((pillar) => (
                <span
                  key={pillar.key}
                  className="rounded-full border border-white/25 bg-black/30 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
                  {t(`hero.pillars.${pillar.key}`, pillar.fallback)}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                aria-label={t('hero.primaryCta')}
                className="bg-brand-gradient shadow-brand-glow min-w-32 cursor-pointer rounded-xl px-4 py-3 text-center text-base font-semibold text-white transition-opacity hover:opacity-90">
                {t('hero.primaryCta')}
              </Link>
              <Link
                href="/contact"
                aria-label={t('hero.secondaryCta')}
                className="cursor-pointer rounded-xl border border-white/30 bg-black/30 px-4 py-3 text-base text-white backdrop-blur-sm transition-colors hover:border-white/60">
                {t('hero.secondaryCta')}
              </Link>
              <a
                href={buildWhatsAppUrl(t('leads.whatsappDefaultMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('leads.whatsappCta')}
                className="cursor-pointer self-center px-2 text-base font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80">
                {t('leads.whatsappCta')}
              </a>
            </div>
          </div>

          <div className="max-w-md self-end text-right md:shrink-0">
            <p className="text-sm font-semibold tracking-wide text-white/75 uppercase md:text-base">
              {t(current.labelKey, current.id)}
            </p>
            <Link
              href={current.href}
              className="mt-1 inline-block text-2xl font-semibold text-white underline-offset-4 hover:underline md:text-3xl">
              {t(current.titleKey)}
            </Link>
            <p className="mt-3 text-base leading-relaxed text-white/80 md:text-lg">
              {t(current.descriptionKey)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
