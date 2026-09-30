import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

const steps = ['Confirm required pages, features, and content', 'Agree on scope, schedule, and fees in writing', 'Build the frontend, review, and hand over']

export default function ServicesPage() {
  return <><PageIntro eyebrow="Freelance services" title={<>Frontend<br /><i>websites.</i></>} description="SaaS landing pages and websites for gyms, restaurants, and real estate businesses." /><section className="section page-section"><div className="container"><div className="service-grid service-grid--page">{services.map((service) => <ServiceCard service={service} key={service.number} />)}</div></div></section><section className="section process-section"><div className="container process-grid"><div><p className="eyebrow">Project agreement</p><h2>Scope and terms</h2><p>Agree on deliverables, schedule, fees, and revisions in writing before development starts.</p></div><ol>{steps.map((step, index) => <li key={step}><span>0{index + 1}</span><Check size={16} />{step}</li>)}</ol></div><div className="container process-contact"><span>Project enquiry</span><Link className="inline-link" to="/contact">Contact Vivek <ArrowRight size={16} /></Link></div></section></>
}
