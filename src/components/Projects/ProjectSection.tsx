'use client'

import Link from 'next/link'
import { useState } from 'react'
import { projectCategoryKeys } from '@/appData/industries'
import { Project, ProjectCategory } from '@/lib/types'
import { useTranslation } from '@/hooks/useTranslation'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
  showViewAll?: boolean
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects, showViewAll = true }) => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all')

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="my-14">
      <SectionHeading
        title={t('sections.projects')}
        subtitle={t('sections.projectsSubtitle')}
      />

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
            activeCategory === 'all'
              ? 'bg-brand-gradient text-white'
              : 'bg-secondary text-tertiary-content hover:text-primary-content border-border border'
          }`}>
          {t('sections.projectsAll')}
        </button>
        {projectCategoryKeys.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
              activeCategory === category
                ? 'bg-brand-gradient text-white'
                : 'bg-secondary text-tertiary-content hover:text-primary-content border-border border'
            }`}>
            {t(`projectCategories.${category}`)}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <div key={project.slug} id={project.slug}>
            <ProjectCard data={project} compact />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-tertiary-content mt-8 text-center">{t('sections.projectsEmpty')}</p>
      )}

      {showViewAll && (
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-accent hover:text-neutral text-sm font-medium underline underline-offset-4 transition-colors">
            {t('sections.projectsViewAll')}
          </Link>
        </div>
      )}
    </section>
  )
}

export default ProjectSection
