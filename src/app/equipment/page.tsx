import BusinessUnitPage from '@/components/ServicePage/BusinessUnitPage'
import JsonLd from '@/components/SEO/JsonLd'
import { getBusinessUnitMetadata } from '@/lib/getPageMetadata'
import { buildBusinessUnitSchema, getServerLanguage } from '@/lib/schema'

export async function generateMetadata() {
  return getBusinessUnitMetadata('equipment')
}

export default async function EquipmentPage() {
  const lang = await getServerLanguage()
  const schema = buildBusinessUnitSchema('equipment', lang)

  return (
    <>
      <JsonLd data={schema} />
      <BusinessUnitPage unit="equipment" />
    </>
  )
}
