import './Skills.css';
import { skills } from '../data/skills'
import { FaCode, FaServer, FaDatabase, FaLaptopCode, FaRobot, FaTools} from 'react-icons/fa'

const icons = [FaCode, FaServer, FaDatabase, FaLaptopCode, FaRobot, FaTools]

const Skills = () => {
    return (
        <section className='skills' id="skills">
            <div className='skills-header'>
                <div className='skills-header-left'>
                    <div className='skills-intro-line'>
                        <div className='skills-intro-hr'></div>
                        <span className='skills-intro-diamond'>◆</span>
                        <span className='skills-intro-text'>MY TOOLKIT</span>
                    </div>
                    <h2 className='skills-title'>Skills<span className='skills-title-dot'>.</span></h2>
                </div>

                <div className='skills-header-right'>
                    <p className='skills-desc'>A carefully selected stack of technologies and tools I use to build modern, scalable and meaningful applications.</p>
                </div>

                <div className="skills-circle-text">
                    <svg viewBox="0 0 100 100" width="120" height="120">
                        <path id="skillCircle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
                        <text fontSize="7.5" fill="#8b1a2e" letterSpacing="3.5" fontFamily="Inter, sans-serif"  fontWeight="600">
                            <textPath href="#skillCircle">CODE · BUILD · SOLVE · CREATE ·&nbsp;</textPath>
                        </text>
                  </svg>
                </div>
            </div>

            <div className="skills-divider"></div>

            <div className='skills-grid'>
                {skills.map((skill, index) => {
                    const Icon = icons[index]
                    return (
                        <div className='skills-card' key={skill.number}>
                            <div className="skills-card-corner"></div>
                            <div className='skills-card-top'>
                                <span className='skills-card-number'>{skill.number}</span>
                                <div className='skills-card-icon-wrapper'>
                                    <Icon className="skills-card-icon" />
                                </div>
                            </div>
                            <h3 className='skills-card-title'>{skill.category}</h3>
                            <div className="skills-card-bar"></div>
                            <p className="skills-card-desc">{skill.description}</p>
                            <div className='skills-pills'>
                                {skill.items.map((item) => (
                                    <span key={item} className='skills-pill'>{item}</span>
                                ))}
                            </div>
                            <div className='skills-card-footer'>
                                <span>{skill.items.length} Technologies</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="skills-divider"></div>
            <div className='skills-quote'>
                <span className='skills-quote-mark'>❝</span>
                <p>The right tools, when used with <span className="skills-quote-red">purpose</span>, can create meaningful impact.</p>
                <span className='skills-quote-mark'>❝</span>
            </div>
        </section>
    )
} 

export default Skills