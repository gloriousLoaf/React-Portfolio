// CONTACT
import React from 'react';
import './style.css'

function Contact() {
    return (
        <div className="container" id="contact">
            <div className="row mb-5">

                {/* spacer col */}
                <div className="col"></div>

                <div className="col-sm-6 mt-5 m-2">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="card-title text-info">Thank you for visiting!</h5>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-7">
                                    <ul className="contactList">
                                        <li><a href="https://www.linkedin.com/in/david-metcalf-codes/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                        <li><a href="https://github.com/gloriousLoaf" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                        <li><a href="https://twitter.com/davidmcodes" target="_blank" rel="noopener noreferrer">hello@metcalf.dev</a></li>
                                        <li><a href="https://twitter.com/davidmcodes" target="_blank" rel="noopener noreferrer">@davidmcodes</a> on Twitter</li>
                                    </ul>
                                </div>
                                <div className="col-sm-5">
                                    <p>Let's start a conversation. Please reach out any time, and I will get back to you promptly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* spacer col */}
                <div className="col"></div>

            </div>
        </div>
    )
}

export default Contact;