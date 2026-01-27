// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
  JavaIcon,
  AwsIcon,
  SpringbootIcon,
} from '../utils/icons'

import oscarImage from '../assets/images/team/oscar.jpeg'
import dianaImage from '../assets/images/team/diana.jpg'
import christopherImage from '../assets/images/team/christopher.jpeg'
import hoImage from '../assets/images/team/ho.png'
import martinImage from '../assets/images/team/martin.png'
import thaisImage from '../assets/images/team/thais.jpeg'
import sebastianImage from '../assets/images/team/sebastian.jpeg'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Project Alpha',
    shortDescription:
      'A groundbreaking project that revolutionizes the way we approach technology. Built with cutting-edge tools for maximum efficiency, it sets new industry standards.',
    cover:
      'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/alpha',
    type: 'Client Work 🙍‍♂️',
    siteAge: '1 month old',
  },
  {
    priority: 2,
    title: 'Project Beta',
    shortDescription:
      'Project Beta is a static technical blog site built with GatsbyJS. I share tips on topics like building reusable components in React, explaining JavaScript methods and concepts, Node.js scripts, and more.',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/beta',
    visitors: '8K Visitors',
    earned: '$400 Earned',
  },
  {
    priority: 3,
    title: 'Project Epsilon',
    shortDescription:
      'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic. Your task is to make it functional by writing business logic, to improve your frontend skills',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    type: 'Free 🔥',
    livePreview: 'https://example.com/epsilon',
    githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
    githubStars: '40 Stars',
    numberOfSales: '138 Sales',
  },
  {
    priority: 4,
    title: 'Ejucationzz',
    shortDescription:
      'Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed. Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'New 🔥',
    livePreview: 'https://example.com/Ejucationzz',
    siteAge: '4 months old',
    visitors: '100 Visitors',
    githubLink: '',
    earned: '',
  },
]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Team Data
export const teamData = [
  {
    name: 'Óscar Alemán',
    role: 'CEO & CTO',
    image: oscarImage,
    linkedIn: 'https://www.linkedin.com/in/oscaraleman/',
    order: 1,
  },
  {
    name: 'Diana Picado',
    role: 'CFO',
    image: dianaImage,
    linkedIn: 'https://www.linkedin.com/',
    order: 2,
  },
  {
    name: 'Christopher Valerio',
    role: 'Technical Lead & Solution Architect',
    image: christopherImage,
    linkedIn: 'https://www.linkedin.com/in/christopher-valerio/',
    order: 3,
  },
  {
    name: 'Martin Tham',
    role: 'AI/ML Engineer',
    image: martinImage,
    linkedIn: 'https://www.linkedin.com/in/martin-tham/',
    order: 4,
  },
  {
    name: 'Ho Bai',
    role: 'Full Stack Software Engineer',
    image: hoImage,
    linkedIn: 'https://www.linkedin.com/in/alex-han/',
    order: 5,
  },
  {
    name: 'Thais Rodríguez',
    role: 'UI/UX Designer',
    image:
      thaisImage,
    linkedIn: 'https://www.linkedin.com/in/thaís-rodríguez-lópez/',
    order: 6,
  },
  {
    name: 'Sebastian Alemán',
    role: 'Graphic Designer',
    image: sebastianImage,
    linkedIn: 'https://www.linkedin.com/in/sebastian-aleman/',
    order: 7,
  },
  {
    name: 'Laura Castillo',
    role: 'QA Engineer',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    linkedIn: 'https://www.linkedin.com/',
    order: 8,
  },
  {
    name: 'Natalia Vargas',
    role: 'Project Manager',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    linkedIn: 'https://www.linkedin.com/',
    order: 9,
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Nest.js',
    icon: NestjsIcon,
  },
  {
    name: 'Java',
    icon: JavaIcon,
  },
  {
    name: 'SpringBoot',
    icon: SpringbootIcon,
  },
  {
    name: 'AWS',
    icon: AwsIcon,
  },
  {
    name: 'Socket.io',
    icon: SocketIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Team', href: '#team' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
]

export const languages = ['En', 'Es']
