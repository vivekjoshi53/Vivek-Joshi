import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'

export default function CTA() {
  return (
    <section className="cta-section"><div className="container cta-inner"><div><p className="eyebrow">Contact</p><h2>Website<br /><i>enquiries.</i></h2></div><div className="cta-action"><p>SaaS, gym, restaurant,<br />or real estate websites.</p><Link className="button button--light" to="/contact">Contact Vivek <ArrowUpRight size={16} /></Link><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div><span className="cta-index">CONTACT / 01</span></div></section>
  )
}
