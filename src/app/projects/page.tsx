import ProjectsPageContent from '@/components/Projects/ProjectsPageContent'
import JsonLd from '@/components/SEO/JsonLd'
import { buildPageMetadata, getMergedTranslations, getServerLanguage } from '@/lib/getPageMetadata'
import { buildProjectsSchema } from '@/lib/schema'
import { getAllProjects } from '@/services'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const { translations } = await getMergedTranslations()
  const pages = translations.pages as {
    projects: { metadata: { title: string; description: string } }
  }
  const meta = pages.projects.metadata

  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path: '/projects',
  })
}

export default async function ProjectsPage() {
  const lang = await getServerLanguage()
  const projects = await getAllProjects(lang)
  const schema = buildProjectsSchema(projects, lang)

  return (
    <>
      <JsonLd data={schema} />
      <ProjectsPageContent projects={projects} />
    </>
  )
}
