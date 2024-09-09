import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const Projects = () => {
  return (
    <motion.section
      id="home"
      className="home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Projects.</h1>
      {/* Link that opens in a new tab */}
      <a
        href="https://google.com" /* Replace with the actual URL */
        className="animated-text"
        target="_blank" /* Opens the link in a new tab */
        rel="noopener noreferrer" /* Security measure */
      >
        View My Projects
      </a>
    </motion.section>
  );
};

export default Projects;

