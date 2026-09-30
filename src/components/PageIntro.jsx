export default function PageIntro({ eyebrow, title, description }) {
  return (
    <header className="page-intro container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{description && <p className="page-intro__description">{description}</p>}</header>
  )
}
