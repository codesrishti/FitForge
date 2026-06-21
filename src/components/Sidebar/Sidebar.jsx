import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Are you sure you want to exit the Forge workspace?")) {
      navigate('/');
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Link to="/" className="sidebar-logo">
          FitForge<span className="logo-pro"> Pro</span>
        </Link>
        <p className="sidebar-subtitle">Elite Member Dashboard</p>
      </div>

      <nav className="sidebar-nav">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="sidebar-link-text">Overview</span>
        </NavLink>

        <NavLink 
          to="/workouts" 
          className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}
        >
          <span className="material-symbols-outlined">fitness_center</span>
          <span className="sidebar-link-text">Workouts</span>
        </NavLink>

        <NavLink 
          to="/nutrition" 
          className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}
        >
          <span className="material-symbols-outlined">restaurant</span>
          <span className="sidebar-link-text">Nutrition</span>
        </NavLink>

        <NavLink 
          to="/analytics" 
          className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}
        >
          <span className="material-symbols-outlined">insights</span>
          <span className="sidebar-link-text">Analytics</span>
        </NavLink>

        <NavLink 
          to="/settings" 
          className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="sidebar-link-text">Settings</span>
        </NavLink>

        <button onClick={handleLogout} className="sidebar-link logout-btn">
          <span className="material-symbols-outlined">logout</span>
          <span className="sidebar-link-text">Log Out</span>
        </button>
      </nav>

      <div className="sidebar-user">
        <div className="user-avatar-container">
          <img 
            className="user-avatar" 
            alt="Alex Rivers Avatar" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUfEJPmuIvbDmvfnHlSAXb-I8HL2uotP2IoMVp6WWgsFbIMW3aM7Mw9HK_Rw169kXOmg6U0-Ww0zfqZG2T7ewrKGtIwZPHDCH6Dk7io5Zid1gST7AoL-QCeYtV9FtocbJGEodyxmqz9NjEoP_nCi104fmY7f2aq5h3kwng--5RUj3CSBShApxoIec2xYw1OJkEAakasPCkt7-MDZZLWveU37Bgd97z-flxNfBZnuxPA62ecAELnzgbHuRyiJgC57dVqKi8vL-fXUBw"
          />
        </div>
        <div className="user-info">
          <p className="user-name">Alex Rivers</p>
          <p className="user-tier">Elite Tier</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
