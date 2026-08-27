import BusinessUnitPage from '@/components/ServicePage/BusinessUnitPage'
import JsonLd from '@/components/SEO/JsonLd'
import { getBusinessUnitMetadata } from '@/lib/getPageMetadata'
import { buildBusinessUnitSchema, getServerLanguage } from '@/lib/schema'

export async function generateMetadata() {
  return getBusinessUnitMetadata('advertising')
}

export default async function AdvertisingPage() {
  const lang = await getServerLanguage()
  const schema = buildBusinessUnitSchema('advertising', lang)

  return (
    <>
      <JsonLd data={schema} />
      <BusinessUnitPage unit="advertising" />
    </>
  )
}
