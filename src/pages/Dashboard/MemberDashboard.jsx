import React, { useState, useEffect } from 'react';
import './MemberDashboard.css';

function MemberDashboard() {
  const [greeting, setGreeting] = useState('');
  const [xp, setXp] = useState(1320);
  const [proteins, setProteins] = useState(142);
  const [carbs, setCarbs] = useState(185);
  const [fats, setFats] = useState(62);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState('');
  const [isSessionActive, setIsSessionActive] = useState(false);

  // Dynamic Greeting based on hours
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Morning grind starts now, Alex. Let's get it.");
    } else if (hour > 18) {
      setGreeting("Evening discipline defines champions, Alex.");
    } else {
      setGreeting("Welcome back, Alex. Your discipline is paying off.");
    }
  }, []);

  const handleStartSession = () => {
    setIsSessionActive(!isSessionActive);
    if (!isSessionActive) {
      alert("Session Initiated. Focus on the grind.");
      setXp(prev => prev + 10);
    } else {
      alert("Session Completed. XP Logged!");
    }
  };

  const handleChartHover = (point) => {
    if (point === 1) {
      setTooltipContent("Bench Press: 245 lbs | +12% from last week");
    } else {
      setTooltipContent("Deadlift: 485 lbs | Peak velocity reached");
    }
    setShowTooltip(true);
  };

  // Calculate calories dynamically: 4 kcal per protein/carb, 9 kcal per fat
  const kcal = (proteins * 4) + (carbs * 4) + (fats * 9);
  const targetKcal = 2400;
  const kcalPercent = Math.min(Math.round((kcal / targetKcal) * 100), 100);

  return (
    <div className="dashboard-content animate-fade-in">
      {/* Header */}
      <header className="dashboard-header-row">
        <div>
          <h2 className="dashboard-title">
            Performance <span className="orange-gradient-text">Matrix</span>
          </h2>
          <p className="dashboard-subtitle">{greeting}</p>
        </div>
        <button 
          className={`start-session-btn ${isSessionActive ? 'active-session-btn' : ''}`}
          onClick={handleStartSession}
        >
          {isSessionActive ? 'COMPLETE SESSION' : 'START SESSION'}
        </button>
      </header>

      {/* Grid: Chart & Status */}
      <div className="grid-row-1">
        {/* Strength Velocity Chart */}
        <div className="glass-card chart-card">
          <div className="card-header">
            <h3 className="card-title">Strength Velocity</h3>
            <div className="chart-tabs">
              <button className="chart-tab active">Weight</button>
              <button className="chart-tab" onClick={() => alert('Max Reps history loaded.')}>Max Reps</button>
            </div>
          </div>
          
          <div className="chart-container" onMouseLeave={() => setShowTooltip(false)}>
            <svg viewBox="0 0 800 240" className="chart-svg">
              {/* Grid Lines */}
              <line x1="0" y1="40" x2="800" y2="40" stroke="#1B1B1B" strokeWidth="1" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="#1B1B1B" strokeWidth="1" />
              <line x1="0" y1="160" x2="800" y2="160" stroke="#1B1B1B" strokeWidth="1" />
              
              {/* Area Fill */}
              <path d="M0,200 Q200,180 400,120 T800,60 L800,240 L0,240 Z" fill="url(#orangeGrad)" opacity="0.15"></path>
              
              {/* Line */}
              <path d="M0,200 Q200,180 400,120 T800,60" fill="none" stroke="#FF6B00" strokeWidth="4" strokeLinecap="round" className="chart-line-glow"></path>
              
              {/* Interactive Points */}
              <circle cx="400" cy="120" r="8" fill="#FF6B00" className="chart-dot" onMouseEnter={() => handleChartHover(1)} />
              <circle cx="800" cy="60" r="8" fill="#FF6B00" className="chart-dot" onMouseEnter={() => handleChartHover(2)} />
              
              <defs>
                <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B00" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Tooltip */}
            {showTooltip && (
              <div className="chart-tooltip">
                <p>{tooltipContent}</p>
              </div>
            )}
          </div>
        </div>

        {/* Membership Status Card */}
        <div className="glass-card status-card">
          <div className="status-bg"></div>
          <div className="status-overlay"></div>
          <div className="status-content">
            <div>
              <span className="status-badge">Elite Status</span>
              <h3 className="status-title">FitForge Founders Club</h3>
            </div>
            <div className="status-footer">
              <div className="renewal-row">
                <span className="renewal-label">Renewal Date</span>
                <span className="renewal-date">Dec 12, 2026</span>
              </div>
              <button className="manage-btn" onClick={() => alert('Opening billing configuration details...')}>
                Manage Membership
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Nutrition & Activities */}
      <div className="grid-row-2">
        {/* Nutrition Circle */}
        <div className="glass-card fuel-card">
          <div className="card-header">
            <h3 className="card-title">Fuel Core</h3>
            <span className="material-symbols-outlined orange-icon">restaurant</span>
          </div>

          <div className="radial-wrapper">
            <svg viewBox="0 0 100 100" className="radial-svg">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1B1B1B" strokeWidth="8"></circle>
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#FF6B00" 
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * kcalPercent) / 100}
                strokeLinecap="round"
                className="radial-fill"
              ></circle>
            </svg>
            <div className="radial-text">
              <span className="kcal-value">{kcal}</span>
              <span className="kcal-target">/ {targetKcal} kcal</span>
            </div>
          </div>

          {/* Sliders for interactive change */}
          <div className="macro-sliders">
            <div className="macro-slider-group">
              <div className="macro-label-row">
                <span>Protein</span>
                <span className="font-bold">{proteins}g</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="250" 
                value={proteins} 
                onChange={(e) => setProteins(Number(e.target.value))} 
                className="macro-range"
              />
            </div>
            <div className="macro-slider-group">
              <div className="macro-label-row">
                <span>Carbs</span>
                <span className="font-bold">{carbs}g</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="350" 
                value={carbs} 
                onChange={(e) => setCarbs(Number(e.target.value))} 
                className="macro-range"
              />
            </div>
            <div className="macro-slider-group">
              <div className="macro-label-row">
                <span>Fats</span>
                <span className="font-bold">{fats}g</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="120" 
                value={fats} 
                onChange={(e) => setFats(Number(e.target.value))} 
                className="macro-range"
              />
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="glass-card feed-card">
          <div className="card-header">
            <h3 className="card-title">Activity Feed</h3>
            <button className="history-link" onClick={() => alert('Loading full workout logs...')}>View History</button>
          </div>
          <div className="feed-list">
            <div className="feed-item">
              <div className="feed-icon-box orange-bg-10">
                <span className="material-symbols-outlined orange-text">fitness_center</span>
              </div>
              <div className="feed-details">
                <h4 className="feed-name">Power Hypertrophy Upper</h4>
                <p className="feed-stats">6 exercises • 1h 15m • 482 kcal</p>
              </div>
              <div className="feed-time">
                <p className="time-lbl">Today</p>
                <p className="xp-lbl orange-text">+15 XP</p>
              </div>
            </div>

            <div className="feed-item">
              <div className="feed-icon-box">
                <span className="material-symbols-outlined">directions_run</span>
              </div>
              <div className="feed-details">
                <h4 className="feed-name">HIIT Sprint Intervals</h4>
                <p className="feed-stats">20 mins • 320 kcal</p>
              </div>
              <div className="feed-time">
                <p className="time-lbl">Yesterday</p>
                <p className="xp-lbl">+10 XP</p>
              </div>
            </div>

            <div className="feed-item">
              <div className="feed-icon-box">
                <span className="material-symbols-outlined">pool</span>
              </div>
              <div className="feed-details">
                <h4 className="feed-name">Active Recovery Swim</h4>
                <p className="feed-stats">45 mins • 215 kcal</p>
              </div>
              <div className="feed-time">
                <p className="time-lbl">2 days ago</p>
                <p className="xp-lbl">+12 XP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goal Progression Section */}
      <section className="goals-section">
        <h3 className="card-title mb-md">Current Goal Progression</h3>
        <div className="goals-grid">
          <div className="goal-card bg-surface-container-low">
            <div className="goal-header">
              <span>Body Fat Target (12%)</span>
              <span className="goal-percent">85%</span>
            </div>
            <div className="goal-bar-bg">
              <div className="goal-bar-fill w-85">
                <div className="goal-bar-glow"></div>
              </div>
            </div>
          </div>

          <div className="goal-card bg-surface-container-low">
            <div className="goal-header">
              <span>Deadlift 500lb Club</span>
              <span className="goal-percent">92%</span>
            </div>
            <div className="goal-bar-bg">
              <div className="goal-bar-fill w-92"></div>
            </div>
          </div>

          <div className="goal-card bg-surface-container-low">
            <div className="goal-header">
              <span>Mobility Score</span>
              <span className="goal-percent">64%</span>
            </div>
            <div className="goal-bar-bg">
              <div className="goal-bar-fill w-64"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MemberDashboard;
