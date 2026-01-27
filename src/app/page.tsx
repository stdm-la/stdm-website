import { cookies } from 'next/headers'
import { skillList, teamData } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import TeamSection from '@/components/Team/TeamSection'
import TestimonialSection from '@/components/Testimonials/TestimonialSection'
import { getAllProjects, getAllTestimonials } from '@/services'

export default async function Home() {
  const cookieStore = await cookies()
  const language = (cookieStore.get('language')?.value || 'en') as 'en' | 'es'
  const projects = await getAllProjects(language)
  const testimonials = await getAllTestimonials(language)

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ProjectSection projects={projects} />
        <ServiceSection />
        <TeamSection team={teamData} />
        <TestimonialSection testimonials={testimonials} />
        <ContactSection />
      </div>
    </main>
  )
}
