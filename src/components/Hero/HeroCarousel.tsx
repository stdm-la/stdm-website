'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { businessUnitsData } from '@/appData'
import { useTranslation } from '@/hooks/useTranslation'
import { ArrowLeftIcon, ArrowRightIcon } from '@/utils/icons'

const AUTOPLAY_MS = 4500

interface HeroCarouselProps {
  index: number
  onIndexChange: (index: number) => void
}

const HeroCarousel = ({ index, onIndexChange }: HeroCarouselProps) => {
  const { t } = useTranslation()
  const [paused, setPaused] = useState(false)

  const slideCount = businessUnitsData.length

  const goTo = useCallback(
    (next: number) => {
      onIndexChange(((next % slideCount) + slideCount) % slideCount)
    },
    [onIndexChange, slideCount],
  )

  useEffect(() => {
    if (paused) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    const timer = window.setInterval(() => goTo(index + 1), AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [goTo, index, paused])

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}>
      {businessUnitsData.map((unit, slideIndex) => {
        const isActive = slideIndex === index

        return (
          <div
            key={unit.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}>
            <Image
              src={unit.image}
              alt={t(unit.titleKey)}
              fill
              className="object-cover"
              sizes="100vw"
              priority={slideIndex === 0}
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-black/70" />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/25" />
          </div>
        )
      })}

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label={t('hero.carousel.previous', 'Previous slide')}
        className="absolute top-1/2 left-3 z-20 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 md:left-6 md:flex">
        <ArrowLeftIcon className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label={t('hero.carousel.next', 'Next slide')}
        className="absolute top-1/2 right-3 z-20 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 md:right-6 md:flex">
        <ArrowRightIcon className="size-4" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {businessUnitsData.map((unit, slideIndex) => (
          <button
            key={unit.id}
            type="button"
            onClick={() => goTo(slideIndex)}
            aria-label={t(unit.labelKey, unit.id)}
            aria-current={slideIndex === index}
            className={`h-2 rounded-full transition-all ${
              slideIndex === index
                ? 'bg-brand-gradient w-6'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel
