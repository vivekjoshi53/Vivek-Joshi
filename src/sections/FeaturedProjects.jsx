import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'

export default function FeaturedProjects() {
  return (
    <section className="section projects-section" id="projects"><div className="container"><div className="section-heading-row"><SectionTitle eyebrow="Selected work" title="Websites I build." description="Frontend projects for SaaS, fitness, hospitality, and property businesses." /><Link className="inline-link section-heading-link" to="/projects">All projects <ArrowRight size={16} /></Link></div><div className="project-grid">{projects.filter((project) => project.featured).map((project) => <ProjectCard project={project} key={project.id} />)}</div></div></section>
  )
}
