import { skillGroups } from '../data/skills'
import SkillCard from '../components/SkillCard'
import SectionTitle from '../components/SectionTitle'

export default function Skills() {
  return (
    <section className="section skills-section" id="skills"><div className="container"><div className="section-heading-row"><SectionTitle eyebrow="Skills" title="Technologies" description="React, Next.js, JavaScript, TypeScript, Python, HTML5, and CSS3." /></div><div className="skill-grid">{skillGroups.map((group) => <SkillCard key={group.name} group={group} />)}</div></div></section>
  )
}
