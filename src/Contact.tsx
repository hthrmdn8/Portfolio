import React from 'react';
//npm install uuid
//used to make unique identifier for the click event
import { v4 as uuidv4 } from 'uuid';

type ContactProps = {
  //half the time this will not need parameters 
  nameValue: string
  emailValue: string
  messageValue: string

  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleMessageChange: (event: React.ChangeEvent<HTMLInputElement>) => void

  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void
}


//Event props click and input
function Contact(props:ContactProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  return (

    <section>
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={props.nameValue} onChange={props.handleNameChange}/>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={props.emailValue} onChange={props.handleEmailChange}/>
        </label>
        <label>
          Message:
          <input type="text" name="message" value={props.messageValue} onChange={props.handleMessageChange}/>
        </label>
        <button type="submit" onClick={event => props.handleClick(event, uuidv4())}>Send</button>
      </form>
    </section>
  );
}

export default Contact;