'use client'

import Link from 'next/link'
import { useState } from 'react'
import { projectCategoryKeys } from '@/appData/industries'
import { Project, ProjectCategory } from '@/lib/types'
import { useTranslation } from '@/hooks/useTranslation'
import ProjectCard from '../Projects/ProjectCard'

interface ProjectsPageContentProps {
  projects: Project[]
}

const ProjectsPageContent = ({ projects }: ProjectsPageContentProps) => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all')

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <main>
      <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(40dvh-4rem)] bg-no-repeat">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
          <p className="text-accent mb-3 text-sm font-medium tracking-wide uppercase">
            {t('nav.projects')}
          </p>
          <h1 className="text-neutral text-3xl font-bold tracking-tight md:text-4xl lg:max-w-3xl">
            {t('pages.projects.headline')}
          </h1>
          <p className="text-tertiary-content mt-4 max-w-2xl text-lg leading-relaxed">
            {t('pages.projects.subheadline')}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <div className="flex flex-wrap gap-2">
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
              <ProjectCard data={project} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-tertiary-content mt-8 text-center">{t('sections.projectsEmpty')}</p>
        )}

        <div className="bg-secondary border-border mt-16 rounded-2xl border p-8 text-center md:p-12">
          <h2 className="text-neutral font-heading text-2xl font-bold md:text-3xl">
            {t('pages.projects.ctaTitle')}
          </h2>
          <p className="text-tertiary-content mx-auto mt-4 max-w-xl">
            {t('pages.projects.ctaDescription')}
          </p>
          <Link
            href="/contact"
            className="bg-brand-gradient shadow-brand-glow mt-6 inline-block rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            {t('hero.primaryCta')}
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ProjectsPageContent
