import React, { useState, useEffect } from 'react';
import './Workouts.css';

const DAILY_EXERCISES = [
  {
    id: 1,
    title: 'Barbell Back Squat',
    target: 'Quads & Glutes',
    type: 'Primary Lift',
    sets: 5,
    reps: 5,
    rest: 180,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlo7_PgGoD0Y1a5CzQ6Ox_EbbGPzoT24mG2VlJy48hzN6Y31P7srQXrG3g2bcPO1hC878_rVPsZ4hToHNfIGRZsm2z0x-EUvmGnCCuN6FO4loldPnOcmeqWiYGTY-X4BOAtkvO6xX-sMWxRQsq7naPx1oot5cH55NdXgJq6lYbtVoHsG0yPKzAYbWsBy5fO0i5QtUPNOgJc-ke15ne3giiyx_pjia5YrPxC6Qz2Ff1-ppjRkUPgT4EyGi2fSiUWdjDlmL0CbymFd6j'
  },
  {
    id: 2,
    title: 'Romanian Deadlift',
    target: 'Hamstrings & Glutes',
    type: 'Accessory Lift',
    sets: 4,
    reps: 8,
    rest: 90,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM0sAT6IE5lv3Tq3nq2dBf2MJ6m4VJiieQs_LgMAljBRbGSEf5YhTQC7LbCFQZYTlBwXsPyBBf0-_MoXSdflpmwHCCWnKcwHAoaG0rqS-MtrEFUFrpJGFLLk4kcDGy16JZ7RyUOPCvySikjD9oAEql6xsAU_q4VPxhmiEDRJFDLGKv4p-0uUy7D5z8DVoSRT_EFQEqZ6RyvnOf6KiSAHxaWDQyj4LnjEMZDIHPBTjtbu5gqFpSYjCauXsPYvKxdtaLWvi7e-kKpMVj'
  },
  {
    id: 3,
    title: 'Leg Extensions',
    target: 'Quadriceps',
    type: 'Isolation Lift',
    sets: 3,
    reps: 12,
    rest: 60,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7nlgv9y12HBcypa3lv9UMuCI-BlGpr2yjLjWRJi3rMfJX7Q08QA5vcUI4j_rCcomL1A-ex_275OHcGdCWcFMRPwrt0vlADjnGV3GxdtOsZLJuDMZTaOXPsC08_EWSH0G6YzhEL73ze7nh_01DNbbYoh1njERQ6egqyEPDCBbmoXGtqEKAo3tTNFi9idTKbxvqeru7UDo4PCVLmb1_vTXfG2D3cIKtWIJWJmeacrqMbzquIenXyAzDgrZ1BHuovD5l5bplnfrlUMLX'
  },
  {
    id: 4,
    title: 'Walking Lunges',
    target: 'Unilateral Stability',
    type: 'Accessory Lift',
    sets: 3,
    reps: '20m',
    rest: 60,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY4J9E4IW1Z909Yma0pIZdCSyk2jQ250aT775YBaawTv3PAEN7ailTubyjee34GtAfvukZxgrZwy5qmO9k5gYn5XcmDsV-aH241ZV4VDWlsQLt8oVirGOOWql4DzbdhJRB0pPooWAbDrelHDjwVbm_4XdNdTLGajD1mi4L_4GfEGZdf4sbOYjSLenpq-mdWBG50W0aCq3c2kI_PVC43xBIUDeOcORjXKQ5zeRkU9YPjWFBgkCi5ZyDgliDEg8vL6Qfv2FxwgPuTCk-'
  }
];

const PERSONAL_BESTS = [
  { lift: 'Squat', value: '185 kg', date: 'Achieved 2 weeks ago', icon: 'fitness_center' },
  { lift: 'Deadlift', value: '210 kg', date: 'Achieved yesterday', icon: 'speed' },
  { lift: 'Bench Press', value: '120 kg', date: 'Achieved 1 month ago', icon: 'fitness_center' },
  { lift: 'OHP', value: '85 kg', date: 'Achieved 3 weeks ago', icon: 'bolt' }
];

