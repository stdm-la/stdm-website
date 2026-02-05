'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import useOutsideClick from '@/hooks/useOutsideClick'
import { BurgerIcon, ChevronRightIcon, CloseIcon } from '../../utils/icons'
import Logo from './Logo'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()

  const solutionsItems = [
    { label: t('nav.solutions.ngos'), href: '/#solutions' },
    { label: t('nav.solutions.smbs'), href: '/#solutions' },
    { label: t('nav.solutions.poc'), href: '/#solutions' },
  ]

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.howWeWork'), href: '/#how-we-work' },
    { label: t('nav.about'), href: '/#team' },
    { label: t('nav.contact'), href: '/#contact' },
  ]

  const toggleMenu = () => {
    setIsVisible(!isVisible)
    setSolutionsOpen(false)
  }

  const closeSolutions = useCallback(() => setSolutionsOpen(false), [])
  const solutionsRef = useOutsideClick(closeSolutions)

  return (
    <nav className="bg-primary relative z-[1000] h-16">
      <div className="mx-auto flex h-full w-dvw max-w-[1200px] items-center justify-between gap-4 px-4 py-1">
        <Link href="/" className="shrink-0 cursor-pointer">
          <div className="animate-fade-up text-primary-content flex items-center gap-3 transition-all duration-300">
            <Logo />
            <span className="text-primary-content">STDM</span>
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
          className={`${isVisible ? 'flex' : 'hidden'} animate-fade-in bg-primary absolute top-16 left-0 z-10 h-dvh w-dvw flex-col md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row md:items-center lg:w-[70%]`}>
          <li className="relative flex flex-col border-b px-4 text-2xl md:flex-row md:border-0 md:px-0 lg:px-4">
            <div ref={solutionsRef} className="relative flex flex-col md:flex-row">
              <button
                type="button"
                className="text-primary-content hover:text-neutral flex w-full cursor-pointer items-center justify-between py-7 text-left md:py-0 md:justify-start"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
                aria-haspopup="true">
                {t('nav.solutions.label')}
                <ChevronRightIcon
                  className={`text-primary-content size-5 shrink-0 transition-transform md:ml-1 ${solutionsOpen ? 'rotate-90' : ''}`}
                />
              </button>
              {solutionsOpen && (
                <ul className="bg-primary border-border mb-4 ml-4 flex flex-col gap-1 border-l pl-4 md:absolute md:left-0 md:top-full md:z-50 md:ml-0 md:mt-2 md:min-w-[240px] md:rounded-lg md:border md:bg-secondary md:p-2 md:shadow-xl">
                {solutionsItems.map(({ label, href }) => (
                  <li key={label} onClick={toggleMenu}>
                    <Link
                      href={href}
                      className="text-primary-content hover:text-neutral block py-2 text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
                </ul>
              )}
            </div>
          </li>
          {navItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={toggleMenu}
              className="flex items-center border-b px-4 text-2xl md:border-0 md:text-base md:last:ml-auto md:last:px-0 lg:px-8">
              <Link
                href={href}
                className={`text-primary-content hover:text-neutral w-full cursor-pointer py-7 transition-all duration-150 md:py-0 ${pathname === href ? 'text-neutral' : ''}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
