import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactTyped as Typed } from 'react-typed';
import '../App.css';
import Rain from '../components/Rain.js';
import Weather from '../components/Weather.js';

const Home = () => {
  return (
    <>
      {/* Weather component outside of the main content to avoid styling conflicts */}
      <div className="fixed-weather">
        <Weather />
      </div>

      <motion.section
        id="home"
        className="home-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Rain />

        <h2>Greetings, I am</h2>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
        >
          <h1>Zachary Springer.</h1>
        </motion.div>

      <div className="typed-wrapper">
        <Typed
          strings={['B.S. in Computer Science']}
          typeSpeed={40}
          className="typed-text"
        />
      </div>

        <br /><br />

        <div className="home-paragraph">
            <p>
                I'm an aspiring software engineer with a passion for data engineering and mapping technologies. I'm currently looking for work where I can continue to learn and improve my skills. View my projects and GitHub to see what I'm working on!
            </p>
        </div>

        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link to="/projects" className="animated-text hover-effect home-link-custom">
            » View My Projects
          </Link>
        </motion.div>

        <br />
      </motion.section>
    </>
  );
};

export default Home;
