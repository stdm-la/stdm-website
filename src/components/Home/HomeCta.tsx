'use client'

import { useTranslation } from '@/hooks/useTranslation'
import LeadCta from '../Leads/LeadCta'

const HomeCta = () => {
  const { t } = useTranslation()

  return (
    <LeadCta
      className="mt-16"
      title={t('sections.homeCta.title')}
      description={t('sections.homeCta.description')}
    />
  )
}

export default HomeCta
