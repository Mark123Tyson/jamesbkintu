// Navbar.js - Only one "Menu" with icon
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Research', path: '/research' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <button
        className="menu-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="menu-icon">☰</span> Menu
      </button>

      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        {sections.map((sec) => (
          <li key={sec.name}>
            <NavLink
              to={sec.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              {sec.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;