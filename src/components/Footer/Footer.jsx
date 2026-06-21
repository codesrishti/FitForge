import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed! Prepare for the grind.");
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col brand-col">
          <div className="footer-brand">FitForge</div>
          <p className="footer-description">
            The world's leading community for high-performance training and elite athletic growth.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="social-link">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="social-link">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Programs</h4>
          <ul className="footer-links">
            <li><Link to="/programs">Forge-HIIT</Link></li>
            <li><Link to="/programs">Iron Mastery</Link></li>
            <li><Link to="/programs">Zen Yoga</Link></li>
            <li><Link to="/programs">Hybrid Athlete</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><Link to="/trainers">Our Trainers</Link></li>
            <li><Link to="/plans">Success Stories</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col newsletter-col">
          <h4 className="footer-title">Newsletter</h4>
          <form className="footer-newsletter" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input" 
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 FitForge Elite. All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link to="/join">Protocol Login</Link>
          <span className="separator">•</span>
          <Link to="/contact">Support Center</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
