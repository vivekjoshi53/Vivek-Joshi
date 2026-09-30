import { ArrowDown, ArrowRight, Braces, Layers3, MoveUpRight } from 'lucide-react'
import { siteConfig } from '../config/site'
import Button from '../components/Button'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero__copy">
        <p className="eyebrow hero__eyebrow"><span className="status-dot" /> {siteConfig.role} <span className="eyebrow-divider">/</span> React / Next.js</p>
        <h1>Hi, I'm <span>{siteConfig.name.split(' ')[0]}.</span><br />I build fast,<br />usable web apps.</h1>
        <p className="hero__intro">{siteConfig.intro} My projects include SaaS landing pages and websites for gyms, restaurants, and real estate.</p>
        <div className="hero__actions"><Button to="/projects">View projects</Button><Button to="/contact" variant="text">Contact me</Button></div>
        <a className="hero__scroll" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
      </div>
      <div className="hero-art" aria-label="Frontend development workspace illustration">
        <div className="hero-art__grid" />
        <div className="hero-art__orbit hero-art__orbit--one" />
        <div className="hero-art__orbit hero-art__orbit--two" />
        <div className="hero-art__core"><div className="hero-art__core-inner"><span>VJ</span><small>FRONTEND<br />DEVELOPMENT</small></div></div>
        <div className="hero-code hero-code--top"><span><Braces size={14} /></span><div><b>Product UI engineering</b><small>React / TypeScript / Next.js</small></div><MoveUpRight size={15} /></div>
        <div className="hero-code hero-code--bottom"><span><Layers3 size={15} /></span><div><b>Web technologies</b><small>JavaScript / HTML5 / CSS3</small></div><ArrowRight size={15} /></div>
        <div className="hero-art__availability"><span className="status-dot" />{siteConfig.availability}</div>
        <span className="hero-art__index">FIG. 01 / FRONTEND</span>
      </div>
    </section>
  )
}
