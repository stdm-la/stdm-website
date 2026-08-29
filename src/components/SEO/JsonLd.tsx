type JsonLdData = Record<string, unknown> | Record<string, unknown>[]

interface JsonLdProps {
  data: JsonLdData
}

const JsonLd = ({ data }: JsonLdProps) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
)

export default JsonLd
