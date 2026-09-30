import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { experience } from '../data/experience'
import ExperienceItem from '../components/ExperienceItem'
import SectionTitle from '../components/SectionTitle'

export default function ExperiencePreview() {
  return (
    <section className="section experience-section" id="experience"><div className="container"><div className="section-heading-row"><SectionTitle eyebrow="Internship experience" title="Six months in frontend." description="A frontend development internship from December 2025 to May 2026." /><Link className="inline-link section-heading-link" to="/experience">Full experience <ArrowUpRight size={16} /></Link></div><div className="timeline">{experience.map((item, index) => <ExperienceItem key={item.period} item={item} index={index} />)}</div></div></section>
  )
}
