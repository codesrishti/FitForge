import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MembershipPlans.css';

function MembershipPlans() {
  const navigate = useNavigate();

  const handleSelectPlan = (planName) => {
    alert(`Selected ${planName} Plan. Navigating to setup.`);
    navigate('/join');
  };

  return (
    <div className="plans-page animate-fade-in">
      <main className="plans-main">
        {/* Header Section */}
        <section className="plans-header">
          <h1 className="plans-title">
            Forge Your <span className="highlight">Legacy</span>
          </h1>
          <p className="plans-subtitle">
            Choose the tier that matches your ambition. No shortcuts, just pure performance-driven elite programming.
          </p>
        </section>

        {/* Pricing Grid */}
        <section className="pricing-grid">
          {/* Basic Tier */}
          <div className="glass-card pricing-card">
            <div className="pricing-card-icon">
              <span className="material-symbols-outlined">fitness_center</span>
            </div>
            <div className="pricing-card-header">
              <span className="tier-tag">Entry Level</span>
              <h2 className="tier-title">Basic</h2>
            </div>
            <div className="price-block">
              <span className="price">$49</span>
              <span className="period">/mo</span>
            </div>
            <ul className="benefits-list">
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span>Standard gym access (6am - 10pm)</span>
              </li>
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span>2 Group classes per month</span>
              </li>
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span>Mobile app tracking</span>
              </li>
              <li className="disabled">
                <span className="material-symbols-outlined cross">cancel</span>
                <span>Personal coaching</span>
              </li>
            </ul>
            <button className="pricing-btn border-btn" onClick={() => handleSelectPlan('Basic')}>
              Select Plan
            </button>
          </div>

          {/* Pro Tier (Featured) */}
          <div className="glass-card pricing-card featured-card">
            <div className="featured-badge">Most Popular</div>
            <div className="pricing-card-icon highlight-icon">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div className="pricing-card-header">
              <span className="tier-tag orange-text">Advanced Athlete</span>
              <h2 className="tier-title">Pro</h2>
            </div>
            <div className="price-block">
              <span className="price">$99</span>
              <span className="period">/mo</span>
            </div>
            <ul className="benefits-list">
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span className="bold-text">24/7 Elite facility access</span>
              </li>
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span>Unlimited group classes</span>
              </li>
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span>Weekly form analysis video</span>
              </li>
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span>Biometric nutrition plan</span>
              </li>
            </ul>
            <button className="pricing-btn fill-btn" onClick={() => handleSelectPlan('Pro')}>
              Start Your Journey
            </button>
          </div>

          {/* Elite Tier */}
          <div className="glass-card pricing-card">
            <div className="pricing-card-icon">
              <span className="material-symbols-outlined">military_tech</span>
            </div>
            <div className="pricing-card-header">
              <span className="tier-tag">Executive Performance</span>
              <h2 className="tier-title">Elite</h2>
            </div>
            <div className="price-block">
              <span className="price">$199</span>
              <span className="period">/mo</span>
            </div>
            <ul className="benefits-list">
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span>All Pro features included</span>
              </li>
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span>1-on-1 dedicated coach</span>
              </li>
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span>Cryotherapy & Sauna recovery</span>
              </li>
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <span>Quarterly blood lab review</span>
              </li>
            </ul>
            <button className="pricing-btn border-btn" onClick={() => handleSelectPlan('Elite')}>
              Select Plan
            </button>
          </div>
        </section>

        {/* Trust Section */}
        <section className="trust-section">
          <div className="glass-card trust-card large-trust">
            <div className="trust-icon-container">
              <span className="material-symbols-outlined trust-icon">verified_user</span>
            </div>
            <div>
              <h4 className="trust-title">100% Satisfaction</h4>
              <p className="trust-desc">Not seeing results? Cancel within 30 days for a full refund.</p>
            </div>
          </div>
          <div className="glass-card trust-card stat-trust">
            <span className="trust-number">15k+</span>
            <span className="trust-label">Active Members</span>
          </div>
          <div className="glass-card trust-card stat-trust">
            <span className="trust-number">24/7</span>
            <span className="trust-label">Global Access</span>
          </div>
        </section>

        {/* Action Call Section */}
        <section className="plans-cta">
          <h2 className="cta-title">Ready to <span className="highlight">Forge</span> Ahead?</h2>
          <div className="cta-buttons">
            <button className="btn-primary cta-btn" onClick={() => navigate('/join')}>
              Start 7-Day Free Trial
            </button>
            <button className="btn-secondary cta-btn" onClick={() => navigate('/contact')}>
              Schedule a Tour
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MembershipPlans;
