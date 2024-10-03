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
          consistently for the last 2.5 years. This is something I have tried to get into and failed many times.
          I've learned that to be great at any activity or skill in life, you must
          dedicate yourself to your work and remain consistent. <br /> <br />

          I've also had a love for computers my entire life, especially video games. Gaming introduced me to some of my closest friends and helped me develop valuable skills.
          Through competitive gaming, I've learned how to learn. This means that I've learned how to
          pick up new skills quickly and apply them to my current repertoire. I've also learned the importance of mindfulness
          in my work and striving to always improve. This applies directly to programming where with every piece of code written,
          I try to think about my faults and areas to improve. If it's not clear where I'm to improve, then
          it's time to study the work of others and learn something new. <br /> <br />

          Also, competitive video games have reinforced the importance of consistency. To be great
          in any competitive video game, you need to play consistently while also being mindful to improve consistently.
          Many people go through work and life on autopilot, but to keep improving
          and learning, you need to keep striving to do so.
        </p>
    </motion.section>
  );
};

export default About;