function Workouts() {
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [totalSeconds, setTotalSeconds] = useState(60);

  const startWorkout = () => {
    setWorkoutStarted(!workoutStarted);
    alert(workoutStarted ? "Workout finished! Logs saved." : "Workout session started. Stay focused!");
  };

  const triggerTimer = (seconds) => {
    setTimeLeft(seconds);
    setTotalSeconds(seconds);
    setTimerActive(true);
  };

  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      alert("Rest complete! Prepare for next set.");
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  // Dash calculations for svg circular countdown
  const dashTotal = 125.6;
  const dashOffset = timerActive ? dashTotal - (timeLeft / totalSeconds) * dashTotal : dashTotal;

  return (
    <div className="workouts-content animate-fade-in">
      {/* Header */}
      <header className="workouts-header">
        <div>
          <h2 className="dashboard-title">Today's Session</h2>
          <p className="dashboard-subtitle">Hypertrophy Block A • Week 4 of 12</p>
        </div>
        <button 
          className={`start-workout-btn ${workoutStarted ? 'active-workout' : ''}`}
          onClick={startWorkout}
        >
          <span className="material-symbols-outlined">
            {workoutStarted ? 'check_circle' : 'play_arrow'}
          </span>
          {workoutStarted ? 'Finish Workout' : 'Start Workout'}
        </button>
      </header>

      {/* Active Training Plan */}
      <section className="glass-card active-plan-card">
        <div className="plan-header-row">
          <h3 className="plan-title-tag">Active Training Plan: Power-Build Elite</h3>
          <span className="plan-percent">68% Complete</span>
        </div>
        <div className="plan-progress-bar">
          <div className="plan-progress-fill w-68 progress-pulse"></div>
        </div>
        <div className="plan-stats-grid">
          <div className="plan-stat">
            <span className="stat-label">Days Streak</span>
            <span className="stat-value">14</span>
          </div>
          <div className="plan-stat">
            <span className="stat-label">Total Volume</span>
            <span className="stat-value">42.5k kg</span>
          </div>
          <div className="plan-stat">
            <span className="stat-label">Next Deload</span>
            <span className="stat-value">9 Days</span>
          </div>
          <div className="plan-stat">
            <span className="stat-label">Coach Notes</span>
            <span className="stat-value font-medium">Focus on eccentric control</span>
          </div>
        </div>
      </section>

      {/* Daily Exercises Grid */}
      <section className="exercises-section">
        <h3 className="dashboard-title mb-md">Daily Exercises</h3>
        <div className="exercises-grid">
          {/* Barbell Back Squat (Featured) */}
          <div className="exercise-featured-card glass-card">
            <div className="featured-img-wrapper">
              <div className="img-overlay"></div>
              <img 
                className="featured-lift-img" 
                alt="Barbell Back Squat" 
                src={DAILY_EXERCISES[0].img}
              />
              <div className="featured-lift-content">
                <span className="tag-orange">{DAILY_EXERCISES[0].type}</span>
                <h4 className="lift-title">{DAILY_EXERCISES[0].title}</h4>
              </div>
            </div>
            <div className="featured-lift-details">
              <div className="detail-item">
                <span className="lbl">Sets</span>
                <span className="val">{DAILY_EXERCISES[0].sets}</span>
              </div>
              <div className="detail-item">
                <span className="lbl">Reps</span>
                <span className="val">{DAILY_EXERCISES[0].reps}</span>
              </div>
              <div className="detail-item" onClick={() => triggerTimer(DAILY_EXERCISES[0].rest)}>
                <span className="lbl hover-orange">Rest</span>
                <span className="val color-orange cursor-pointer">{DAILY_EXERCISES[0].rest}s</span>
              </div>
            </div>
          </div>

          {/* Other Exercises */}
          {DAILY_EXERCISES.slice(1).map((ex) => (
            <div key={ex.id} className="exercise-card glass-card">
              <div className="exercise-thumb-wrapper">
                <img className="exercise-thumb" alt={ex.title} src={ex.img} />
              </div>
              <div className="exercise-info">
                <h4 className="exercise-name">{ex.title}</h4>
                <p className="exercise-target">Target: {ex.target}</p>
                <div className="exercise-footer">
                  <div className="sets-reps">
                    <span className="val">{ex.sets} x {ex.reps}</span>
                    <span className="lbl cursor-pointer" onClick={() => triggerTimer(ex.rest)}>
                      {ex.rest}s Rest
                    </span>
                  </div>
                  <button className="info-btn" onClick={() => alert(`Details for ${ex.title}: Focus on form.`)}>
                    <span className="material-symbols-outlined">info</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Bests */}
      <section className="bests-section">
        <h3 className="dashboard-title mb-md">Personal Bests</h3>
        <div className="bests-grid">
          {PERSONAL_BESTS.map((pb, idx) => (
            <div key={idx} className="best-card glass-card border-orange-left">
              <div className="best-card-icon">
                <span className="material-symbols-outlined">{pb.icon}</span>
              </div>
              <span className="best-lbl">{pb.lift}</span>
              <span className="best-val">{pb.value}</span>
              <span className="best-date">{pb.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rest Timer Floating Toast */}
      {timerActive && (
        <div className="rest-timer-overlay glass-card">
          <div className="timer-toast-content">
            <div className="timer-radial-block">
              <svg viewBox="0 0 48 48" className="timer-radial-svg">
                <circle cx="24" cy="24" r="20" fill="none" stroke="#1b1b1b" strokeWidth="4" />
                <circle 
                  cx="24" 
                  cy="24" 
                  r="20" 
                  fill="none" 
                  stroke="#FF6B00" 
                  strokeWidth="4" 
                  strokeDasharray="125.6"
                  strokeDashoffset={dashOffset}
                  className="timer-fill"
                />
              </svg>
              <span className="timer-seconds-text">{timeLeft}</span>
            </div>
            <div className="timer-toast-text">
              <p className="timer-toast-title">Rest Timer Active</p>
              <p className="timer-toast-subtitle">Stay focused, recover well.</p>
            </div>
            <button className="timer-close-btn" onClick={() => setTimerActive(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workouts;
