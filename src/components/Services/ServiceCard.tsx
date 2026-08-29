import Image from 'next/image'

interface ServiceCardTypes {
  icon: string
  title: string
  shortDescription: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon }) => {
  return (
    <div className="bg-secondary border-border hover:shadow-brand-glow flex flex-col items-center rounded-xl border p-5 transition-shadow">
      <Image src={icon} alt={title} className="my-1 size-14" />
      <h5 className="text-brand-gradient mt-2 mb-5 text-center text-base font-semibold">{title}</h5>
      <div className="bg-primary rounded-xl p-4">
        <p className="text-primary-content text-center text-sm font-normal">{shortDescription}</p>
      </div>
    </div>
  )
}

export default ServiceCard
