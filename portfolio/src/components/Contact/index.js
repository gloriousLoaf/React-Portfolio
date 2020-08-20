// CONTACT
import React from 'react';
import storeInfo from './contactApp';
import './style.css'

function Contact() {
    return (
        <div className="container mb-5" id="contact">
            <div className="row">
                <h3 className="text-center haze mx-auto mt-3 text-info">
                    <span tabIndex="0" id="goContact">C o n t a c t</span></h3>
            </div>
            <div className="row mt-4">
                <div className="col-sm-7 m-2">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title m-1 d-flex justify-content-center text-info">Send Me a Message</h5>
                            <br />
                            <form name="submit-to-google-sheet" onSubmit={storeInfo}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input name="name" type="text" className="form-control" id="contact-name"
                                        placeholder="Nice to meet you." />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input name="email" type="email" className="form-control" id="contact-email"
                                        placeholder="username@somewhere.com" />
                                    <small id="email-help" className="form-text text-muted">I will not share your
                                        info.</small>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea name="message" className="form-control thank-you" id="contact-msg"
                                        placeholder="How can we collaborate?"></textarea>
                                </div>
                                {/* data-target for Modal added dynamically, see storeInfo() */}
                                <button type="submit" className="btn btn-outline-info shadow-sm" id="submit-btn"
                                    data-toggle="modal">Submit</button>
                            </form>

                            {/* MODAL NOT IMPLEMENTED YET */}
                            {/* Modal after Submit click */}
                            <div className="modal fade" id="thanks-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        {/* stripped down and all content centered */}
                                        <div className=" modal-header">
                                            <h6 className="modal-title text-center w-100">Got it!</h6>
                                        </div>
                                        <div className="modal-body">
                                            <p className="text-center">Thanks for reaching out.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-info shadow-none"
                                                data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* spacer col */}
                <div className="col"></div>

                {/* Thank you card */}
                <div className="col-sm-4 m-2">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title move-left">Thank you for visiting.</h5>
                            <h6 className="card-subtitle font-weight-light move-left">I will reply within 24
                            hours.
                            </h6>
                            <hr />
                            <p className="font-weight-light">Let's start a conversation. Connect with me and view my resume
                                on <a href="https://www.linkedin.com/in/david-metcalf-codes/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                            </p>
                            <br />
                            <p className="font-weight-light">View further work and get a sense of my development style at <a
                                href="https://github.com/gloriousLoaf" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
                            <br />
                            <p className="font-weight-light">I'm also on Twitter <a href="https://twitter.com/davidmcodes"
                                target="_blank" rel="noopener noreferrer">@davidmcodes</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* tiny home link: .scroll styles it, .scrollUp for event listener */}
            <p className="text-center mt-1 scroll"><span className="text-decoration-none text-muted scrollUp">home</span></p>
        </div>
    )
}

export default Contact;