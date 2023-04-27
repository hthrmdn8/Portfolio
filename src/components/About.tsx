import { type } from 'os';
import React from 'react';


//Basic Props
type aboutSection = {
  discription: string
  lastUpdated: string
}

function About(props: aboutSection) {
  return (
    <section>
      <h2>About Me</h2>
      <p>{props.discription}</p>
      <p>{props.lastUpdated}</p>
    </section>
  );
}

export default About;