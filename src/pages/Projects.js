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
      <h1>Projects</h1>
      <a
        href="https://github.com/lordbaldwin1/Data-Visualization"
        className="animated-text hover-effect"
        target="_blank"
        rel="noopener noreferrer"
      >
        » Transit Data Pipeline and Visualization
      </a>
      <p>
        Creation of a full data pipeline over the Google Cloud Platform and visualized with HERE Maps API. Portland
        bus stop data was gathered from two sources and published over
        Google Cloud PubSub. The subscriber validated, transformed, integrated and
        then stored this data into our Postgres SQL database. A copy
        of all data was also stored in a Google Cloud Platform Bucket in case of
        emergency. <br /> <br />

        » Tools used: Python (pandas), GCP (Linux VM, Buckets, PubSub), Postgres SQL, HERE Maps API, Trimet Bus Stop Data
      </p>
      <a
        href="https://github.com/lordbaldwin1/React-Maps-Module"
        className="animated-text hover-effect"
        target="_blank"
        rel="noopener noreferrer"
      >
        » Ecobadlandz EV Charging Station Map
      </a>
      <p>
        A mapping application to search, display, filter, and navigate to EV charging stations.
        I worked with a team alongside the startup, Ecobadlandz, to aid in the development of their minimum viable product (MVP).
        We developed two full-stack web and mobile applications as proofs of concept for their AirBnB-like electric vehicle charging
        station software. <br /> <br />

        » Tools used: React, React Native, TypeScript, Java (Spring Boot), REST API, Leaflet, Google Maps API, HERE Maps API
      </p>
      <a
        href="https://github.com/lordbaldwin1/Analog-Synthesizer-Simulation"
        className="animated-text hover-effect"
        target="_blank"
        rel="noopener noreferrer"
      >
        » Analog Synthesizer Simulator
      </a>
      <p>
        A synthesizer which allows you to generate waveforms on the GUI.
        You can generate and play sine, square, sawtooth, and triangle waves.
        You can also combine these waves and play them. There are several options to
        adjust the sound of these waves through sliders on the GUI. A wave file can be loaded
        to play it through the synthesizer. You can also play a short sequence of notes.<br /> <br />

        » Tools used: Python (numpy, scipy, tkinter, matplot, sounddevice)
      </p>
    </motion.section>
  );
};

export default Projects;

