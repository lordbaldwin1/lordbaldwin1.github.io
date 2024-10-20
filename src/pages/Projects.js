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
        Developed a comprehensive data pipeline with Python (pandas) through the Google Cloud Platform (GCP) 
        to manage and visualize Portland bus stop data using Mapbox GL. Data from multiple sources was published
        and subscribed to over Google Cloud Pub/Sub, where it was validated, transformed, and integrated before 
        being stored in a PostgreSQL database. The entire process was automated through two Linux virtual machines, 
        ensuring seamless data handling. A backup of all data was maintained in a GCP Bucket to ensure redundancy
        and disaster recovery. <br /> <br />

        » Tools used: Python (pandas), GCP (Linux VM, Buckets), Postgres SQL, Mapbox GL, Trimet Bus Stop Data API, Google Cloud PubSub
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
        I collaborated with an Agile team at a tech startup to develop the Minimum Viable Product (MVP) for 
        two full-stack web and mobile mapping applications, focused on EV charging station data. I led backend 
        development using Java (Spring Boot) and MySQL, where I designed and implemented REST APIs to ensure 
        efficient data retrieval, validation, and integration between the frontend and backend. I streamlined data access, 
        enabling the frontend to retrieve and display EV charging station location data with improved performance and scalability.
        On the frontend, I developed and styled key components using React, React Native, and Redux. These included interactive map markers, 
        custom callouts, navigation app handoffs, and dynamic filtering/search functionality. I also set up and maintained GitHub Actions workflows 
        to automate code formatting and linting, which improved code quality and reduced time spent on code reviews. <br /> <br />

        » Tools used: React, React Native, Redux, TypeScript, Java (Spring Boot), REST APIs, Leaflet, Google Maps API, HERE Maps API, GitHub, GitHub Actions
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
        I developed a fully interactive synthesizer in Python, allowing users to generate and play sine, 
        square, sawtooth, and triangle waves. The application offers the ability to combine multiple waveforms 
        and fine-tune sound parameters using a graphical user interface (GUI) with interactive sliders. Key features 
        include an ADSR (Attack, Decay, Sustain, Release) envelope for dynamic sound shaping, a low-pass filter for 
        frequency control, and a saturation effect for adding warmth and depth to the sound. Users can also load 
        external wave files and visualize generated waveforms in real time on the GUI. Additionally, I implemented 
        functionality to play a short sequence of notes with adjustable frequency, duration, and effects, all
        processed with efficient real-time rendering.<br /> <br />

        » Tools used: Python (numpy, scipy, tkinter, matplot, sounddevice)
      </p>
    </motion.section>
  );
};

export default Projects;

