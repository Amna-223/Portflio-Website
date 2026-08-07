import "./FeaturedProject.css"
import { featuredProjects } from '../data/projects'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FeaturedProjects = () => {
    return (
        <section className="featured" id="projects">
    
            <div className="featured-header">
                <div className="featured-header-left">
                    <div className="featured-intro-line">
                        <div className="featured-intro-hr"></div>
                        <span className="featured-intro-diamond">◆</span>
                        <span className="featured-intro-text">SELECTED WORK</span>
                    </div>
                    <h2 className="featured-title">Projects<span className="featured-title-dot">.</span></h2>
                </div>

    
                <div className="featured-header-right">
                    <p className="featured-desc">A preview of my strongest work. Each project represents a real problem solved with clean code and modern technology.</p>
                </div>
            </div>
    
            <div className="featured-divider"></div>
    
            <div className="featured-grid">
                {featuredProjects.map((project, index) => (
                    <div className="featured-card" key={project.id}>
                    
                        <div className="featured-card-image">
                            {project.thumbnail ? (
                                <img src={project.thumbnail} alt={project.title} />
                            ) : (
                            <div className="featured-card-placeholder">
                                <span>{project.title}</span>
                            </div>
                            )}
                            <div className="featured-card-overlay">
                                <Link to={`/projects/${project.slug}`} className="featured-card-view">View Project →</Link>
                            </div>
                        </div>
                    
                        <div className="featured-card-body">
                            <div className="featured-card-top">
                                <span className="featured-card-number">0{index + 1}</span>
                                <span className="featured-card-badge">{project.badge}</span>
                            </div>
                    
                            <div className="featured-card-bar"></div>
                    
                            <h3 className="featured-card-title">{project.title}</h3>
                            <p className="featured-card-desc">{project.description}</p>
                    
                            <div className="featured-card-tech">
                                {project.tech.slice(0, 4).map((t) => (
                                    <span key={t} className="featured-card-pill">{t}</span>
                                ))}
                            </div>
                    
                            <div className="featured-card-links">
                                {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="featured-card-link">
                                    <FaGithub /> GitHub
                                </a>
                                )}
                                {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="featured-card-link">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                                )}
                            </div>
                        </div>  
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProjects