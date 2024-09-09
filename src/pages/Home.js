// Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <motion.section
      id="home"
      className="home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome.</h1>
      <p>
        My name is Zachary Springer, I'm a recent graduate with a Bachelor of Science in Computer Science from Portland State University. From a young age, I've been interested in computers, exploring everything from programming and modding video games to administrating servers.<br /> <br />

        I'm most experienced in full-stack web development through working with the startup company, Ecobadlandz, for my Software Engineering Capstone Project. My team built two full-stack web and mobile applications to aid them in the development of their minimum viable product (MVP). I'm actively looking for opportunities in full-stack web development where I can continue to grow and learn new skills.<br /> <br />

        Thank you for visiting, and feel free to explore my projects!
      </p>
      {/* Animated text link */}
      <Link to="/projects" className="animated-text">
        View My Projects
      </Link>
    </motion.section>
  );
};

export default Home;
