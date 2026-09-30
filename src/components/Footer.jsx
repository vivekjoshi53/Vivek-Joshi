import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main"><Link className="brand" to="/" aria-label={`${siteConfig.name} home`}><span className="brand__mark"><img src="/fav.png" alt="" aria-hidden="true" width="30" height="30" /></span><span>{siteConfig.name}</span></Link><a className="footer-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight size={15} /></a></div>
        <div className="footer-bottom"><span>Copyright 2026 {siteConfig.name}.</span><div className="footer-legal"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link>{siteConfig.social.github && <a href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>}{siteConfig.social.linkedin && <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>}</div></div>
      </div>
    </footer>
  )
}
