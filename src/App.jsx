import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import { siteConfig } from './config/site'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Site() {
  const [theme, setTheme] = useState(() => localStorage.getItem('devfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('devfolio-theme', theme)
    document.title = `${siteConfig.name} | ${siteConfig.role}`
  }, [theme])

  function toggleTheme() {
    setTheme((current) => current === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return <BrowserRouter><Site /></BrowserRouter>
}
