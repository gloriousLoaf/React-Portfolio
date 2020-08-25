// CONTACT
import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css'

function NotFound() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>404: Page Not Found</h1>
                <h2 className="left">Dear Explorer,</h2>
                <h5 className="left">You have reached the end of my interwebz. Head <NavLink exact to="/"
                    className="home">home?</NavLink><span role="img"
                        aria-label="emoji hand pointing left to Home link"> 👈</span></h5>
            </div>
        </div>
    )
}

export default NotFound;