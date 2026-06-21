import React, { useState } from 'react';
import './Analytics.css';

const DATA_WEEK = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  calories: [482, 320, 215, 620, 510, 800, 150],
  volume: [8500, 7200, 5100, 9200, 8900, 11000, 3000]
};

const DATA_MONTH = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  calories: [2800, 3100, 2900, 3400],
  volume: [52000, 56000, 54000, 62000]
};

function Analytics() {
  const [timeframe, setTimeframe] = useState('week'); // 'week' or 'month'
  const data = timeframe === 'week' ? DATA_WEEK : DATA_MONTH;

  const totalCalories = data.calories.reduce((a, b) => a + b, 0);
  const totalVolume = data.volume.reduce((a, b) => a + b, 0);
  const averageVolume = Math.round(totalVolume / data.volume.length);

  return (
    <div className="analytics-content animate-fade-in">
      {/* Header */}
      <header className="analytics-header">
        <div>
          <h2 className="dashboard-title">
            Analytics <span className="orange-gradient-text">Studio</span>
          </h2>
          <p className="dashboard-subtitle">Real-time biometric telemetry and progressive overload charts.</p>
        </div>
        <div className="timeframe-selector bg-surface-container-low">
          <button 
            className={`selector-btn ${timeframe === 'week' ? 'active-selector' : ''}`}
            onClick={() => setTimeframe('week')}
          >
            Weekly
          </button>
          <button 
            className={`selector-btn ${timeframe === 'month' ? 'active-selector' : ''}`}
            onClick={() => setTimeframe('month')}
          >
            Monthly
          </button>
        </div>
      </header>

      {/* Key Metrics Row */}
      <div className="metrics-grid">
        <div className="glass-card metric-card">
          <span className="metric-lbl">Total Calories Burned</span>
          <span className="metric-val">{totalCalories.toLocaleString()} kcal</span>
          <span className="metric-trend green">+8.4% from last period</span>
        </div>
        <div className="glass-card metric-card">
          <span className="metric-lbl">Total Lifted Volume</span>
          <span className="metric-val">{totalVolume.toLocaleString()} kg</span>
          <span className="metric-trend green">+12.1% from last period</span>
        </div>
        <div className="glass-card metric-card">
          <span className="metric-lbl">Average Workout Volume</span>
          <span className="metric-val">{averageVolume.toLocaleString()} kg</span>
          <span className="metric-trend neutral">Stable intensity</span>
        </div>
        <div className="glass-card metric-card">
          <span className="metric-lbl">Heart Rate Variability</span>
          <span className="metric-val">74 ms</span>
          <span className="metric-trend red">Optimal recovery advised</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid-row">
        {/* Calories Burned Chart */}
        <div className="glass-card chart-card">
          <h3 className="card-title mb-lg">Caloric Expenditure (Burn Rate)</h3>
          <div className="bar-chart-container">
            {data.calories.map((val, idx) => {
              const max = Math.max(...data.calories);
              const heightPercent = Math.round((val / max) * 100);
              return (
                <div key={idx} className="chart-bar-wrapper">
                  <div className="bar-tooltip">{val} kcal</div>
                  <div className="bar-column">
                    <div 
                      className="bar-fill-orange" 
                      style={{ height: `${heightPercent}%` }}
                    ></div>
                  </div>
                  <span className="bar-label">{data.labels[idx]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Volume Overload Chart */}
        <div className="glass-card chart-card">
          <h3 className="card-title mb-lg">Progressive Overload Volume</h3>
          <div className="bar-chart-container">
            {data.volume.map((val, idx) => {
              const max = Math.max(...data.volume);
              const heightPercent = Math.round((val / max) * 100);
              return (
                <div key={idx} className="chart-bar-wrapper">
                  <div className="bar-tooltip">{(val / 1000).toFixed(1)}k kg</div>
                  <div className="bar-column">
                    <div 
                      className="bar-fill-gray" 
                      style={{ height: `${heightPercent}%` }}
                    ></div>
                  </div>
                  <span className="bar-label">{data.labels[idx]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Biometrics insights panel */}
      <section className="glass-card insights-panel border-orange-left">
        <h3 className="card-title mb-sm">AI Biometric Coach Recommendation</h3>
        <p className="insights-desc">
          Alex, your progressive overload volume has peaked by <strong>+12%</strong> on leg presses and squats. Your HRV has decreased to <strong>74 ms</strong>, signalling mild central nervous system fatigue. We suggest keeping tomorrow's session strictly in the active recovery category (Yoga or light endurance work) to ensure full glycogen synthesis and prevent strain.
        </p>
        <div className="insights-actions">
          <button className="btn-primary" onClick={() => alert("Rescheduling tomorrow's session to Active Recovery.")}>
            Reschedule to Recovery
          </button>
        </div>
      </section>
    </div>
  );
}

export default Analytics;
