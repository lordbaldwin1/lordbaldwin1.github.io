import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactTyped as Typed } from 'react-typed';
import '../App.css';
import Rain from '../components/Rain.js'

const Home = () => {
  return (
    <motion.section
      id="home"
      className="home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <Rain />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
      >
        <h1>Zachary Springer</h1>
      </motion.div>

      <Typed
        strings={['B.S. in Computer Science']}
        typeSpeed={40}
        className="typed-text"
      />

      <br /><br />

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link to="/projects" className="animated-text">
          » View My Projects
        </Link>
      </motion.div>

      <br />

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <a
          href="https://github.com/lordbaldwin1"
          className="animated-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          » GitHub
        </a>
      </motion.div>

      <br />

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <a
          href="https://www.linkedin.com/in/zachary-springer-09207424a"
          className="animated-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          » LinkedIn
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Home;
