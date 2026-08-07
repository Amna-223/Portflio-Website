import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const navLinks = [
        {name: "Home" , path: '#hero'},
        {name: "About" , path: "/#about"}, 
        {name: "Skills" , path: "/#skills"},
        {name: "Projects" , path: "/#projects"}, 
        {name: "Certificates" , path: "/#certificates"},
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
                            {<a href={link.path}>{link.name}</a>}
                        </li>
                    )
                })}
            </ul>

            <div className="navbar-resume">
                <a href="/resume.pdf" download="Amna_Saeed_Resume.pdf"> Resume ↓</a>
            </div>
        </nav>
    )
}

export default Navbar