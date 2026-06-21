import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Membership Inquiry',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Connection Request Recieved! Name: ${formData.name}. Coach matchmaking initiated.`);
    setFormData({ name: '', email: '', subject: 'Membership Inquiry', message: '' });
  };

  const handleLiveChat = () => {
    alert("Starting live chat session with Forge Concierge...");
  };

  return (
    <div className="contact-page animate-fade-in">
      <main className="contact-main">
        {/* Hero Section */}
        <header className="contact-hero">
          <h1 className="contact-title">CONTACT THE FORGE</h1>
          <p className="contact-subtitle">
            Connect with elite trainers, inquire about memberships, or schedule a tour of our high-performance facility.
          </p>
        </header>

        {/* Main Content Bento Grid */}
        <div className="contact-grid">
          {/* Contact Form Card */}
          <div className="glass-card contact-form-card">
            <h2 className="card-heading">SEND A MESSAGE</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className={`form-label ${focusedField === 'name' ? 'active-label' : ''}`}>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="contact-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className={`form-label ${focusedField === 'email' ? 'active-label' : ''}`}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@fitforge.com" 
                    className="contact-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className={`form-label ${focusedField === 'subject' ? 'active-label' : ''}`}>Subject</label>
                <select 
                  className="contact-input select-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField('')}
                >
                  <option>Membership Inquiry</option>
                  <option>Personal Training</option>
                  <option>Corporate Wellness</option>
                  <option>Support & Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label className={`form-label ${focusedField === 'message' ? 'active-label' : ''}`}>Your Message</label>
                <textarea 
                  placeholder="How can we help you reach your goals?" 
                  className="contact-input textarea-input"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Forge Connection
              </button>
            </form>
          </div>

          {/* Side Info Cards */}
          <div className="contact-sidebar-cards">
            {/* Location Card */}
            <div className="glass-card info-card location-card">
              <div className="card-watermark">
                <span className="material-symbols-outlined watermark-icon">location_on</span>
              </div>
              <h3 className="sidebar-card-title">The Headquarters</h3>
              <div className="info-items">
                <div className="info-item">
                  <span className="material-symbols-outlined icon">home</span>
                  <span>1240 Performance Way, Austin, TX 78701</span>
                </div>
                <div className="info-item">
                  <span className="material-symbols-outlined icon">call</span>
                  <span>+1 (512) 555-0198</span>
                </div>
                <div className="info-item">
                  <span className="material-symbols-outlined icon">mail</span>
                  <span>elite@fitforge.com</span>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass-card info-card">
              <h3 className="sidebar-card-title">Forge Hours</h3>
              <ul className="hours-list">
                <li>
                  <span className="days">Mon - Fri</span>
                  <span className="hours font-bold">04:00 AM - 11:00 PM</span>
                </li>
                <li>
                  <span className="days">Saturday</span>
                  <span className="hours font-bold">06:00 AM - 08:00 PM</span>
                </li>
                <li>
                  <span className="days">Sunday</span>
                  <span className="hours font-bold">08:00 AM - 04:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Social Media Card */}
            <div className="glass-card info-card social-card">
              <h3 className="sidebar-card-title text-center">Join The Community</h3>
              <div className="social-links-row">
                <a href="#" className="social-circle">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a href="#" className="social-circle">
                  <span className="material-symbols-outlined">camera_outdoor</span>
                </a>
                <a href="#" className="social-circle">
                  <span className="material-symbols-outlined">video_library</span>
                </a>
                <a href="#" className="social-circle">
                  <span className="material-symbols-outlined">podcasts</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <section className="map-section">
          <h2 className="map-heading">Locate Your Progress</h2>
          <div className="map-mock-container glass-card">
            <div className="map-mock-bg">
              <img 
                className="map-mock-image" 
                alt="Map Austin Texas" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx9wUFTFzFlhYVF4SsD0BvfN33yDpQ-DbyEZngZN_bXlCzph_CCflAkeVcQ_6LqtkpjCRRFhR-ajGO4U2ZedXvHYPlMyhuIYWwtbVqbfRnmfdXY1yljecG8fEIwRwbU0YrOQ8-2JbVavi8bSOJjgSyGiWPeAHRafRr1qizMCtuQ_xDmjv3I2cj_U8eU9iNPDwGQU3YCWT6YxK7SeyOmPUi8rNgagaN90UMq-anC2LJkVb_tJzhFaWgAigRve4Docv97NKvtkqbtrxp"
              />
            </div>
            
            {/* Search overlay inside map */}
            <div className="map-search-overlay glass">
              <div className="map-search-btn">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input type="text" placeholder="Search other locations..." className="map-search-input" />
            </div>

            {/* Controls */}
            <div className="map-controls">
              <button className="control-btn glass" onClick={() => alert("Zooming In...")}>
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="control-btn glass" onClick={() => alert("Zooming Out...")}>
                <span className="material-symbols-outlined">remove</span>
              </button>
            </div>

            {/* Marker */}
            <div className="map-marker-pin">
              <div className="marker-ping animate-ping"></div>
              <div className="marker-dot">
                <span className="material-symbols-outlined">fitness_center</span>
              </div>
              <div className="marker-tooltip glass border-orange">
                <span className="tooltip-text">FITFORGE ELITE HQ</span>
              </div>
            </div>
          </div>
        </section>

        {/* Live Chat Team Card */}
        <section className="live-chat-panel glass-card">
          <div className="live-chat-overlay"></div>
          <div className="live-chat-content">
            <div className="live-chat-text">
              <h2>Need Immediate Assistance?</h2>
              <p>Our concierge team is available via live chat during business hours.</p>
            </div>
            <button className="chat-btn" onClick={handleLiveChat}>
              <span className="material-symbols-outlined">chat</span>
              START LIVE CHAT
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;
