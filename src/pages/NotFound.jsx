import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return <section className="not-found container"><p className="eyebrow">404 / Page not found</p><h1>This path<br /><i>goes nowhere.</i></h1><p>The address may have changed, or the page may no longer be here.</p><Link className="button button--primary" to="/"><ArrowLeft size={16} /> Back to home</Link></section>
}
