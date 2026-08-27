interface SectionHeadingTypes {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeading: React.FC<SectionHeadingTypes> = ({ title, subtitle, className }) => {
  return (
    <div className={`lg:max-w-[50dvw] ${className}`}>
      <h2 className="text-primary-content font-heading text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-tertiary-content mt-5 text-lg leading-relaxed text-pretty">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading
