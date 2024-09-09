// Contact.js
import React from 'react';
import '../App.css'; // Import the CSS file

const Contact = () => {
  return (
    <section id="contact" className="home-section">
      <div className="scrollable-content">
        <h1>Contact Me</h1>
        <p>
          I would love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
        </p>
        <p>
          You can contact me via email at [your-email@example.com] or connect with me on LinkedIn, Twitter, or GitHub. I look forward to connecting with you!
        </p>
        {/* Add more contact details or a contact form here */}
      </div>
    </section>
  );
};

export default Contact;
