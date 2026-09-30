import PageIntro from '../components/PageIntro'

export default function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Legal / Privacy" title={<>Privacy<br /><i>policy.</i></>} description="How contact details and project enquiries are handled on this freelance portfolio." />
      <section className="section page-section legal-section">
        <div className="container legal-copy">
          <p className="legal-updated">Last updated: September 30, 2026</p>
          <h2>Information you provide</h2>
          <p>The contact form asks for your name, email address, project type, preferred framework, subject, and message. Submitting the form prepares a WhatsApp link containing those details. Nothing is stored by this website's own form server. If you open the link, the information is sent to WhatsApp, a service operated by Meta; if you send the message there, Vivek receives it in WhatsApp.</p>
          <p>If you contact Vivek by email or phone instead, your message and contact details are handled by the relevant email or telecommunications provider.</p>
          <h2>How enquiries are used</h2>
          <p>Contact information is used to reply to your enquiry, discuss project requirements, prepare a proposal, and communicate about agreed work. It is not sold. WhatsApp, email, hosting, and telecommunications providers may process information under their own terms and privacy policies.</p>
          <h2>Storage and preferences</h2>
          <p>This site stores your selected color theme in your browser's local storage. It does not use that preference for advertising. Messages sent through WhatsApp or email may remain with those providers and in Vivek's account or devices according to their settings and retention practices.</p>
          <h2>Your choices</h2>
          <p>You can choose not to submit the form or open the WhatsApp link. For a question or request about an enquiry you have sent to Vivek, use the email address on the contact page. Requests about data held by WhatsApp or your email provider should be directed to that provider.</p>
          <p className="legal-note">This notice describes the current portfolio contact flow. Provider policies and applicable privacy rights may vary by location.</p>
        </div>
      </section>
    </>
  )
}
