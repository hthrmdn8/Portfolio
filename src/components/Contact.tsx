import React, { useState, useReducer } from 'react';
//npm install uuid
//used to make unique identifier for the click event
import { v4 as uuidv4 } from 'uuid';

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
  payload: string;
};


function Contact(props:ContactProps) {
//usestate
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [thankYou, setThankYou] = useState('Thank you!!')
//usereducer
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setThankYou(`Thank you, ${name}!!`)
    {/*using uuidV4 as the id maybe going too far, but I got interested so I figured it out*/}
    props.handleClick(event, uuidv4());
  };

  return (

    <section>
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleNameChange}/>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleEmailChange}/>
        </label>
        <label>
          Message:
          <input type="text" name="message" value={message} onChange={handleMessageChange}/>
        </label>
        <button type="submit" onClick={handleClick}>Send</button>
        <h4>{ thankYou }</h4>
        <div>Last Updated: {state.lastUpdated}</div>
      </form>
    </section>
  );
}

export default Contact;