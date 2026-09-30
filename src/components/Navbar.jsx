import { useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { siteConfig } from '../config/site'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink className="brand" to="/" onClick={closeMenu} aria-label={`${siteConfig.name} home`}><span className="brand__mark"><img src="/fav.png" alt="" aria-hidden="true" width="30" height="30" /></span><span>{siteConfig.name}</span></NavLink>
        <div className={`navbar__links ${menuOpen ? 'is-open' : ''}`}>
          {links.map((link) => <NavLink key={link.to} to={link.to} onClick={closeMenu} className={({ isActive }) => isActive ? 'is-active' : ''}>{link.label}</NavLink>)}
          <button className="theme-toggle theme-toggle--mobile" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
          <NavLink className="button button--small navbar__mobile-cta" to="/contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></NavLink>
        </div>
        <div className="navbar__actions"><button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button><NavLink className="button button--small navbar__desktop-cta" to="/contact">Let's talk <ArrowUpRight size={14} /></NavLink><button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </nav>
    </header>
  )
}
