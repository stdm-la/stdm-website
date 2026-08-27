import BusinessUnitPage from '@/components/ServicePage/BusinessUnitPage'
import JsonLd from '@/components/SEO/JsonLd'
import { getBusinessUnitMetadata } from '@/lib/getPageMetadata'
import { buildBusinessUnitSchema, getServerLanguage } from '@/lib/schema'

export async function generateMetadata() {
  return getBusinessUnitMetadata('technology')
}

export default async function TechnologyPage() {
  const lang = await getServerLanguage()
  const schema = buildBusinessUnitSchema('technology', lang)

  return (
    <>
      <JsonLd data={schema} />
      <BusinessUnitPage unit="technology" />
    </>
  )
}
