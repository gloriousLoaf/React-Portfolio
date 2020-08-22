// Navbar
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div>
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link to="/" className={
                            window.location.pathname === "/"
                                ? "nav-link active"
                                : "nav-link"
                        } >Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={
                            window.location.pathname === "/about"
                                ? "nav-link active"
                                : "nav-link"
                        } >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={
                            window.location.pathname === "/contact"
                                ? "nav-link active"
                                : "nav-link"
                        } >Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;