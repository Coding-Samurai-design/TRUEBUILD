import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'active' : ''}`}>
      <div className="logo">
        <Link to="/">TrueBuild</Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; 
      </div>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#map">Map</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
