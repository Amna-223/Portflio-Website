import './About.css'
import { FaGraduationCap, FaCode, FaRocket, FaStar } from 'react-icons/fa'

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-header">
        <h2 className="about-title">About</h2>
        <div className="about-divider"></div>
      </div>

      <div className="about-grid">

        <div className="about-card card-1">
          <span className="about-number">01</span>
          <div className="about-card-divider"></div>
          <div className="about-icon-wrapper">
            <FaGraduationCap className="about-icon" />
          </div>
          <div className="about-card-content">
            <div className="about-card-bar"></div>
            <h3 className="about-card-heading">Education</h3>
            <p className="about-card-main">CS Student</p>
            <p className="about-card-sub">COMSATS University Islamabad</p>
            <p className="about-card-desc">Focused on software engineering, backend systems and scalable applications.</p>
          </div>
        </div>

        <div className="about-card card-2">
          <span className="about-number">02</span>
          <div className="about-card-divider"></div>
          <div className="about-icon-wrapper">
            <FaCode className="about-icon" />
          </div>
          <div className="about-card-content">
            <div className="about-card-bar"></div>
            <h3 className="about-card-heading">What I Build</h3>
            <p className="about-card-main">Full Stack MERN Developer</p>
            <p className="about-card-sub">React · Node.js · Express · MongoDB</p>
            <p className="about-card-desc">Modern web applications from frontend to backend.</p>
          </div>
        </div>

        <div className="about-card card-3">
          <span className="about-number">03</span>
          <div className="about-card-divider"></div>
          <div className="about-icon-wrapper">
            <FaRocket className="about-icon" />
          </div>
          <div className="about-card-content">
            <div className="about-card-bar"></div>
            <h3 className="about-card-heading">Currently Building</h3>
            <p className="about-card-main">Active Projects</p>
            <p className="about-card-sub">Portfolio · School Management System</p>
            <p className="about-card-desc">Exploring AI integration in modern web applications.</p>
          </div>
        </div>

        <div className="about-card card-4">
          <span className="about-number">04</span>
          <div className="about-card-divider"></div>
          <div className="about-icon-wrapper">
            <FaStar className="about-icon" />
          </div>
          <div className="about-card-content">
            <div className="about-card-bar"></div>
            <h3 className="about-card-heading">Looking Ahead</h3>
            <p className="about-card-main">AI Engineering</p>
            <p className="about-card-sub">Cloud · Automation · Backend Architecture</p>
            <p className="about-card-desc">Building toward scalable, intelligent systems.</p>
          </div>
        </div>

      </div>

      <div className="about-divider"></div>

    </section>
  )
}

export default About