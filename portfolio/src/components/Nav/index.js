// Nav
import React from 'react';
import './style.css'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-nav mx-auto">
                <button className="nav-item nav-link" id="portTop">Portfolio</button>
                <button className="nav-item nav-link" id="aboutTop">About Me</button>
                <button className="nav-item nav-link" id="contactTop">Contact</button>
            </div>
        </nav>
    );
};

export default Nav;