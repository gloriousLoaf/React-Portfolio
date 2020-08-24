// Navbar
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to="/" className={"nav-link"}
                            activeClassName="active"
                        >Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about" className={"nav-link"}
                            activeClassName="active"
                        >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/contact" className={"nav-link"}
                            activeClassName="active"
                        >Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;