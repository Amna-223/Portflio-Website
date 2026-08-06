import './CTA.css'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
      <section className="cta" id="contact">

        <div className="cta-top">
          <div className="cta-intro-line">
            <div className="cta-intro-hr"></div>
            <span className="cta-intro-diamond">◆</span>
            <span className="cta-intro-text">GET IN TOUCH</span>
            <span className="cta-intro-diamond">◆</span>
            <div className="cta-intro-hr"></div>
          </div>
        </div>

        <div className="cta-headline">
          <h2>Let's Build Something<span className="cta-headline-dot">.</span></h2>
          <h2 className="cta-headline-red">Together</h2>
        </div>

        <div className="cta-divider"></div>

        <div className="cta-connect">
          <p className="cta-connect-label">Connect With Me</p>
          <div className="cta-connect-buttons">
            <a href="mailto:aamnahsaeed223@gmail.com" className="cta-connect-btn">
              Email
            </a>
            <a href="https://github.com/Amna-223" target="_blank" rel="noopener noreferrer" className="cta-connect-btn">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/amna-saeed-57984a244" target="_blank" rel="noopener noreferrer" className="cta-connect-btn">
              LinkedIn
            </a>
          </div>
          <p className="cta-location">📍 Islamabad, Pakistan</p>
        </div>

        <div className="cta-divider"></div>

        <div className="cta-buttons">
          <a href="mailto:aamnahsaeed223@gmail.com" className="cta-btn-primary">Send Email →</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">Download Resume ↓</a>
        </div>

        <div className="cta-dot-grid">
          {Array(20).fill('').map((_, i) => (
            <span key={i} className="cta-dot"></span>
          ))}
        </div>

      </section>

      <footer className="footer">
        {/* <div className="footer-quote">
          <span className="footer-quote-diamond">◆</span>
          <p>"Still learning. Still building. Always improving."</p>
          <span className="footer-quote-diamond">◆</span>
        </div> */}
        <div className="footer-bottom">
          <span className="footer-logo">A/</span>
          <p className="footer-credit">Designed & Developed by Amna</p>
          <span className="footer-copy">© 2026</span>
        </div>
        <div className="footer-divider"></div>
      </footer>
    </>
  )
}

export default CTA