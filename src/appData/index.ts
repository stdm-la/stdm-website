// Data for portfolio
import { businessUnitRoutes } from './services'
import oscarImage from '../assets/images/team/oscar.jpeg'
import dianaImage from '../assets/images/team/diana.jpeg'
import christopherImage from '../assets/images/team/christopher.jpeg'
import hoImage from '../assets/images/team/ho.png'
import martinImage from '../assets/images/team/martin.png'
import thaisImage from '../assets/images/team/thais.jpeg'
import celesteImage from '../assets/images/team/avatar.png'
import juanImage from '../assets/images/team/juan.jpeg'
import josepabloImage from '../assets/images/team/avatar.png'

// Business units (homepage)
export const businessUnitsData = [
  {
    id: 'technology',
    href: businessUnitRoutes.technology,
    image: '/images/home/technology.jpg',
    labelKey: 'hero.units.technology',
    titleKey: 'sections.businessUnits.technology.title',
    descriptionKey: 'sections.businessUnits.technology.description',
  },
  {
    id: 'digital',
    href: businessUnitRoutes.digital,
    image: '/images/home/digital.jpg',
    labelKey: 'hero.units.digital',
    titleKey: 'sections.businessUnits.digital.title',
    descriptionKey: 'sections.businessUnits.digital.description',
  },
  {
    id: 'advertising',
    href: businessUnitRoutes.advertising,
    image: '/images/home/advertising.jpg',
    labelKey: 'hero.units.advertising',
    titleKey: 'sections.businessUnits.advertising.title',
    descriptionKey: 'sections.businessUnits.advertising.description',
  },
  {
    id: 'equipment',
    href: businessUnitRoutes.equipment,
    image: '/images/home/equipment.jpg',
    labelKey: 'hero.units.equipment',
    titleKey: 'sections.businessUnits.equipment.title',
    descriptionKey: 'sections.businessUnits.equipment.description',
  },
] as const

// Team Data
export const teamData = [
  {
    name: 'Óscar Alemán',
    role: 'CEO',
    image: oscarImage,
    linkedIn: 'https://www.linkedin.com/in/oscaraleman/',
    order: 1,
  },
  {
    name: 'Jose Pablo Carrillo',
    role: 'CCO',
    image: josepabloImage,
    linkedIn: 'https://www.linkedin.com/',
    order: 2,
  },
  {
    name: 'Diana Picado',
    role: 'CFO',
    image: dianaImage,
    linkedIn: 'https://www.linkedin.com/in/dianapicado/',
    order: 3,
  },
  {
    name: 'Christopher Valerio',
    role: 'Technical Lead & Solution Architect',
    image: christopherImage,
    linkedIn: 'https://www.linkedin.com/in/christopher-valerio/',
    order: 4,
  },
  {
    name: 'Martin Tham',
    role: 'AI/ML Engineer',
    image: martinImage,
    linkedIn: 'https://www.linkedin.com/in/martin-tham/',
    order: 5,
  },
  {
    name: 'Ho Bai',
    role: 'Full Stack Software Engineer',
    image: hoImage,
    linkedIn: 'https://www.linkedin.com/in/alex-han/',
    order: 6,
  },
  {
    name: 'Thais Rodríguez',
    role: 'Senior Software Engineer & UI/UX Designer',
    image:
      thaisImage,
    linkedIn: 'https://www.linkedin.com/in/thaís-rodríguez-lópez/',
    order: 7,
  },
  {
    name: 'Celeste Herrera',
    role: 'Graphic Designer',
    image: celesteImage,
    linkedIn: 'https://www.linkedin.com/in/celeste-herrera/',
    order: 8,
  },
  {
    name: 'Juan Marín',
    role: 'QA Engineer',
    image: juanImage,
    linkedIn: 'https://www.linkedin.com/in/juan-camilo-marín-bayer-364420186',
    order: 9,
  },
]
