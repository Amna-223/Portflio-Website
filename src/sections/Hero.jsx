import profileImg from '../assets/images/profile.png'
import './Hero.css'

const Hero = () => {
    return (
        <section className='hero'>
            
            <div className='hero-edition'>
                <span>THE DEVELOPER'S EDITION</span>
                <span className='hero-edition-star'>✦</span>
                <span>VOL. 01 · EST. 2024</span>
            </div>

            <div className="hero-divider"></div>

            <div className='hero-content'>
                <div className='hero-left'>
                    <div className="hero-greeting-line">
                        <p className="hero-greeting">Hi, I'm</p>
                        <div className="hero-greeting-bar"></div>
                    </div>

                    <h1 className="hero-name">Amna<span className="hero-name-dot">.</span></h1>

                    <div className="hero-role">
                        <div className="hero-role-bar"></div>
                        <p>Full Stack MERN Developer</p>
                    </div>

                    <p className="hero-tagline">I build scalable web applications with clean architecture and modern technologies. I love turning ideas into real-world solutions. </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn-primary">View Projects →</a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download Resume ↓</a>
                    </div>
                </div>

                <div className='hero-right'>
                    <div className="hero-image-container">
                        <div className="hero-image-bg"></div>
                        <div className="hero-image-wrapper">
                            <div className="hero-image-inner">
                                <img src={profileImg} alt="Amna" className="hero-image" />
                            </div>
                        </div>
                    </div>

                    <div className="hero-right-text">
                        <p className="hero-vertical-text">LET'S BUILD<br/>SOMETHING<br/>GREAT TOGETHER</p>
                        <div className="hero-v-line"></div>
                        <div className="hero-red-dot"></div>
                        <div className="hero-v-line"></div>
                        <div className="hero-dot-grid">{
                            Array(36).fill('').map((_, i) => (<span key={i} className="hero-dot"></span>))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero