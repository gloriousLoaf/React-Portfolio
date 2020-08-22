// Header and Nav are dependent on each other for styling
import React from 'react';
// import Header from '../Header/index.js';
// import Nav from '../Nav/index.js';

import '../Header/style.css';
import '../Nav/style.css';
import { Link } from 'react-dom';


// function HeadNav() {
//     return (
//         < header className='showcase text-center' >
//             <Header />
//             <Nav />
//         </header >
//     );
// };

function HeadNav() {
    return (
        <header className='showcase text-center'>
            <div className="content">
                <div className="title">
                    &nbsp;
                </div>
                <div className="text mt-4">
                    Modern Design • Expressive Content
                </div>
            </div>
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
        </header >
    );
};

export default HeadNav;