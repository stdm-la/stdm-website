export type ClientLogo = {
  id: string
  name: string
  shortName: string
}

/** Real clients featured publicly (testimonials / case studies). Logos as typographic marks until brand assets are provided. */
export const featuredClients: ClientLogo[] = [
  { id: 'gofastcr', name: 'Multiservicios GOFASTCR', shortName: 'GOFASTCR' },
  { id: 'fqv', name: 'FQV Ingeniería', shortName: 'FQV' },
  { id: 'medialab', name: 'MediaLab', shortName: 'MediaLab' },
]
