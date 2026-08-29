'use client'

import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import { useTranslation } from '@/hooks/useTranslation'
import { buildWhatsAppUrl } from '@/lib/leads'
import Ellipse from './Ellipse'
import ArchitectureAnimation from './ArchitectureAnimation'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const { t } = useTranslation()

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1 className="text-neutral text-3xl font-bold tracking-tight md:text-4xl">
            {t('hero.headline')}
          </h1>

          <h2 className="text-tertiary-content mt-3 text-lg leading-relaxed font-normal">
            {t('hero.subheadline')}
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              aria-label={t('hero.primaryCta')}
              className="bg-brand-gradient shadow-brand-glow min-w-32 cursor-pointer rounded-xl px-[14px] py-[10px] text-center text-sm font-semibold text-white transition-opacity hover:opacity-90">
              {t('hero.primaryCta')}
            </a>
            <a
              href="#contact"
              aria-label={t('hero.secondaryCta')}
              className="text-neutral border-border hover:border-accent/50 cursor-pointer rounded-xl border bg-secondary px-[14px] py-[10px] text-sm transition-colors">
              {t('hero.secondaryCta')}
            </a>
            <a
              href={buildWhatsAppUrl(t('leads.whatsappDefaultMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('leads.whatsappCta')}
              className="text-accent hover:text-neutral cursor-pointer self-center px-2 text-sm font-medium underline underline-offset-4 transition-colors">
              {t('leads.whatsappCta')}
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <div className="absolute inset-0 p-7">
              <ArchitectureAnimation />
            </div>
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
