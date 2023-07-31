import React from 'react';

import projects from './projects';
import Project from './Project';

const ProjectList = () => {
    return (
        <>
            <div className='project-list-container'>
                <h3 className='header project-header'>Projects</h3>
                <hr />
                <ul className='project-list'>
                    {projects.map((project) => {
                        return (
                            <Project
                                key={project.id}
                                project={project}
                                tags={project.tags}
                            ></Project>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default ProjectList;
