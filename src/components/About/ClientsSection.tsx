'use client'

import { featuredClients } from '@/appData/clients'
import { useTranslation } from '@/hooks/useTranslation'
import SectionHeading from '../SectionHeading/SectionHeading'

const ClientsSection = () => {
  const { t } = useTranslation()

  return (
    <section id="clients" className="my-14">
      <SectionHeading
        title={t('sections.clients.title')}
        subtitle={t('sections.clients.subtitle')}
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-12">
        {featuredClients.map((client) => (
          <div
            key={client.id}
            className="bg-secondary border-border hover:shadow-brand-glow flex min-h-[110px] flex-col items-center justify-center rounded-xl border px-4 py-6 text-center transition-shadow">
            <p className="text-brand-gradient text-xl font-bold tracking-tight md:text-2xl">
              {client.shortName}
            </p>
            <p className="text-tertiary-content mt-2 text-xs md:text-sm">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClientsSection
