import type { IndustryKey } from '@/appData/industries'

const iconClassName = 'text-accent size-8'

const IndustryIcon = ({ name }: { name: IndustryKey }) => {
  switch (name) {
    case 'retail':
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l-1 12H7L6 7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V5a3 3 0 0 1 6 0v2" />
        </svg>
      )
    case 'manufacturing':
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 21V10l6 3V10l6 3V8l4-2v15" />
        </svg>
      )
    case 'construction':
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V9l8-5 8 5v12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6h6v6" />
        </svg>
      )
    case 'education':
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10 12 5l9 5-9 5-9-5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12v5c2 1.5 8 1.5 10 0v-5" />
        </svg>
      )
    case 'healthcare':
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" />
        </svg>
      )
    case 'hospitality':
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 21h20M8 13h2v2H8zM14 13h2v2h-2z" />
        </svg>
      )
    case 'professionalServices':
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <rect x="4" y="7" width="16" height="13" rx="2" />
        </svg>
      )
    case 'financialServices':
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10 12 4l9 6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v8h14v-8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18" />
        </svg>
      )
    default:
      return null
  }
}

export default IndustryIcon
