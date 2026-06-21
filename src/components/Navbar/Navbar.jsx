import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          FitForge
        </NavLink>

        {/* Mobile menu button */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Links */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <NavLink 
            to="/programs" 
            className={({ isActive }) => `navbar-link ${isActive ? 'active-link' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Programs
          </NavLink>
          <NavLink 
            to="/trainers" 
            className={({ isActive }) => `navbar-link ${isActive ? 'active-link' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Trainers
          </NavLink>
          <NavLink 
            to="/schedule" 
            className={({ isActive }) => `navbar-link ${isActive ? 'active-link' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </NavLink>
          <NavLink 
            to="/plans" 
            className={({ isActive }) => `navbar-link ${isActive ? 'active-link' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Plans
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `navbar-link ${isActive ? 'active-link' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          
          <button 
            className="navbar-btn-mobile"
            onClick={() => {
              setIsOpen(false);
              navigate('/join');
            }}
          >
            Join Now
          </button>
        </div>

        <button 
          className="navbar-btn"
          onClick={() => navigate('/join')}
        >
          Join Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
