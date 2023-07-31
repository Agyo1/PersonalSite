import React from 'react';

const Project = (props) => {
    const { project, tags } = props;

    return (
        <li className='project'>
            <a href={project.link} target='_blank'>
                <img
                    className='project-image'
                    src={project.image}
                    alt={project.name}
                />
            </a>
            <h4 className='project-name'>{project.name}</h4>
            <div className='centered'>
                <a
                    className='project-link'
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Project Link
                </a>

                <hr />
                <ul className='tags-list'>
                    <div className='inline'>
                        {tags.map((tag) => {
                            return (
                                <div className='tag' id={tag.rule}>
                                    {tag.name}
                                </div>
                            );
                        })}
                    </div>
                </ul>
            </div>
        </li>
    );
};

export default Project;
