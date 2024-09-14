// CustomCursor.js
import React, { useEffect } from 'react';
import './CustomCursor.css'; // Import the custom CSS

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    // Add mouse move event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="custom-cursor" />;
};

export default CustomCursor;
