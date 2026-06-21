import React, { useState } from 'react';
import './ClassSchedule.css';

const TIME_SLOTS = ['06:00', '09:00', '17:00'];
const DAYS = [
  { key: 'mon', label: 'MON', date: '12' },
  { key: 'tue', label: 'TUE', date: '13', highlight: true },
  { key: 'wed', label: 'WED', date: '14' },
  { key: 'thu', label: 'THU', date: '15' },
  { key: 'fri', label: 'FRI', date: '16' },
  { key: 'sat', label: 'SAT', date: '17', dim: true },
  { key: 'sun', label: 'SUN', date: '18', dim: true }
];

const SCHEDULE_DATA = {
  '06:00': {
    mon: { title: 'Morning Blaze', type: 'hiit', coach: 'Coach Marcus' },
    tue: { title: 'Power Hour', type: 'strength', coach: 'Coach Sarah', sideBorder: true },
    thu: { title: 'Zen Dawn', type: 'yoga', coach: 'Elena R.' }
  },
  '09:00': {
    tue: { title: 'Metabolic Burn', type: 'hiit', coach: 'Coach Dave' },
    wed: { title: 'Foundations', type: 'strength', coach: 'Coach Sarah' },
    fri: { title: 'Cardio Core', type: 'hiit', coach: 'Coach Marcus' },
    sat: { title: 'Elite Lifting', type: 'strength', coach: 'Big Mike' }
  },
  '17:00': {
    mon: { title: 'Deadlift Day', type: 'strength', coach: 'Coach Sarah' },
    tue: { title: 'Vinyasa Flow', type: 'yoga', coach: 'Elena R.' },
    thu: { title: 'Rush Hour', type: 'hiit', coach: 'Coach Dave' }
  }
};

function ClassSchedule() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleJoinClass = (className) => {
    alert(`Enrolling you in ${className}. Spot secured!`);
  };

  const handleBookMasterclass = () => {
    alert("Booking technique Masterclass for Friday at 18:00.");
  };

  return (
    <div className="schedule-page animate-fade-in">
      <main className="schedule-main">
        {/* Header & Category Toggles */}
        <header className="schedule-header">
          <div className="header-text">
            <h1 className="schedule-title">Elite Schedule</h1>
            <p className="schedule-subtitle">
              Precision-engineered group sessions designed to push your limits. Filter by discipline to find your next breakthrough.
            </p>
          </div>
          <div className="category-tabs bg-surface-container-low">
            {['all', 'strength', 'hiit', 'yoga'].map((cat) => (
              <button
                key={cat}
                className={`category-tab-btn ${activeCategory === cat ? 'active-cat-tab' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </header>

        {/* Weekly Calendar Grid */}
        <div className="glass-card calendar-container">
          {/* Day Headers */}
          <div className="schedule-grid calendar-headers bg-surface-container-high">
            <div className="header-cell time-header">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            {DAYS.map((day) => (
              <div 
                key={day.key} 
                className={`header-cell day-header ${day.highlight ? 'highlight-day' : ''}`}
              >
                <p className={`day-name ${day.highlight ? 'orange-text' : ''}`}>{day.label}</p>
                <p className={`day-date ${day.highlight ? 'orange-text' : ''} ${day.dim ? 'dim-text' : ''}`}>{day.date}</p>
              </div>
            ))}
          </div>

          {/* Time Slots & Content */}
          <div className="calendar-body">
            {TIME_SLOTS.map((time) => (
              <div key={time} className="schedule-grid time-row">
                <div className="time-cell">{time}</div>
                {DAYS.map((day) => {
                  const classItem = SCHEDULE_DATA[time]?.[day.key];
                  const isVisible = classItem && (activeCategory === 'all' || classItem.type === activeCategory);

                  return (
                    <div 
                      key={day.key} 
                      className={`calendar-cell ${day.highlight ? 'highlight-cell' : ''}`}
                    >
                      {classItem && (
                        <div 
                          className={`class-card glass-card ${classItem.sideBorder ? 'accent-border-left' : ''}`}
                          style={{ 
                            opacity: isVisible ? 1 : 0.15,
                            pointerEvents: isVisible ? 'auto' : 'none',
                            transform: isVisible ? 'none' : 'scale(0.95)'
                          }}
                        >
                          <div>
                            <span className={`class-tag tag-${classItem.type}`}>{classItem.type}</span>
                            <h3 className="class-title">{classItem.title}</h3>
                            <p className="class-coach">{classItem.coach}</p>
                          </div>
                          {isVisible && (
                            <button 
                              className="join-class-btn"
                              onClick={() => handleJoinClass(classItem.title)}
                            >
                              JOIN CLASS 
                              <span className="material-symbols-outlined arrow">arrow_forward</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Section Asymmetric */}
        <section className="featured-schedule-section">
          <div className="featured-coach-visual">
            <div className="featured-img-overlay"></div>
            <img 
              className="featured-coach-img" 
              alt="Coach Marcus technique class" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALF_gPYFpHtaqgMDVw2n9NKRpJA6opd2C8I_N19yPBysiLRrfF0r7p0N5GHB9GDQm3nliSfm6GhKYfjp_xGbSnztqRETSm0gOBNIuaPPAPNdi6Ky0n5vMPKvEpUICIMRlshDwSgH_h2JFMzvZEorlMJwvQ5DPOp-A76rHOAkwc9jpMknT4P8kMEyU2l0L39O2M7MzHdsTCPbd31ppgi06pcNYZwnhs-BRza-vdOIv5u3Vka1M8kyi_YSpD3gnNTdU0Ye9hkt2OcRkJ"
            />
            <div className="featured-coach-info">
              <span className="coach-tag">Featured Coach</span>
              <h2 className="coach-name">Marcus 'The Beast'</h2>
            </div>
          </div>

          <div className="featured-details">
            <div className="glass-card masterclass-details border-orange-left">
              <h3 className="masterclass-title">Masterclass Session</h3>
              <p className="masterclass-desc">
                This Friday at 18:00, join Marcus for a specialized workshop on Olympic Lifting technique. Strictly limited to 10 participants for maximum precision and guidance.
              </p>
              <div className="masterclass-meta">
                <div className="meta-item">
                  <span className="material-symbols-outlined">event_available</span>
                  <span>Fri, 18:00</span>
                </div>
                <div className="meta-item">
                  <span className="material-symbols-outlined">group</span>
                  <span>Limited Slots (10 max)</span>
                </div>
                <button className="book-masterclass-btn" onClick={handleBookMasterclass}>
                  Book Now
                </button>
              </div>
            </div>

            <div className="features-subgrid">
              <div className="feature-small-card bg-surface-container-low">
                <span className="material-symbols-outlined orange-icon">bolt</span>
                <h4 className="feature-small-title">High Intensity</h4>
                <p className="feature-small-desc">Burn up to 800 calories in our metabolic burn sessions.</p>
              </div>
              <div className="feature-small-card bg-surface-container-low">
                <span className="material-symbols-outlined orange-icon">fitness_center</span>
                <h4 className="feature-small-title">Elite Gear</h4>
                <p className="feature-small-desc">Access to competition-grade Rogue lifting equipment.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ClassSchedule;
