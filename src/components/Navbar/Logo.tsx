import logoDark from '@/assets/images/brand/logo-dark.png'
import logoLight from '@/assets/images/brand/logo-light.png'
import Image from 'next/image'

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

const Logo = ({ width = 220, height = 32, className = '' }: LogoProps) => {
  return (
    <span className={`relative inline-flex shrink-0 items-center ${className}`}>
      <Image
        src={logoDark}
        alt="STDM | Technology, Digital & Advertising Solutions"
        width={width}
        height={height}
        className="h-8 w-auto object-contain [html[data-theme=light]_&]:hidden"
        priority
      />
      <Image
        src={logoLight}
        alt="STDM | Technology, Digital & Advertising Solutions"
        width={width}
        height={height}
        className="hidden h-8 w-auto object-contain [html[data-theme=light]_&]:block"
        priority
      />
    </span>
  )
}

export default Logo
