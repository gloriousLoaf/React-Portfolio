import React from 'react';
import db from '../../project-data/db'
import './style.css';

function Project() {
    // db.json Projects array or objects to map
    const projects = db.Projects;

    return (
        <div className="row">
            <h4 className="mx-auto mt-4 mb-1 text-muted">Recent Projects</h4>
            <div className="row" id="wrap">
                {projects.map((proj, i) => {
                    return (
                        <div className="col" key={i}>
                            <div className="card shadow">
                                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                                    <img className="card-img-top" src={proj.imgSrc}
                                        alt={proj.imgAlt} /></a>
                                <div className="card-body">
                                    <h5 className="card-title move-left">{proj.title}</h5>
                                    <p className="card-text">{proj.text}</p>
                                    <p className="card-text"><small className="text-muted">{proj.tech}<a
                                        href={proj.repoURL}
                                        target="_blank" rel="noopener noreferrer">Repository</a></small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Project;