import { useState } from 'react'
import { ArrowUpRight, Mail, MessageCircleMore, Phone } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { siteConfig } from '../config/site'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [whatsappLink, setWhatsappLink] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const message = [
      `Hi Vivek, my name is ${formData.get('name')}.`,
      `Email: ${formData.get('email')}`,
      `Project type: ${formData.get('projectType')}`,
      `Preferred framework: ${formData.get('framework')}`,
      `Subject: ${formData.get('subject')}`,
      `Message: ${formData.get('message')}`,
    ].join('\n')
    const link = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
    setWhatsappLink(link)
    setStatus('Your message is ready. Open WhatsApp below to review and send it.')
    form.reset()
  }

  return <>
    <PageIntro eyebrow="Contact Vivek" title={<>Have a website<br /><i>in mind?</i></>} description="Fill in the form to prepare a WhatsApp message. You can review and send it in WhatsApp." />
    <section className="section page-section contact-section">
      <div className="container contact-layout">
        <aside className="contact-aside">
          <p className="contact-aside__lead">Let's talk about your next website.</p>
          <div className="contact-detail"><Mail size={17} /><div><span>EMAIL</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight size={14} /></a></div></div>
          <div className="contact-detail"><Phone size={17} /><div><span>PHONE</span><a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a></div></div>
          <div className="contact-detail"><MessageCircleMore size={17} /><div><span>WHATSAPP</span><a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">Chat with me <ArrowUpRight size={14} /></a></div></div>
          <p className="contact-availability"><i />{siteConfig.availability}</p>
        </aside>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
            <label>Email<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label>
          </div>
          <div className="form-row">
            <label>Project type<select name="projectType" defaultValue="" required><option value="" disabled>Select a project type</option><option>SaaS landing page</option><option>Gym website</option><option>Restaurant website</option><option>Real estate website</option><option>Other</option></select></label>
            <label>Preferred framework<select name="framework" defaultValue="No preference"><option>React</option><option>Next.js</option><option>No preference</option><option>Other</option></select></label>
          </div>
          <label>Subject<input name="subject" placeholder="What would you like to work on?" required /></label>
          <label>Message<textarea name="message" rows="5" placeholder="A few details about your project..." required /></label>
          <div className="form-submit"><button className="button button--primary" type="submit">Send message <MessageCircleMore size={16} /></button>{status && <div className="form-status" role="status"><p>{status}</p>{whatsappLink && <a href={whatsappLink} target="_blank" rel="noreferrer">Open WhatsApp <ArrowUpRight size={14} /></a>}</div>}</div>
        </form>
      </div>
    </section>
  </>
}
