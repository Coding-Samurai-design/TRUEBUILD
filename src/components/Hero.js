import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: 'url(/Images/silhouette-of-engineer-looking-at-construction-site-engineering-concept-double-exposure-generative-ai-free-photo.jpg)' }}>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>We're Building Your Future</h1>
        <p>Take a step towards the future of construction with TrueBuild</p>
        <Link to="/quote" className="cta-button">Get a Quote</Link> 
      </div>
    </section>
  );
};

export default Hero;
