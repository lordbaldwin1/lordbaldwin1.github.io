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
          Hello! I'm a recent graduate from Portland State University with a
          Bachelor of Science in Computer Science as of August 2024. I've lived in Portland
          my entire life and love the outdoors and working out. The gym has become a second
          home for me. Without missing more than a couple of days in a row, I've worked out at the gym
          consistently for the last 2.5 years, something I had tried to get into and failed quite
          a few times. More than anything, this has taught me that to be great at any activity or skill in life, you must
          dedicate yourself to your work and remain consistent. <br /> <br />

          I've also had a love for computers my entire life, especially video games. Video games
          are where I've met many of my closest friends and also learned a couple very important skills.
          Firstly, through competitive gaming, I've learned how to learn. By this, I mean that I've learned how to
          pick up new skills quickly and apply them to my current repertoire. I've also learned the importance of mindfulness
          in my own work and striving to always improve. This applies directly to programming where with every piece of code written,
          I try to think about my faults and areas to improve upon. If it's not clear what I'm to improve upon, then that usually
          means, for me, that it's time to study the work of others to improve my own. <br /> <br />

          Also, again as with the gym, competitive video
          games have taught me the importance of consistency. To be great
          in any competitive video game, you need to not only play consistently,
          but you need to be mindful and play to improve consistently. Many people go through work and life on autopilot, but to keep improving
          and learning, you need to keep striving to do so.
        </p>
    </motion.section>
  );
};

export default About;
