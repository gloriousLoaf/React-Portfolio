// About
import React from 'react';
import './style.css'
import Me from './me.jpg';

function About() {
    return (
        <div className="container mb-5" id="aboutme">
            <div className="row">
                {/* <h3 className="text-center"><span className="haze mx-auto mt-3 text-info"
                    tabIndex="0" id="goAbout">A b o u t &nbsp; M e</span></h3> */}
                <h3 className="text-center haze mx-auto mt-3 text-info"
                    tabIndex="0" id="goAbout">A b o u t &nbsp; M e</h3>
            </div>
            <div className="row mt-4">
                <div className="col-sm-7 m-2">
                    <div className="card p-2 shadow">
                        <div className="card-body">
                            <h2>David Metcalf</h2>
                            <hr />
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={Me} alt="David Metcalf" className="selfie" />
                                </div>
                                <div className="col m-2">
                                    <p>I am a computer science student at Sac City College, and am training as a full stack
                                    developer
                                    through a bootcamp at UC Davis Continuing & Professional Education. I have
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
                <div className="col-sm-4 m-2">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title move-left">Full Stack Development</h5>
                            <h6 className="card-subtitle font-weight-light move-left">Skills updated frequently.</h6>
                            <hr />
                            <ul>
                                <li>HTML5, CSS3, JavaScript</li>
                                <li>Node, Express, Handlebars</li>
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
            {/* tiny home link: #scroll styles it, .scrollUp for event listener */}
            <p className="text-center mt-1 scroll"><span className="text-decoration-none text-muted scrollUp">home</span></p>
        </div>
    );
};

export default About;