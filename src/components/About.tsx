// Define the type of the props passed to the About component
type AboutProps = {
  description: string
  lastUpdated: string
}

// Define the About component which receives props of type AboutProps
function About(props: AboutProps) {

  // Render the following JSX code:
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>{props.description}</p>
      <p>{props.lastUpdated}</p>
    </section>
  );
}
// Export the About component as the default export
export default About;