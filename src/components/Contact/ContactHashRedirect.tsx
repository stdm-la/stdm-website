'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/** Sends leftover /#contact bookmarks to the dedicated contact page. */
const ContactHashRedirect = () => {
  const router = useRouter()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash.startsWith('#contact')) return
    const query = hash.includes('?') ? hash.split('?')[1] : ''
    router.replace(query ? `/contact?${query}` : '/contact')
  }, [router])

  return null
}

export default ContactHashRedirect
