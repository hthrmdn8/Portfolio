import React, { useState, useReducer, useContext  } from 'react';
//npm install uuid
//used to make unique identifier for the click event
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from './context/AppContext';

type ContactProps = {
  nameValue: string
  emailValue: string
  messageValue: string
    //half the time this will not need parameters 
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void
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
  //const { someValue, setSomeValue } = useContext(AppContext);




  

//useState
//We are setting the state and the value we give it -in this case '' is the default value
//By using a function as the value returning '' this will not run each time our component is re-rendered, 
//only the first time
  const [postId, setPostId] = useState(() => '');
  const [name, setName] = useState(() => '');
  const [email, setEmail] = useState(() => '');
  const [message, setMessage] = useState(() => '');
  const [thankYou, setThankYou] = useState(() => 'Thank you!!')
 

  //NOT BEING USED ATM
//useReducer
  // const initialState = { lastUpdated: null };
  // const reducer = (state: State, action: Action) => {
  //   switch (action.type) {
  //     case 'UPDATE_LAST_UPDATED':
  //       return { lastUpdated: new Date().toLocaleString() };
  //       default:
  //       return state;
  //   }
  // };


  // const [state, dispatch] = useReducer(reducer, initialState);


//when you update state the whole component rerenders. 
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(prevValue => value);
        break;
      case 'email':
        setEmail(prevValue => value);
        break;
      case 'message':
        setMessage(prevValue => value);
        break;
      default:
        break;
    }
    setPostId(prevValue => value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(event)
    console.log(name)
    console.log(email)
    console.log(message)
    console.log(postId)
    setThankYou(`Thank you, ${name}. I will be contacting you at ${email} very soon thank you for your message!! ${message}`)
    {/*using uuidV4 as the id maybe going too far, but I got interested so I figured it out*/ }
    props.handleClick(event, uuidv4());
    //dispatch({ type: 'UPDATE_LAST_UPDATED' })
  };



  return (

    <section>
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleFormChange}/>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleFormChange}/>
        </label>
        <label>
          Message:
          <input type="text" name="message" value={message} onChange={handleFormChange}/>
        </label>

        <input type="text" value={postId} hidden />

        <button type="submit" onClick={handleSubmit}>Send</button>
        <h4>{ thankYou }</h4>
        
        
        {/*  //NOT BEING USED ATM

         <div>First Code Written Ever: {someValue}</div>
        <button onClick={() => setSomeValue('Hello, World!')}>Press</button>
        <div>Last Updated: {state.lastUpdated}</div> */}
      
      
      </form>
    </section>
  );
}

export default Contact;