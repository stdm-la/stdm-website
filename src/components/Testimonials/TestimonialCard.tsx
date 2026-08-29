'use client'

import { Testimonial } from '@/lib/types'
import { isInViewport } from '@/utils'
import { StarIcon } from '@/utils/icons'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'

interface TestimonialCardProps {
  testimonial: Testimonial
  handleActiveCard: () => void
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial: { name, title, company, feedback, image, stars },
  handleActiveCard,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')

  useEffect(() => {
    let observer: IntersectionObserver | undefined

    if (cardRef.current) {
      observer = isInViewport(cardRef.current, handleActiveCard)
    }

    return () => {
      observer?.disconnect()
    }
  }, [handleActiveCard])

  return (
    <div
      ref={cardRef}
      className="bg-secondary border-border hover:shadow-brand-glow flex max-w-full shrink-0 flex-col items-center justify-between gap-4 rounded-xl border p-5 text-center sm:max-w-[425px]">
      {company && (
        <p className="text-accent text-xs font-semibold tracking-wide uppercase">{company}</p>
      )}
      <p className="text-neutral text-center leading-8 before:content-['“'] after:content-['”']">
        {feedback}
      </p>
      <div>
        <div className="mb-4 flex items-center justify-center gap-1.5">
          {Array.from({ length: 5 }, (_, idx) => (
            <StarIcon key={idx} className={idx < stars ? 'text-tag' : 'text-transparent'} />
          ))}
        </div>
        <div className="flex flex-col items-center">
          {imageError ? (
            <div
              aria-hidden="true"
              className="bg-brand-gradient mx-auto flex size-[50px] items-center justify-center rounded-full text-sm font-bold text-white">
              {initials}
            </div>
          ) : (
            <Image
              src={image}
              alt={name}
              width={50}
              height={50}
              className="mx-auto rounded-full object-cover"
              onError={() => setImageError(true)}
            />
          )}
          <p className="text-neutral mt-2 text-lg font-semibold">{name}</p>
          {title && <p className="text-neutral/60 text-sm">{title}</p>}
          {company && !title && (
            <p className="text-tertiary-content text-sm font-medium">{company}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
