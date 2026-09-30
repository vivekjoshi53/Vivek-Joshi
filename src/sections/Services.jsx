import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import SectionTitle from '../components/SectionTitle'

export default function Services() {
  return (
    <section className="section services-section" id="services"><div className="container"><div className="section-heading-row"><SectionTitle eyebrow="Services" title="Frontend services" description="SaaS landing pages and websites for gyms, restaurants, and real estate businesses." /></div><div className="service-grid">{services.map((service) => <ServiceCard key={service.number} service={service} />)}</div></div></section>
  )
}
