'use client'

import { socials } from '@/appData/personal'
import { buildWhatsAppUrl } from '@/lib/leads'
import { useTranslation } from '@/hooks/useTranslation'
import Logo from '../Navbar/Logo'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-secondary relative flex min-h-[400px] flex-col justify-between gap-16 overflow-hidden px-4 py-14 md:p-14">
      <div className="relative z-20 flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <h5 className="mb-6 flex items-center">
            <Logo width={100} height={28} />
          </h5>
          <p className="text-tertiary-content max-w-sm text-sm leading-relaxed">
            {t('footer.tagline')}
          </p>
          <p className="text-tertiary-content mt-3 text-xs">{t('footer.legalName')}</p>
        </div>

        <div className="flex flex-col gap-6">
          <h5 className="text-neutral text-sm font-medium">{t('footer.contact')}</h5>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contact@stdm-la.com"
              className="text-tertiary-content hover:text-neutral text-sm transition-colors duration-300">
              contact@stdm-la.com
            </a>
            <a
              href="tel:+50685174990"
              className="text-tertiary-content hover:text-neutral text-sm transition-colors duration-300">
              +506 85174990
            </a>
            <a
              href={buildWhatsAppUrl(t('leads.whatsappDefaultMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary-content hover:text-neutral text-sm transition-colors duration-300">
              {t('leads.whatsappCta')}
            </a>
            <div className="flex gap-4">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral hover:text-neutral/70 transition-colors duration-300">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col gap-4 border-t border-white/10 pt-8">
        <p className="text-tertiary-content text-xs">
          © {new Date().getFullYear()} — {t('footer.copyright')}
        </p>
        <p className="text-tertiary-content text-xs">{t('footer.allRightsReserved')}</p>
      </div>

      <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
