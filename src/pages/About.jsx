import { ArrowUpRight, Brackets, Focus, Sparkles } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { siteConfig } from '../config/site'

const technologies = [
  { icon: Focus, title: 'Frameworks', text: 'React and Next.js.' },
  { icon: Brackets, title: 'Languages', text: 'JavaScript, TypeScript, and Python.' },
  { icon: Sparkles, title: 'Web fundamentals', text: 'HTML5 and CSS3.' },
]

export default function About() {
  return (
    <><PageIntro eyebrow={`About ${siteConfig.name.split(' ')[0]}`} title={<>Frontend developer.</>} description={`${siteConfig.name} builds responsive websites with React, Next.js, JavaScript, and TypeScript.`} /><section className="section page-section"><div className="container about-story"><div className="about-story__label"><span>ABOUT VIVEK</span><span>FRONTEND / WEB</span></div><div className="about-story__body"><h2>Websites for SaaS and local businesses.</h2><p>I'm {siteConfig.name}, a frontend developer. My projects include SaaS landing pages and websites for gyms, restaurants, and real estate.</p><p>I completed a six-month frontend development internship from December 2025 to May 2026. My stated technologies include React, Next.js, JavaScript, TypeScript, Python, HTML5, and CSS3.</p><a className="inline-link" href={`mailto:${siteConfig.email}`}>Email me <ArrowUpRight size={16} /></a></div></div></section><section className="section values-section"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">Technologies</p><h2 className="plain-heading">Technologies I use</h2></div></div><div className="value-grid">{technologies.map(({ icon: Icon, title, text }, index) => <article className="value-item" key={title}><span className="value-item__number">0{index + 1}</span><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section></>
  )
}
