import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [click , setClick] = useState(false)

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to = "/" className = "navbar-logo">
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick = {e => setClick(!click)}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to = "/" className = 'nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/services" className = 'nav-links'>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/products" className = 'nav-links'>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/sign-up" className = 'nav-links-mobile'>
                                Sign-up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
