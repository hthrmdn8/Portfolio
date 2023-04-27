import React, { useState, useReducer } from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import ProjectList from './ProjectList';
import { AppProvider } from './context/AppContext';

const projectList = [

{  title: 'Catalog',
  discription: '.Net 6.0 Project using Mongo.DB, with Docker to Catalog anything the user needs',
  finished: true,
  url: new URL('https://example.com/project1.jpg') },

{  title: 'Javascript 101',
  discription: 'A beginners walkthrough of the language Javascript',
  finished: false ,
  url: new URL('https://example.com/project2.jpg')},

{  title: 'Portfolio',
  discription: 'A place for anyone to display their work',
  finished: false ,
  url: new URL('https://example.com/project3.jpg')  }
  
]

const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
  console.log("Button Clicked", event, id);
};


function App() {

  return (
    <AppProvider>
    <div className="App">
      <Header />
      <About discription = 'Im a front-end developer with experience in React, TypeScript, and CSS. I love building beautiful and functional websites and applications that help people achieve their goals'
        lastUpdated='4/26/2023'/>
      <ProjectList projects = {projectList}/>
      <Contact 
        nameValue='' 
        emailValue='' 
        messageValue=''
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handleMessageChange={handleMessageChange}
        handleClick={handleClick}
        />
    </div>
    
    </AppProvider>
  );
}

export default App;
