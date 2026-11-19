// Data for portfolio
import { businessUnitRoutes } from './services'
import oscarImage from '../assets/images/team/oscar.jpeg'
import marcoImage from '../assets/images/team/marco.jpg'
import dianaImage from '../assets/images/team/diana.jpeg'
import christopherImage from '../assets/images/team/christopher.jpeg'
import gabrielImage from '../assets/images/team/gabriel.jpg'
import martinImage from '../assets/images/team/martin.png'
import hoImage from '../assets/images/team/ho.png'
import luisDiegoImage from '../assets/images/team/avatar.png'
import thaisImage from '../assets/images/team/thais.jpeg'
import celesteImage from '../assets/images/team/avatar.png'
import juanImage from '../assets/images/team/juan.jpeg'

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
    id: 'equipment',
    href: businessUnitRoutes.equipment,
    image: '/images/home/equipment.jpg',
    imageAltKey: 'sections.businessUnits.equipment.imageAlt',
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
    name: 'Marco Aguilar de Lange',
    role: 'CCO',
    image: marcoImage,
    linkedIn: 'https://www.linkedin.com/in/marco-aguilar-de-lange-b0741437a/',
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
    role: 'DevOps Engineer',
    image: christopherImage,
    linkedIn: 'https://www.linkedin.com/in/christopher-valerio/',
    order: 4,
  },
  {
    name: 'Gabriel Dang',
    role: 'Technical Lead',
    image: gabrielImage,
    linkedIn: 'https://www.linkedin.com/in/gabriel-dang-197b833b9/',
    order: 5,
  },
  {
    name: 'Martin Tham',
    role: 'AI/ML Engineer',
    image: martinImage,
    linkedIn: 'https://www.linkedin.com/in/martin-tham/',
    order: 6,
  },
  {
    name: 'Ho Bai',
    role: 'Full Stack Software Engineer',
    image: hoImage,
    linkedIn: 'https://www.linkedin.com/in/alex-han/',
    order: 7,
  },
  {
    name: 'Luis Diego Cruz',
    role: 'Full Stack Software Engineer',
    image: luisDiegoImage,
    linkedIn: 'https://www.linkedin.com/in/luis-diego-cruz-m-5282b19b/',
    order: 8,
  },
  {
    name: 'Thais Rodríguez',
    role: 'Senior Software Engineer & UI/UX Designer',
    image: thaisImage,
    linkedIn: 'https://www.linkedin.com/in/thaís-rodríguez-lópez/',
    order: 9,
  },
  {
    name: 'Celeste Herrera',
    role: 'Graphic Designer',
    image: celesteImage,
    linkedIn: 'https://www.linkedin.com/in/celeste-herrera/',
    order: 10,
  },
  {
    name: 'Juan Marín',
    role: 'QA Engineer',
    image: juanImage,
    linkedIn: 'https://www.linkedin.com/in/juan-camilo-marín-bayer-364420186',
    order: 11,
  },
]
