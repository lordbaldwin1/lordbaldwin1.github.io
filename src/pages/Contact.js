// Contact.js
import React from 'react';
import '../App.css';
import ContactForm from '../components/ContactForm.js';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
      <motion.section
        id="home"
        className="home-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact Me</h1>
        <p>
          I would love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
        </p>
        <ContactForm />
    </motion.section>
  );
};

export default Contact;
