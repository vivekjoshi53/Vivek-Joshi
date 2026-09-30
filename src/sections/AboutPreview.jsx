import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'
import SectionTitle from '../components/SectionTitle'

export default function AboutPreview() {
  return (
    <section className="section about-preview" id="about">
      <div className="container about-preview__grid">
        <SectionTitle eyebrow={`About ${siteConfig.name.split(' ')[0]}`} title={<>Frontend<br />development.</>} />
        <div className="about-preview__copy"><p className="about-preview__lead">I'm {siteConfig.name}, a frontend developer working with React, Next.js, JavaScript, and TypeScript.</p><p>I build SaaS landing pages and websites for gyms, restaurants, and real estate businesses.</p><Link className="inline-link" to="/about">More about me <ArrowUpRight size={16} /></Link></div>
      </div>
    </section>
  )
}
