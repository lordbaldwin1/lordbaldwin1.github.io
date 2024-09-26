import React, { useEffect } from 'react';
import './App.css';
import Navigation from './components/navbar.js';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor.js';
import ImageStack from './components/ImageStack.js';

function App() {
  const location = useLocation(); // Hook to detect route changes

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
      cursor.classList.add('gauntlet-cursor'); // Reset to gauntlet on route change
      cursor.classList.remove('sword-cursor');
    }
  }, [location]); // Dependency array includes location to run on route change

  return (
    <div className="app-container">
      <CustomCursor />
      <Navigation />
      <ImageStack />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App /> {/* Now App is wrapped inside Router, so useLocation works correctly */}
    </Router>
  );
}
