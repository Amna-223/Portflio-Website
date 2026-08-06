import './Certificates.css'
import { organizations } from '../data/certificates'
import { Link } from 'react-router-dom'

const Certificates = () => {
  return (
    <section className="certs" id="certificates">

      <div className="certs-header">
        <div className="certs-header-left">
          <div className="certs-intro-line">
            <div className="certs-intro-hr"></div>
            <span className="certs-intro-diamond">◆</span>
            <span className="certs-intro-text">CREDENTIALS</span>
          </div>
          <h2 className="certs-title">
            Certifications<span className="certs-title-dot">.</span>
          </h2>
        </div>

        <div className="certs-header-right">
          <p className="certs-desc">
            Professional learning from globally recognized organizations — building expertise across development, AI and automation.
          </p>
        </div>
      </div>

      <div className="certs-divider"></div>

      <div className="certs-list">
        {organizations.map((org, index) => (
          <div className="certs-strip" key={org.id}>

            <div className="certs-strip-left">
              <div className="certs-strip-logo">
                {org.logo ? (
                  <img
                    src={org.logo}
                    alt={org.name}
                    className={
                      org.name === 'Meta' ? 'logo-meta' :
                      org.name === 'Anthropic' ? 'logo-anthropic' : ''
                    }
                  />
                ) : (
                  <span className="certs-strip-logo-text">{org.shortName}</span>
                )}
              </div>
            </div>

            <div className="certs-strip-middle">
              <div className="certs-strip-vline"></div>
            </div>

            <div className="certs-strip-right">
              <p className="certs-strip-org">{org.name}</p>
              <h3 className="certs-strip-category">{org.category}</h3>
              <div className="certs-strip-bar"></div>
              <ul className="certs-strip-courses">
                  {org.courses.map((course, i) => (
                    <li key={i}>
                      <span className="course-name">{course}</span>
                    </li>
                  ))}
                </ul>
            </div>

            <div className="certs-strip-number-block">
              <span className="certs-strip-number">0{index + 1}</span>
              <div className="certs-strip-number-line"></div>
            </div>

          </div>
        ))}
      </div>

      <div className="certs-divider"></div>

      <div className="certs-cta">
        <Link to="/certificates" className="certs-cta-btn">
          View All Certificates →
        </Link>
      </div>

    </section>
  )
}

export default Certificates