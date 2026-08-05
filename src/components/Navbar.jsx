import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const navLinks = [
        {name: "Home" , path: "/"},
        {name: "About" , path: "/#about"}, 
        {name: "Projects" , path: "/projects"}, 
        {name: "Certificates" , path: "/certificates"},
        {name: "Experience" , path: "/#experience"},
        {name: "Contact" , path: "/#contact"}
    ]

    return (
        <nav className = "navbar">

            <div className="navbar-logo">
                <Link to="/">A/</Link>
            </div>

            <ul className="navbar-links">
                {navLinks.map((link) => {
                    return (
                        <li key = {link.name}>
                            {link.path.startsWith('/#') ? (
                                <a href={link.path}>{link.name}</a>
                            ) : (
                                <Link to={link.path}>{link.name}</Link>
                            )}
                        </li>
                    )
                })}
            </ul>

            <div className="navbar-resume">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"> Resume ↓</a>
            </div>
        </nav>
    )
}

export default Navbar