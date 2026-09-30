import { ArrowUpRight } from 'lucide-react'

export default function SkillCard({ group }) {
  return (
    <article className="skill-card">
      <div className="skill-card__top"><span>{group.number}</span><ArrowUpRight size={17} aria-hidden="true" /></div>
      <h3>{group.name}</h3>
      <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
    </article>
  )
}
