import React, { useState, useReducer, useEffect } from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import ProjectList from './ProjectList';
import { AppProvider } from './context/AppContext';

const projectList = [

{  title: 'Catalog',
description: '.Net 6.0 Project using Mongo.DB, with Docker to Catalog anything the user needs',
  finished: true,
  url: new URL('https://example.com/project1.jpg'),
  comments: [] ,
  id: 1
},

{  title: 'Javascript 101',
description: 'A beginners walkthrough of the language Javascript',
  finished: false ,
  url: new URL('https://example.com/project2.jpg'),
  comments: [],
  id:2
},

{  title: 'Portfolio',
description: 'A place for anyone to display their work',
  finished: false ,
  url: new URL('https://example.com/project3.jpg'),
  comments: [],  
  id: 3
}
  
]

const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
  console.log("Button Clicked", event, id);
};


function App() {

//useEffect is a hook that lets you run side effects after rendering
//the component. A side effect is any code that affects something outside
//of the component, such as updating the document title.

//This useEffect hook sets the document title to "My Portfolio" when the
//component is rendered. The second argument to useEffect is an array
//of dependencies. When any of the dependencies change, useEffect will
//re-run. In this case, the dependency array is title, so the effect 
//will run when the 'Refresh Portfolio' button is pressed
//if array is left empty we would only run useEffect onMount
const [title, setTitle] = useState('My Portfolio');


//I know this is really simple, but I need ideas on what json to render if that is the route to go 
//--maybe a job board page? Or project idea page?? 
useEffect(() => {
  document.title = title;
}, [title]);


  return (
    <AppProvider>
    <div className="App">
    <h1>{title}</h1>
      <button onClick={() => setTitle('Dynamic Portfolio: Always Evolving')}>
      Refresh Portfolio
      </button>
      <Header />
      <About description = 'Im a front-end developer with experience in React, TypeScript, and CSS. I love building beautiful and functional websites and applications that help people achieve their goals'
        lastUpdated='5/6/2023'/>
      <ProjectList projects = {projectList}/>
      <Contact 
        nameValue='' 
        emailValue='' 
        messageValue=''
        handleFormChange={handleFormChange}
        handleClick={handleClick}
        />
    </div>
    
    </AppProvider>
  );
}

export default App;