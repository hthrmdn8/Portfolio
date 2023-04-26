import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" rows={5}  />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;