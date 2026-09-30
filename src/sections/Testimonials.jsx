import { ArrowUpRight, Compass, MessageCircleMore, ScanSearch } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const projectSteps = [
  { icon: ScanSearch, title: 'Define scope', text: 'Agree on pages, required features, content, and delivery dates.' },
  { icon: MessageCircleMore, title: 'Build the frontend', text: 'Implement the agreed website and share it for review.' },
  { icon: Compass, title: 'Review and hand over', text: 'Review the agreed changes and provide the project files.' },
]

export default function Testimonials() {
  return (
    <section className="section collaboration-section"><div className="container collaboration-layout"><SectionTitle eyebrow="Project workflow" title={<>Typical website<br />project steps.</>} description="Project scope and delivery details are agreed before work begins." /><div className="principle-list">{projectSteps.map(({ icon: Icon, title, text }, index) => <article className="principle-item" key={title}><span className="principle-item__number">0{index + 1}</span><Icon size={19} strokeWidth={1.6} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={16} className="principle-item__arrow" aria-hidden="true" /></article>)}</div></div></section>
  )
}
