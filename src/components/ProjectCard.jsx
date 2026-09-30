import { ArrowUpRight, GitBranch } from 'lucide-react'

function ProjectPreview({ type }) {
  return (
    <div className={`project-preview project-preview--${type}`} aria-hidden="true">
      <div className="preview-window">
        <div className="preview-window__bar"><span /><span /><span /><i>workspace / {type}</i></div>
        {type === 'finance' && <div className="finance-preview">
          <aside><b>H.</b><span /><span /><span /><span /></aside>
          <div className="finance-preview__main"><small>PROPERTY SEARCH</small><b>Find your next place</b><div className="finance-preview__balance"><span>SEARCH HOMES</span><strong>City or neighborhood</strong><em>Browse</em></div><div className="finance-preview__activity"><span>FEATURED LISTINGS</span><div><i />Apartment near transit</div><div><i />Home with a garden</div><div><i />Modern city residence</div></div></div>
        </div>}
        {type === 'fitness' && <div className="fitness-preview">
          <div className="fitness-preview__nav"><b>FITNESS<span>.</span></b><i>YOUR GYM</i></div><div className="fitness-preview__headline"><small>TRAINING THAT FITS YOUR DAY</small><strong>Move at<br />your pace.</strong></div><div className="fitness-preview__routine"><span>CLASSES AND TRAINING</span><div>Strength and conditioning</div><div>Group fitness</div><div>Personal training</div></div>
        </div>}
        {type === 'tasks' && <div className="tasks-preview">
          <nav className="tasks-preview__nav"><b>WORKSPACE</b><span>Platform&nbsp;&nbsp; Product&nbsp;&nbsp; Resources</span><i>Get started</i></nav><div className="tasks-preview__hero"><small>WORK MANAGEMENT SOFTWARE</small><strong>Project<br />management.</strong><p>Plan tasks and share project updates.</p><b>Explore the platform</b></div><div className="tasks-preview__footer"><span>PROJECTS</span><span>TEAM PLANNING</span><span>SHARED NOTES</span></div>
        </div>}
        {type === 'shop' && <div className="shop-preview">
          <div className="shop-preview__nav"><b>TABLE / KITCHEN</b><span>Menu&nbsp;&nbsp;&nbsp; Our story&nbsp;&nbsp;&nbsp; Find us</span><i>BOOK</i></div><div className="shop-preview__hero"><small>MENU / HOURS / RESERVATIONS</small><strong>Seasonal<br />menu.</strong><span>View dishes <ArrowUpRight size={13} /></span></div><div className="shop-preview__products"><i /><i /><i /></div>
        </div>}
      </div>
    </div>
  )
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectPreview type={project.visual} />
      <div className="project-card__body">
        <div className="project-card__heading"><div><p className="project-card__category">{project.category}</p><h3>{project.name}</h3></div><span className="project-card__index">/{project.id.slice(0, 2)}</span></div>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__stack">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        {(project.demoUrl || project.repoUrl) && <div className="project-card__links">{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer"><GitBranch size={14} /> Source <ArrowUpRight size={15} /></a>}</div>}
      </div>
    </article>
  )
}
