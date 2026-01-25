import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import ScrollButtons from '@/components/UI/ScrollButtons'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'SIS Technologies Digital Models | Web Development Company in Costa Rica'

const description =
  "Skilled full-stack web development company in Costa Rica. We build responsive, user-friendly websites with React, NextJS, and NodeJS. Let's bring your vision to life. Contact us today!"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
const metadataBase = siteUrl ? new URL(siteUrl) : undefined

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  ...(metadataBase ? { metadataBase } : {}),
  ...(siteUrl
    ? {
        alternates: { canonical: siteUrl },
        openGraph: {
          title,
          description,
          url: siteUrl,
          siteName: 'SIS Technologies Digital Models Portfolio',
          type: 'website',
        },
      }
    : {
        openGraph: {
          title,
          description,
          siteName: 'SIS Technologies Digital Models Portfolio',
          type: 'website',
        },
      }),
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <LanguageProvider>
          <header className="sticky top-0 z-[1000]">
            <Navbar />
          </header>
          {children}
          <ThemeMenu />
          <ScrollButtons />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
