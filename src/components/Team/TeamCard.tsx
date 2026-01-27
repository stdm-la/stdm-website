import { TeamMember } from '@/lib/types'
import { LinkedIn } from '@/utils/icons'
import Image from 'next/image'
import { FC } from 'react'

interface TeamCardProps {
  member: TeamMember
}

const TeamCard: FC<TeamCardProps> = ({ member: { name, role, image, linkedIn } }) => {
  return (
    <div className="bg-secondary border-border flex flex-col items-center rounded-[14px] border p-5 transition-shadow hover:shadow-lg">
      <div className="relative mb-4 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="size-32 object-cover sm:size-40"
        />
      </div>
      <h3 className="text-primary-content text-center text-lg font-semibold">{name}</h3>
      <p className="text-tertiary-content mt-1 text-center text-sm">{role}</p>
      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="text-accent mt-3 flex items-center gap-1.5 text-sm hover:underline"
        >
          <LinkedIn className="size-5" />
          <span>LinkedIn</span>
        </a>
      )}
    </div>
  )
}

export default TeamCard
