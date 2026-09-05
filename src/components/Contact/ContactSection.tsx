'use client'

import { MsgIcon, PhoneIcon } from '@/utils/icons'
import { buildWhatsAppUrl } from '@/lib/leads'
import { useTranslation } from '@/hooks/useTranslation'
import ContactForm from './ContactForm'

const ContactSection = () => {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      className="bg-secondary border-border grid grid-cols-1 gap-16 rounded-2xl border p-8 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral font-heading text-3xl font-bold">{t('contact.letsTalk')}</h3>
          <h4 className="text-brand-gradient font-heading text-2xl font-bold md:text-3xl">
            {t('contact.wedLoveToHelp')}
          </h4>
          <p className="text-neutral mt-8">{t('sections.howWeWork.tagline')}</p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">{t('contact.contactInformation')}</p>
          <a
            href="mailto:contact@stdm-la.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> contact@stdm-la.com
          </a>
          <a
            href="tel:+50685174990"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +506 85174990
          </a>
          <a
            href={buildWhatsAppUrl(t('leads.whatsappDefaultMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <span aria-hidden="true" className="text-[#25D366]">
              ●
            </span>
            {t('leads.whatsappCta')}
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
