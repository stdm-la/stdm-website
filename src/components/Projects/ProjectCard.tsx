'use client'

import { Project, ProjectCategory } from '@/lib/types'
import { useTranslation } from '@/hooks/useTranslation'

interface ProjectCardProps {
  data: Project
  compact?: boolean
}

const categoryColors: Record<ProjectCategory, string> = {
  software: 'from-blue-600/80 to-indigo-700/80',
  infrastructure: 'from-slate-600/80 to-slate-800/80',
  cloud: 'from-cyan-600/80 to-blue-700/80',
  marketing: 'from-violet-600/80 to-purple-700/80',
  signage: 'from-amber-600/80 to-orange-700/80',
  digitalDisplays: 'from-emerald-600/80 to-teal-700/80',
  equipment: 'from-rose-600/80 to-red-700/80',
  automation: 'from-fuchsia-600/80 to-pink-700/80',
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, compact = false }) => {
  const { t } = useTranslation()
  const { title, shortDescription, description, category, client, createdAt } = data

  return (
    <article className="bg-secondary border-border hover:shadow-brand-glow flex h-full flex-col rounded-xl border transition-shadow">
      <div
        className={`bg-linear-to-br ${categoryColors[category]} flex h-24 items-end rounded-t-xl p-4 md:h-28`}>
        <span className="rounded-md bg-black/30 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {t(`projectCategories.${category}`)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-accent text-xs font-medium tracking-wide uppercase">{client}</p>
        <h3 className="text-primary-content mt-2 text-lg font-semibold">{title}</h3>
        <p className="text-tertiary-content mt-3 flex-1 text-sm leading-relaxed">
          {compact ? shortDescription : description}
        </p>
        <div className="text-tertiary-content mt-4 flex items-center justify-between text-xs">
          <time dateTime={createdAt}>
            {new Date(createdAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
            })}
          </time>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
