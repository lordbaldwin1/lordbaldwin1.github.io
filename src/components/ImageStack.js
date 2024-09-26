import React from 'react';
import image1 from '../assets/pixel-github-medium.png';
import image2 from '../assets/pixel-lin-96x96.png';
import './ImageStack.css';

const ImageStack = () => {
  return (
    <div className="image-stack d-flex flex-column">
      <a
        href="https://www.linkedin.com/in/zachary-springer-09207424a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover-effect"
      >
        <img src={image2} alt="2" className="img-fluid image2-custom" />
      </a>
      <a
        href="https://github.com/lordbaldwin1"
        target="_blank"
        rel="noopener noreferrer"
        className="hover-effect"
      >
        <img src={image1} alt="1" className="img-fluid" />
      </a>
    </div>
  );
};

export default ImageStack;