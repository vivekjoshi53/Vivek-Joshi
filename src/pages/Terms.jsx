import PageIntro from '../components/PageIntro'

export default function Terms() {
  return (
    <>
      <PageIntro eyebrow="Freelance / Terms and conditions" title={<>Terms and<br /><i>conditions.</i></>} description="These terms cover use of this portfolio. A written project proposal or agreement sets the terms for any freelance engagement." />
      <section className="section page-section legal-section">
        <div className="container legal-copy">
          <p className="legal-updated">Last updated: September 30, 2026</p>
          <h2>Portfolio and enquiries</h2>
          <p>This website describes Vivek Joshi's frontend development services and example project categories. Sending an enquiry does not create a client relationship or require either party to proceed with a project.</p>
          <h2>Project scope and proposals</h2>
          <p>Before work begins, the client and Vivek should agree in writing on the deliverables, project scope, schedule, fees, payment milestones, included revisions, and any ongoing support. The signed or otherwise accepted project agreement governs those project-specific terms. A request outside the agreed scope may require a revised quote or timeline.</p>
          <h2>Client responsibilities</h2>
          <p>The client is responsible for providing accurate content, timely feedback, required approvals, and access to any accounts or materials needed for the work. The client must have permission to use the text, images, logos, and other materials they provide. Delays in receiving these items may affect the schedule.</p>
          <h2>Payment and cancellation</h2>
          <p>Fees, due dates, expenses, deposits, and cancellation arrangements should be written into the project agreement before work starts. Any work completed and any non-refundable third-party costs should be handled as described in that agreement and applicable law.</p>
          <h2>Ownership and third-party tools</h2>
          <p>The project agreement should specify when ownership or a licence for custom deliverables transfers. Pre-existing tools, open-source software, fonts, hosting, and other third-party materials remain subject to their respective licences and terms.</p>
          <h2>Availability and external services</h2>
          <p>This portfolio and external services such as WhatsApp, email, domain registrars, and hosting providers may be unavailable or change. Their services are governed by their own terms. Website performance, search ranking, and third-party uptime depend on factors outside the developer's control and are not guaranteed unless expressly agreed in writing.</p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent using the contact details on this site. These website terms are general information; project-specific terms should be reviewed and agreed before work begins.</p>
        </div>
      </section>
    </>
  )
}
