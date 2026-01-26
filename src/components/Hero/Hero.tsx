'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import { useTranslation } from '@/hooks/useTranslation'
import Ellipse from './Ellipse'
import ArchitectureAnimation from './ArchitectureAnimation'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const { t } = useTranslation()

  const roles = [
    t('hero.roles.nextNest'),
    t('hero.roles.blockchain'),
    t('hero.roles.java'),
    t('hero.roles.php'),
  ]

  const role = useRoleSwitcher({ roles })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">{t('hero.greeting')}</span>
            <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
          </h1>

          <h2 className="text-neutral mt-3">
            {t('hero.tagline')}
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="#contact"
              aria-label={t('hero.contactUs')}
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
              {t('hero.contactUs')}
            </a>
            <a
              href="https://www.linkedin.com/company/stdm-la/"
              aria-label={t('hero.ourLinkedIn')}
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
              {t('hero.ourLinkedIn')}
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
