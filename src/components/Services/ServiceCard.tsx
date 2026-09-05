import Image from 'next/image'

interface ServiceCardTypes {
  image: string
  title: string
  shortDescription: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, image }) => {
  return (
    <div className="bg-secondary border-border hover:shadow-brand-glow flex h-full flex-col overflow-hidden rounded-xl border transition-shadow">
      <div className="relative h-36 w-full md:h-40">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h5 className="text-brand-gradient mb-3 text-center text-base font-semibold">{title}</h5>
        <p className="text-primary-content text-center text-sm leading-relaxed font-normal">
          {shortDescription}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
