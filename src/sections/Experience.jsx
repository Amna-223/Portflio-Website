import './Experience.css'
import { experiences } from '../data/experience'

const Experience = () => {
  return (
    <section className="exp" id="experience">

      <div className="exp-header">
        <div className="exp-header-left">
          <div className="exp-intro-line">
            <div className="exp-intro-hr"></div>
            <span className="exp-intro-diamond">◆</span>
            <span className="exp-intro-text">MY JOURNEY</span>
          </div>
          <h2 className="exp-title">Experience<span className="exp-title-dot">.</span></h2>
        </div>

        <div className="exp-header-right">
          <p className="exp-desc">
            Real-world experience across industry internships and academic foundations — building, learning and growing.
          </p>
        </div>
      </div>

      <div className="exp-divider"></div>

      <div className="exp-list">
        {experiences.map((exp) => (
          <div className="exp-strip" key={exp.id}>

            <div className="exp-strip-left">
              <span className="exp-year">{exp.year}</span>
              <span className="exp-status">{exp.status}</span>
            </div>

            <div className="exp-strip-middle">
              <div className="exp-strip-vline"></div>
            </div>

            <div className="exp-strip-right">
              <p className="exp-company">{exp.company}</p>
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-bar"></div>
              <p className="exp-description">{exp.description}</p>
              <div className="exp-skills">
                {exp.skills.map((skill) => (
                  <span key={skill} className="exp-pill">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="exp-divider"></div>

    </section>
  )
}

export default Experience