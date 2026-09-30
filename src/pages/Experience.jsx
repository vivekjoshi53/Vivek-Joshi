import PageIntro from '../components/PageIntro'
import ExperienceItem from '../components/ExperienceItem'
import { experience } from '../data/experience'

export default function Experience() {
  return <><PageIntro eyebrow="Experience / Dec 2025 - May 2026" title={<>Six months of<br /><i>frontend experience.</i></>} description="My frontend development internship ran from December 2025 to May 2026." /><section className="section page-section"><div className="container experience-page"><div className="experience-page__aside"><span>FOCUS</span><p>Frontend development<br />Responsive websites<br />Web interfaces</p></div><div className="timeline">{experience.map((item, index) => <ExperienceItem item={item} index={index} key={item.period} />)}</div></div></section></>
}
