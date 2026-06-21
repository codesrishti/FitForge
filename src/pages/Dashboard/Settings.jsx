import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [profile, setProfile] = useState({
    name: 'Alex Rivera',
    email: 'alex.rivera@fitforge.com',
    bio: 'Elite athlete focused on high-intensity strength training and nutritional optimization. Crushing goals since 2021.'
  });

  const [integrations, setIntegrations] = useState({
    appleHealth: true,
    strava: true,
    myFitnessPal: false
  });

  const [notifications, setNotifications] = useState({
    reminders: true,
    alerts: true
  });

  const handleSave = () => {
    alert("All account settings saved successfully!");
  };

  const handleDiscard = () => {
    setProfile({
      name: 'Alex Rivera',
      email: 'alex.rivera@fitforge.com',
      bio: 'Elite athlete focused on high-intensity strength training and nutritional optimization. Crushing goals since 2021.'
    });
    alert("Changes discarded.");
  };

  const toggleIntegration = (key) => {
    setIntegrations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleNotification = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="settings-content animate-fade-in">
      {/* Header */}
      <header className="settings-header">
        <h1 className="dashboard-title">Account Settings</h1>
        <p className="dashboard-subtitle">Manage your profile, preferences, and elite membership status.</p>
      </header>

      {/* Grid Bento Layout */}
      <div className="settings-bento-grid">
        {/* Profile Card */}
        <section className="glass-card profile-details-card">
          <div className="card-heading-row">
            <span className="material-symbols-outlined orange-text">person</span>
            <h2 className="card-title">Profile Details</h2>
          </div>
          
          <div className="profile-photo-row">
            <div className="avatar-edit-wrapper">
              <img 
                alt="Profile" 
                className="edit-avatar-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD39-qAgWdobDg-FKdveQ_-UC5q9-Mbj-28w1AsxjFo7lL_LBUGtnTKzYcRLGhmmii8ubgTpwFJZsp6GrX_QLyoHgmI40_VlmLb4F5tHDMv6LXUIUUu1-Z1877TWo2Zs7JnYVUfqj_zpRMmDF_znuL-e7wWky696b5LSsSx0H5dlk4uh5Fkeqv96UBLkmaE6_g4V616q0tdFzL0ioCEQBF95gu5exDqU0zF_hc50qAGIYpKkWD70w3z1ZLV2cbQyI3LyfLbfEAML858"
              />
              <button className="avatar-edit-btn" onClick={() => alert("Upload a new profile image...")}>
                <span className="material-symbols-outlined">edit</span>
              </button>
            </div>
            <div className="photo-info">
              <h3 className="photo-title">Profile Photo</h3>
              <p className="photo-desc">Recommended size: 400x400px. PNG or JPG.</p>
            </div>
          </div>

          <div className="profile-fields">
            <div className="field-group">
              <label className="field-lbl">Full Name</label>
              <input 
                type="text" 
                className="profile-input" 
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>
            <div className="field-group">
              <label className="field-lbl">Email Address</label>
              <input 
                type="email" 
                className="profile-input" 
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
            <div className="field-group full-width-field">
              <label className="field-lbl">Bio</label>
              <textarea 
                className="profile-input textarea-field" 
                rows="3"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              ></textarea>
            </div>
          </div>
        </section>

        {/* Membership Plan Info */}
        <section className="glass-card plan-status-card border-orange-left">
          <div className="plan-status-flex">
            <div className="plan-status-header">
              <span className="plan-active-tag">Active Plan</span>
              <h2 className="plan-title-bold">Pro Elite</h2>
              <p className="plan-renewal">Renews Jan 12, 2027</p>
            </div>

            <div className="usage-progress-block">
              <div className="usage-row">
                <span>Usage this month</span>
                <span className="orange-text">85%</span>
              </div>
              <div className="usage-bar-bg">
                <div className="usage-bar-fill"></div>
              </div>
            </div>

            <button className="manage-billing-btn" onClick={() => alert("Opening billing dashboard...")}>
              Manage Billing
            </button>
          </div>
        </section>

        {/* Connected Apps & Devices */}
        <section className="glass-card integrations-card">
          <div className="card-heading-row flex-between">
            <div className="flex-align-center">
              <span className="material-symbols-outlined orange-text">link</span>
              <h2 className="card-title ml-xs">Integrations</h2>
            </div>
            <span className="sync-status">Syncs every 15 mins</span>
          </div>

          <div className="integrations-list">
            {/* Apple Health */}
            <div className="integration-item">
              <div className="integration-info">
                <div className="integration-icon-box">
                  <span className="material-symbols-outlined">watch</span>
                </div>
                <div>
                  <p className="integration-name">Apple Health</p>
                  <p className="integration-status">{integrations.appleHealth ? 'Connected' : 'Disconnected'}</p>
                </div>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={integrations.appleHealth} 
                  onChange={() => toggleIntegration('appleHealth')}
                />
                <span className="slider round"></span>
              </label>
            </div>

            {/* Strava */}
            <div className="integration-item">
              <div className="integration-info">
                <div className="integration-icon-box">
                  <span className="material-symbols-outlined">directions_run</span>
                </div>
                <div>
                  <p className="integration-name">Strava</p>
                  <p className="integration-status">{integrations.strava ? 'Connected' : 'Disconnected'}</p>
                </div>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={integrations.strava} 
                  onChange={() => toggleIntegration('strava')}
                />
                <span className="slider round"></span>
              </label>
            </div>

            {/* MyFitnessPal */}
            <div className="integration-item">
              <div className="integration-info">
                <div className="integration-icon-box">
                  <span className="material-symbols-outlined">kitchen</span>
                </div>
                <div>
                  <p className="integration-name">MyFitnessPal</p>
                  <p className="integration-status">{integrations.myFitnessPal ? 'Connected' : 'Disconnected'}</p>
                </div>
              </div>
              {integrations.myFitnessPal ? (
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={integrations.myFitnessPal} 
                    onChange={() => toggleIntegration('myFitnessPal')}
                  />
                  <span className="slider round"></span>
                </label>
              ) : (
                <button className="connect-link-btn" onClick={() => toggleIntegration('myFitnessPal')}>
                  Connect
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="glass-card settings-half-card">
          <div className="card-heading-row">
            <span className="material-symbols-outlined orange-text">notifications</span>
            <h2 className="card-title">Notifications</h2>
          </div>
          <div className="toggles-list">
            <div className="toggle-row">
              <div className="toggle-info">
                <span className="toggle-label">Workout Reminders</span>
                <span className="toggle-sub">Push notifications for scheduled sessions</span>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={notifications.reminders} 
                  onChange={() => toggleNotification('reminders')}
                />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="toggle-row">
              <div className="toggle-info">
                <span className="toggle-label">Achievement Alerts</span>
                <span className="toggle-sub">Celebrate new PRs and milestones</span>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={notifications.alerts} 
                  onChange={() => toggleNotification('alerts')}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="glass-card settings-half-card">
          <div className="card-heading-row">
            <span className="material-symbols-outlined orange-text">security</span>
            <h2 className="card-title">Security</h2>
          </div>
          <div className="security-actions">
            <button className="security-action-btn" onClick={() => alert("Loading password reset module...")}>
              <span className="btn-label-text">Change Password</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <button className="security-action-btn" onClick={() => alert("Configuring Multi-Factor authentication...")}>
              <span className="btn-label-text">Two-Factor Authentication</span>
              <span className="orange-text font-bold">Enabled</span>
            </button>
          </div>
        </section>
      </div>

      {/* Footer Save Row */}
      <footer className="settings-footer-actions">
        <p className="activity-info">Last account activity: Today at 08:42 AM from Austin, TX</p>
        <div className="actions-row">
          <button className="discard-btn" onClick={handleDiscard}>Discard Changes</button>
          <button className="save-settings-btn" onClick={handleSave}>Save All Settings</button>
        </div>
      </footer>
    </div>
  );
}

export default Settings;
