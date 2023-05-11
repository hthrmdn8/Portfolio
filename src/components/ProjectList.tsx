import { URL } from 'url';

// Define the type for the props that will be passed to the ProjectList component.
// It is an object that contains an array of project objects.
type ProjectListProps ={ 
    projects: {
    title: string
    url: URL
    description: string
    finished: boolean
    id: number
} []
}

// Define the ProjectList component which takes in the projects prop.
const ProjectList = (props: ProjectListProps) => {
    // Render the following JSX code:
    return (
        <div id="projects">
                  <h2>My Projects</h2>
            {props.projects.map(project => {
                return (
                    <div key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.finished
                  ? 'The project is completed!'
                : 'Still in Progress'}</p> 
                     <a href={project.url.toString()}>{project.url.toString()}</a>         
                     <div>    
                      </div>
                    </div>
                )
            })}
          
        </div>
            )
    } 

// Export the ProjectList component as the default export
    export default ProjectList