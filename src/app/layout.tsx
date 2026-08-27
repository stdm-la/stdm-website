import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppButton from '@/components/Leads/WhatsAppButton'
import JsonLd from '@/components/SEO/JsonLd'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import ScrollButtons from '@/components/UI/ScrollButtons'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { getRootMetadata, getServerLanguage } from '@/lib/getPageMetadata'
import { buildOrganizationSchema, buildWebSiteSchema } from '@/lib/schema'
import { Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
})

export async function generateMetadata(): Promise<Metadata> {
  return getRootMetadata()
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang = await getServerLanguage()

  return (
    <html lang={lang} data-theme="dark" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${openSans.variable} font-body antialiased`}
        suppressHydrationWarning>
        <JsonLd
          data={[
            { '@context': 'https://schema.org', ...buildOrganizationSchema() },
            buildWebSiteSchema(),
          ]}
        />
        <LanguageProvider>
          <header className="sticky top-0 z-[1000]">
            <Navbar />
          </header>
          {children}
          <ThemeMenu />
          <ScrollButtons />
          <WhatsAppButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
