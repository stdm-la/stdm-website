'use client'

import { MsgIcon, PhoneIcon } from '@/utils/icons'
import { useTranslation } from '@/hooks/useTranslation'
import ContactForm from './ContactForm'

const ContactSection = () => {
  const { t } = useTranslation()
  
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">{t('contact.letsTalk')}</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">{t('contact.wedLoveToHelp')}</h4>
          <p className="text-neutral mt-8">
            {t('hero.tagline')}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">{t('contact.contactInformation')}</p>
          <a
            href="mailto:contact@stdm-la.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> contact@stdm-la.com
          </a>
          <a
            href="tel:+506 85174990"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +506 85174990
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
