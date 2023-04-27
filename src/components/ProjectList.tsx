import React from "react"
import { URL } from 'url';

//working with props, and arrays
type ProjectListProps = {
    projects: {
        title: string
        url: URL
        description: string
        finished: boolean
    }[]
}

const ProjectList = (props: ProjectListProps) => {
    return (
        <div>
            <h2>My Projects</h2>
            {props.projects.map(project => {
                return (
                    <div>
                        <h3 key={project.title}>
                            {project.title}
                        </h3>
                        <p>{project.description}</p>
                        <p>{project.finished
                            ? 'The project is completed!'
                            : 'Still in Progress'}</p>
                        <a href={project.url.toString()} target="_blank">
                            {project.url.toString()}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectList