import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
      <motion.section
        id="home"
        className="home-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>About Me</h1>
        <p>
          I am a passionate web developer with a strong background in building dynamic and responsive web applications. I enjoy creating user-friendly experiences and continuously learning new technologies to improve my skill set.
        </p>
        <p>
          My journey began with a deep interest in technology, and over the years, I have developed a diverse set of skills that span both front-end and back-end development. I am committed to delivering high-quality code and bringing creative ideas to life.
        </p>
        {/* Add more personal details or background information here */}
    </motion.section>
  );
};

export default About;
