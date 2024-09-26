import React, { useEffect } from 'react';
import './CustomCursor.css'; // Import the custom CSS

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    // Function to handle mouse movement
    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    // Handle mouse down (click) event to rotate the cursor
    const handleMouseDown = () => {
      if (cursor) {
        cursor.classList.add('rotated'); // Rotate the cursor on click
      }
    };

    // Handle mouse up (release click) to reset the cursor rotation
    const handleMouseUp = () => {
      if (cursor) {
        cursor.classList.remove('rotated'); // Reset rotation after click
      }
    };

    // Handle hover over an element with the hover-effect class (fade in sword cursor)
    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.opacity = 0; // Fade out
        setTimeout(() => {
          cursor.classList.add('sword-cursor');
          cursor.classList.remove('gauntlet-cursor');
          cursor.style.opacity = 1; // Fade in to sword cursor
        }, 100); // Adjust duration as needed
      }
    };

    // Handle leaving an element with the hover-effect class (fade back to gauntlet cursor)
    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.opacity = 0; // Fade out
        setTimeout(() => {
          cursor.classList.add('gauntlet-cursor');
          cursor.classList.remove('sword-cursor');
          cursor.style.opacity = 1; // Fade in to gauntlet cursor
        }, 100); // Adjust duration as needed
      }
    };

    // Add event listeners for mouse move, mouse down, and mouse up
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Function to apply hover effect listeners on .hover-effect elements
    const applyHoverEffectListeners = () => {
      const hoverElements = document.querySelectorAll('.hover-effect');
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial application of hover listeners
    applyHoverEffectListeners();

    // Mutation observer to reapply listeners on DOM changes
    const observer = new MutationObserver(() => {
      applyHoverEffectListeners();
    });

    // Observe changes in the body or its children (e.g., for navigation changes)
    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up event listeners and observer on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect(); // Disconnect mutation observer
    };
  }, []); // Empty dependency array to run this effect only on mount and unmount

  return <div id="custom-cursor" className="gauntlet-cursor" />;
};

export default CustomCursor;
