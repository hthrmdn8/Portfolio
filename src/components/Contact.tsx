import React, { useState, useReducer, useContext } from 'react';
//npm install uuid
//used to make unique identifier for the click event
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from './context/AppContext';
import handleFormChanges from '../utils/handleFunctions'

type ContactProps = {
  nameValue: string
  emailValue: string
  messageValue: string
  //half the time this will not need parameters
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  //half the time this will not need parameters
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  //half the time this will not need parameters
  handleMessageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  //half the time this will not need parameters
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void
}

type State = {
  lastUpdated: string | null;
};

type Action = {
  type: 'UPDATE_LAST_UPDATED';
  // payload: string;
};


function Contact(props: ContactProps) {
  const { someValue, setSomeValue } = useContext(AppContext);

  //useState
  const [postId, setPostId] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [thankYou, setThankYou] = useState('Thank you!!')
  //useReducer
  const initialState = { lastUpdated: null };
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'UPDATE_LAST_UPDATED':
        return { lastUpdated: new Date().toLocaleString() };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    props.handleNameChange(event);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    props.handleEmailChange(event);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    props.handleMessageChange(event);
  };

  // possibly idea for use Context - Make a comment storage
  // type PostCommentsContext = [
  //   {
  //     personsName: string;
  //     postId: number;
  //     projectId: number;
  //     date: Date
  //   }
  // ]

  // const posts: PostCommentsContext = [];

  //  posts.filter(post => post.projectId == projectId)

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(event)
    console.log(name)
    console.log(email)
    console.log(message)
    console.log(postId)
    setThankYou(`Thank you, ${name}!!`)
    {/*using uuidV4 as the id maybe going too far, but I got interested so I figured it out*/ }
    props.handleClick(event, uuidv4());
    dispatch({ type: 'UPDATE_LAST_UPDATED' })
  };

  return (

    <section>
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Message:
          <input type="text" name="message" value={message} onChange={handleMessageChange} />
        </label>

        {/* // name -> User Provide
        // message -> User Provided
        // date -> Hidden Inputs
        // projectId -> Hidden Inputs */}

        <input type="text" value={postId} hidden />

        <button type="submit" onClick={handleSubmit}>Send</button>
        <h4>{thankYou}</h4>
        <div>First Code Written Ever: {someValue}</div>
        <button onClick={() => setSomeValue('Hello, World!')}>Press</button>
        <div>Last Updated: {state.lastUpdated}</div>
      </form>
    </section>
  );
}

export default Contact;