export type ProjectCategory =
  | 'software'
  | 'infrastructure'
  | 'cloud'
  | 'marketing'
  | 'signage'
  | 'digitalDisplays'
  | 'equipment'
  | 'automation'

export interface Project {
  slug: string
  title: string
  shortDescription: string
  description: string
  category: ProjectCategory
  client: string
  priority: number
  cover?: string
  livePreview?: string
  createdAt: string
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
  name: string
  title?: string
  company?: string
  feedback: string
  image: string
  stars: number
  createdAt: string
}

export interface TeamMember {
  name: string
  role: string
  image: string | { src: string; height: number; width: number }
  linkedIn?: string
  order?: number
}
