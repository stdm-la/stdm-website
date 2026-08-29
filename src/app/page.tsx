import { cookies } from 'next/headers'
import { teamData } from '@/appData'
import AboutPreviewSection from '@/components/About/AboutPreviewSection'
import ClientsSection from '@/components/About/ClientsSection'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import HowWeWorkSection from '@/components/HowWeWork/HowWeWorkSection'
import ProjectSection from '@/components/Projects/ProjectSection'
import JsonLd from '@/components/SEO/JsonLd'
import TeamSection from '@/components/Team/TeamSection'
import TestimonialSection from '@/components/Testimonials/TestimonialSection'
import WhatWeBuildSection from '@/components/WhatWeBuild/WhatWeBuildSection'
import WhoWeHelpSection from '@/components/WhoWeHelp/WhoWeHelpSection'
import { buildHomeSchema } from '@/lib/schema'
import { getAllProjects, getAllTestimonials } from '@/services'

export default async function Home() {
  const cookieStore = await cookies()
  const language = (cookieStore.get('language')?.value || 'en') as 'en' | 'es'
  const [testimonials, projects] = await Promise.all([
    getAllTestimonials(language),
    getAllProjects(language),
  ])

  return (
    <>
      <JsonLd data={buildHomeSchema()} />
      <main>
        <Hero />
        <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
          <WhatWeBuildSection />
          <WhoWeHelpSection />
          <HowWeWorkSection />
          <ProjectSection projects={projects} />
          <AboutPreviewSection />
          <ClientsSection />
          <TeamSection team={teamData} />
          <TestimonialSection testimonials={testimonials} />
          <ContactSection />
        </div>
      </main>
    </>
  )
}
