import React, { useContext, } from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import ThemeSwitch from './ThemeSwitch';
import { ThemeContext } from './context/ThemeSwitchContext';
import { themeStyles } from '../styles/themeStyles';
import ProjectCard from './ProjectCard';

// Define an array of project objects
const projectList = [

  {
    title: 'Catalog',
    description: '.Net 6.0 Project using Mongo.DB, with Docker to Catalog anything the user needs',
    finished: true,
    url: new URL('https://example.com/project1.jpg'),
    id: 1
  },

  {
    title: 'Javascript 101',
    description: 'A beginners walkthrough of the language Javascript',
    finished: false,
    url: new URL('https://example.com/project2.jpg'),
    id: 2
  },

  {
    title: 'Portfolio',
    description: 'A place for anyone to display their work',
    finished: false,
    url: new URL('https://example.com/project3.jpg'),
    id: 3
  }

]

const aboutInformation = {
  description: "I'm a front-end developer with experience in React, TypeScript, and CSS. I enjoy building beautiful and functional websites and applications using these technologies. Recently, I have been focusing on learning TypeScript and incorporating it into my React projects to create more robust and maintainable code.",
  lastUpdated: 'Last updated: 5/8/2023'
}
// Define the main App component
function App() {
  // Use the useContext hook to access the theme and toggleTheme functions from the ThemeContext object
  const { theme, toggleTheme } = useContext(ThemeContext);
  // Access the appropriate styles object based on the current theme
  const styles = themeStyles[theme];
  const projectCards = projectList.map(project => <ProjectCard key={project.id} data={project} />)

  // Render the following JSX code:
  return (
    <div className="App" style={{ backgroundColor: styles.backgroundColor, color: styles.color }}>
      <h1>My Portfolio</h1>
      <Header />
      <ThemeSwitch />
      <About description={aboutInformation.description}
        lastUpdated={aboutInformation.lastUpdated} />
      <h2>My Projects</h2>
      {projectCards}
      <br />
      <Contact />
    </div>
  );
}
// Export the App component as the default export
export default App;