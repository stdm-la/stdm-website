'use client'

import { TeamMember } from '@/lib/types'
import { useTranslation } from '@/hooks/useTranslation'
import SectionHeading from '../SectionHeading/SectionHeading'
import TeamCard from './TeamCard'

interface TeamSectionProps {
  team: TeamMember[]
}

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  const { t } = useTranslation()

  const sortedTeam = [...team].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <section id="team" className="my-14">
      <SectionHeading
        title={t('sections.team')}
        subtitle={t('sections.teamSubtitle')}
      />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:mt-[3.75rem] lg:grid-cols-3">
        {sortedTeam.map((member, index) => (
          <TeamCard key={`${member.name}-${index}`} member={member} />
        ))}
      </div>
    </section>
  )
}

export default TeamSection
