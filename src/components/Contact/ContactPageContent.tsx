'use client'

import { useTranslation } from '@/hooks/useTranslation'
import ContactSection from './ContactSection'

const ContactPageContent = () => {
  const { t } = useTranslation()

  return (
    <main>
      <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(40dvh-4rem)] bg-no-repeat">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
          <p className="text-accent mb-3 text-sm font-medium tracking-wide uppercase">
            {t('nav.contact')}
          </p>
          <h1 className="text-neutral text-3xl font-bold tracking-tight md:text-4xl lg:max-w-3xl">
            {t('pages.contact.headline')}
          </h1>
          <p className="text-tertiary-content mt-4 max-w-2xl text-lg leading-relaxed">
            {t('pages.contact.subheadline')}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <ContactSection />
      </div>
    </main>
  )
}

export default ContactPageContent
