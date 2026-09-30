export default function ExperienceItem({ item, index }) {
  return (
    <article className="experience-item">
      <div className="experience-item__marker" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
      <p className="experience-item__period">{item.period}</p>
      <div className="experience-item__content">
        <h3>{item.title}</h3>
        {item.company && <p className="experience-item__company">{item.company}</p>}
        <p className="experience-item__detail">{item.detail}</p>
      </div>
    </article>
  )
}
