'use client'

import { MoonIcon, SunIcon } from '@/utils/icons'
import { useEffect, useState } from 'react'

const ThemeMenu = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      const initialTheme = stored ?? 'dark'
      setTheme(initialTheme)
      document.documentElement.setAttribute('data-theme', initialTheme)
    }
  }, [])

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const nextTheme = theme === 'dark' ? 'light' : 'dark'
      setTheme(nextTheme)
      localStorage.setItem('theme', nextTheme)
      document.documentElement.setAttribute('data-theme', nextTheme)
    }
  }

  return (
    <div className="fixed right-6 bottom-4 z-50 md:right-11 md:bottom-11">
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        className="bg-secondary border-border text-primary-content hover:bg-primary flex items-center justify-center rounded-full border p-3 transition-colors duration-200 md:p-4">
        {theme === 'dark' ? (
          <SunIcon className="h-5 w-5 md:h-6 md:w-6" />
        ) : (
          <MoonIcon className="h-5 w-5 md:h-6 md:w-6" />
        )}
      </button>
    </div>
  )
}

export default ThemeMenu
