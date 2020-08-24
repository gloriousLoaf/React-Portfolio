// About
import React from 'react';
import './style.css'
import Me from './me.jpg';

function About() {
    return (
        <div className="container" id="aboutme">
            <div className="row">
                <div className="col-sm-7 mt-5 m-2">
                    <div className="card p-2 shadow">
                        <div className="card-body">
                            <h2>David Metcalf</h2>
                            <hr />
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={Me} alt="David Metcalf" className="selfie" />
                                </div>
                                <div className="col m-2">
                                    <p className="move-right">I am a computer science student at Sac City College, and am training as a full stack
                                    developer through a bootcamp at UC Davis Continuing & Professional Education. I have
                                    managed sales teams, profits & losses, and marketing campaigns. My background in
                                    customer service will contribute a unique skill set to your development team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* spacer col */}
                <div className="col"></div>

                {/* Skills card, same row */}
                <div className="col-sm-4 mt-5 m-2">
                    <div className="card shadow" id="skills">
                        <div className="card-body">
                            <h5 className="card-title move-left">Full Stack Development</h5>
                            <h6 className="card-subtitle font-weight-light move-left">Skills updated frequently.</h6>
                            <hr />
                            <ul>
                                <li>HTML5, CSS3, JavaScript</li>
                                <li>MERN Stack</li>
                                <li>MVC, ORM, OOP</li>
                                <li>SQL & NoSQL</li>
                                <li>Custom APIs</li>
                                <li>PC, Mac & Linux</li>
                                <li>Salesforce & other CRMs</li>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;