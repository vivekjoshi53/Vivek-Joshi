import { Code2, Gauge, PanelsTopLeft, ArrowUpRight } from 'lucide-react'

const icons = { Code2, Gauge, PanelsTopLeft }

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon]
  return (
    <article className="service-card">
      <div className="service-card__top"><span>{service.number}</span><ArrowUpRight size={17} aria-hidden="true" /></div>
      <Icon className="service-card__icon" size={23} strokeWidth={1.6} aria-hidden="true" />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </article>
  )
}
