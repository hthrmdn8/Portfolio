import { type } from 'os';
import React from 'react';


//Basic Props
type AboutProps = {
  description: string
  lastUpdated: string
}

function About(props: AboutProps) {
  return (
    <section>
      <h2>About Me</h2>
      <p>{props.description}</p>
      <p>{props.lastUpdated}</p>
    </section>
  );
}

export default About;