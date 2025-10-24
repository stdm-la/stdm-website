'use client'

import { useEffect, useState } from 'react'

type VisibilityState = {
  showToTop: boolean
  showToBottom: boolean
}

const SCROLL_THRESHOLD = 160

const ScrollButtons = () => {
  const [visible, setVisible] = useState<VisibilityState>({ showToTop: false, showToBottom: false })

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || document.documentElement.scrollTop
      const nearTop = currentY <= SCROLL_THRESHOLD
      const nearBottom = window.innerHeight + currentY >= document.documentElement.scrollHeight - 4

      setVisible({ showToTop: !nearTop, showToBottom: !nearBottom })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className="pointer-events-none fixed bottom-[110px] right-4 z-[1001] flex flex-col gap-3 md:right-12">
      {visible.showToTop && (
        <button
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="pointer-events-auto bg-primary text-primary-content hover:bg-primary/90 rounded-full p-3 shadow-lg border border-border/50 transition">
          {/* Up arrow */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {visible.showToBottom && (
        <button
          aria-label="Scroll to bottom"
          onClick={scrollToBottom}
          className="pointer-events-auto bg-primary text-primary-content hover:bg-primary/90 rounded-full p-3 shadow-lg border border-border/50 transition">
          {/* Down arrow */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ScrollButtons


