// import { useContext } from 'react';
// import { CommentsContext } from './context/CommentsContext';
import { URL } from 'url';
// import { v4 as uuidv4 } from 'uuid';
import Comment from './Comments'



//working with props, and arrays
type ProjectListProps ={ 
    projects: {
    title: string
    url: URL
    description: string
    finished: boolean
    comments: Comment[]
    id: number
} []
}

const ProjectList = (props: ProjectListProps) => {
  // const { comments, addComment } = useContext(CommentsContext);


    return (
        <div>
                  <h2>My Projects</h2>
            {props.projects.map(project => {
                return (
                    <div>
                    <h3 key={project.id}>
                        {project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.finished
                  ? 'The project is completed!'
                : 'Still in Progress'}</p> 
                     <a href={project.url.toString()}>{project.url.toString()}</a>         
                     <div>    
                      {/* <input type="text" />

                      <button onClick={() => addComment}>
                        Add Comment
                        </button>
                      <ul>
                      
                      </ul>

                      {project.comments.length > 0 && (
                        <ul>
                      {project.comments.map((comment: Comment, index: number) => (
                     <li key={index}>{comment.text}</li>
                  
                          ))} 
                        </ul>
                      )}*/}
                      </div>
                    </div>
                )
            })}
          
        </div>
            )
    } 

    export default ProjectList