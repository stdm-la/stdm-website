import BusinessUnitPage from '@/components/ServicePage/BusinessUnitPage'
import JsonLd from '@/components/SEO/JsonLd'
import { getBusinessUnitMetadata } from '@/lib/getPageMetadata'
import { buildBusinessUnitSchema, getServerLanguage } from '@/lib/schema'

export async function generateMetadata() {
  return getBusinessUnitMetadata('digital')
}

export default async function DigitalPage() {
  const lang = await getServerLanguage()
  const schema = buildBusinessUnitSchema('digital', lang)

  return (
    <>
      <JsonLd data={schema} />
      <BusinessUnitPage unit="digital" />
    </>
  )
}
