import PageIntro from '../components/PageIntro'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return <><PageIntro eyebrow="Web projects / 04" title={<>Websites for<br /><i>different needs.</i></>} description="Frontend work across SaaS, fitness, hospitality, and real estate websites." /><section className="section page-section"><div className="container project-grid project-grid--all">{projects.map((project) => <ProjectCard project={project} key={project.id} />)}</div></section></>
}
