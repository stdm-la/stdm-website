'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'
import { businessUnitRoutes } from '@/appData/services'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import useOutsideClick from '@/hooks/useOutsideClick'
import { BurgerIcon, ChevronRightIcon, CloseIcon } from '../../utils/icons'
import Logo from './Logo'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()
  const { language, setLanguage } = useLanguage()

  const serviceItems = [
    { label: t('nav.technology'), href: businessUnitRoutes.technology },
    { label: t('nav.digital'), href: businessUnitRoutes.digital },
    { label: t('nav.advertising'), href: businessUnitRoutes.advertising },
    { label: t('nav.equipment'), href: businessUnitRoutes.equipment },
  ]

  const mainNavItems = [
    { label: t('nav.solutions'), href: '/#solutions' },
    { label: t('nav.projects'), href: '/projects' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/#contact' },
  ]

  const toggleMenu = () => {
    setIsVisible(!isVisible)
    setServicesOpen(false)
  }

  const closeServices = useCallback(() => setServicesOpen(false), [])
  const servicesRef = useOutsideClick(closeServices)

  const isActive = (href: string) =>
    href.startsWith('/#') ? pathname === '/' && false : pathname === href

  const linkClass = (href: string) =>
    `text-primary-content hover:text-neutral cursor-pointer whitespace-nowrap transition-all duration-150 ${
      isActive(href) ? 'text-neutral' : ''
    }`

  return (
    <nav className="bg-primary/95 border-border relative z-[1000] h-16 border-b backdrop-blur-md">
      <div className="mx-auto flex h-full w-dvw max-w-[1200px] items-center justify-between gap-4 px-4 py-1">
        <Link href="/" className="shrink-0 cursor-pointer">
          <div className="animate-fade-up flex items-center transition-all duration-300">
            <Logo />
          </div>
        </Link>

        <div className="md:hidden shrink-0">
          <button onClick={toggleMenu} aria-label={isVisible ? 'Close menu' : 'Open menu'}>
            {isVisible ? (
              <CloseIcon className="text-primary-content size-6" />
            ) : (
              <BurgerIcon className="text-primary-content size-6" />
            )}
          </button>
        </div>

        <ul
          className={`${isVisible ? 'flex' : 'hidden'} animate-fade-in bg-primary absolute top-16 left-0 z-10 h-dvh w-dvw flex-col overflow-y-auto md:static md:top-0 md:flex md:h-full md:w-auto md:flex-1 md:flex-row md:items-center md:justify-end md:overflow-visible md:gap-1 lg:gap-2`}>
          {/* Mobile: flat service links */}
          {serviceItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={toggleMenu}
              className="flex items-center border-b px-4 text-2xl md:hidden">
              <Link href={href} className={`${linkClass(href)} w-full py-7`}>
                {label}
              </Link>
            </li>
          ))}

          {/* Desktop: Services dropdown */}
          <li className="relative hidden md:flex md:items-center">
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                className={`${linkClass('')} flex items-center gap-1 px-2 py-0 text-sm lg:px-3 lg:text-base`}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true">
                {t('nav.services.label')}
                <ChevronRightIcon
                  className={`size-4 shrink-0 transition-transform ${servicesOpen ? 'rotate-90' : ''}`}
                />
              </button>
              {servicesOpen && (
                <ul className="border-border bg-secondary absolute top-full left-0 z-50 mt-2 min-w-[220px] rounded-lg border p-2 shadow-xl">
                  {serviceItems.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setServicesOpen(false)}
                        className={`${linkClass(href)} block rounded-md px-3 py-2 text-sm`}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>

          {mainNavItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={toggleMenu}
              className="flex items-center border-b px-4 text-2xl md:border-0 md:px-0 md:text-sm lg:text-base">
              <Link
                href={href}
                className={`${linkClass(href)} w-full py-7 md:px-2 md:py-0 lg:px-3`}>
                {label}
              </Link>
            </li>
          ))}

          <li className="flex items-center border-b px-4 py-7 md:border-0 md:py-0 md:pl-2 lg:pl-4">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => {
                  setLanguage('en')
                  setIsVisible(false)
                }}
                className={`text-sm transition-colors duration-300 ${
                  language === 'en' ? 'text-neutral cursor-default font-medium' : 'text-tertiary-content hover:text-neutral cursor-pointer'
                }`}>
                En
              </button>
              <button
                type="button"
                onClick={() => {
                  setLanguage('es')
                  setIsVisible(false)
                }}
                className={`text-sm transition-colors duration-300 ${
                  language === 'es' ? 'text-neutral cursor-default font-medium' : 'text-tertiary-content hover:text-neutral cursor-pointer'
                }`}>
                Es
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
