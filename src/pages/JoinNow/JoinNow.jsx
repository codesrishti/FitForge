import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinNow.css';

function JoinNow() {
  const [formType, setFormType] = useState('login'); // 'login' or 'signup'
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Authentication successful! Welcome to the Forge.");
    navigate('/dashboard');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert("Registration complete! Welcome to the elite 1%.");
    navigate('/dashboard');
  };

  return (
    <div className="join-page animate-fade-in">
      <main className="join-container">
        {/* Left Side: Brand Visual & Hero */}
        <section className="join-visual">
          <div className="join-visual-bg"></div>
          <div className="join-visual-overlay"></div>
          <div className="join-visual-content">
            <div>
              <h1 className="join-brand" onClick={() => navigate('/')}>
                FitForge
              </h1>
            </div>
            <div className="join-hero-text">
              <h2 className="join-hero-title">
                JOIN THE <span className="highlight">FORGE</span>
              </h2>
              <p className="join-hero-desc">
                Elite discipline. Precise progress. The ultimate arena for those who refuse to settle.
              </p>
            </div>
            <div className="join-social-proof">
              <div className="avatar-stack">
                <img 
                  className="stack-avatar" 
                  alt="Athlete" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP14vN69Ni8RYR8gwPAWJO0zjf4X8MYjsxBXEjS8f0Gsl71q_c5QXNkrvhLy-ipobkljFwFqLZa8Qd6Ir_8oA67tgWIfUTDb7mwPXiSS9AmZ15KsGcfVrcHUsoCJiODh0J-Kh-SlJs8jKNppiVb0QGMIE5hAXiwBQJW5ltB7lAnu9nSQwWd6bg9OYYox9QKj44wvaGPrwEC3trKvs8XFqvYKGA024A4pMSdR6fLUisdfW3ZuWXlyJ0RxSSipUc50j_sEmYTvcwEua-"
                />
                <img 
                  className="stack-avatar" 
                  alt="Trainer" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvbK9S3mvs5mMvf20TsLCHoXFLA3R-J76w4WFxE7YTQMbm8jiXVwd7lWyPa3gwgmrDyIxP4AdeWzCoG6xsM1wXKrhTSHb1Ww-o8WQQNoBOJZA4nAxGxEJ81dS_Q8BC8u5Y20CL7rVjEOD99NIa9HMCK9hm65E-v5ZeMXi_rjpyJu97vwSrmhi4uc261Ulqjxt0r1DmFRtTCiJ_Axzyty95LrMrZwlOE_ptLX27UXV50Droc7aOMHIicLjkqDU2rAOQpT2UERHO8exp"
                />
                <img 
                  className="stack-avatar" 
                  alt="Member" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv5kMBKnaGRrwC8UeNqSNK-o_JdVpBzT0t4TFxTELY7GzfANXETSVn7vs2p4lPh2ziegxKpcx3O-WSQgfaPcDdN3QZ558eBgtE-j39w56gf53JZq1SQ3c6iCAPBK_WAgTW4wEHa2TWWtyXi5duQHd9trSWVWkhb6w7T0utKullGFPKLzTvz49-o_KAARMXcSGyzEI4-c0_2bTtgOOtJiRveT9_e0o-MQu-t-iUcpr-NF3C6XYURKvP2k9EfX4YSUK0Si9gjbkRm0L9"
                />
              </div>
              <span className="proof-text">Join 12,000+ elite members</span>
            </div>
          </div>
        </section>

        {/* Right Side: Form Shell */}
        <section className="join-form-shell">
          <div className="form-wrapper">
            {/* Header */}
            <div className="form-header">
              <h3 className="form-title">
                {formType === 'login' ? 'Welcome Back' : 'Start Your Journey'}
              </h3>
              <p className="form-subtitle">
                {formType === 'login' 
                  ? 'Enter your credentials to access the forge.' 
                  : 'Join the elite 1% of athletes worldwide.'}
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="form-toggle-switch bg-surface-container-low">
              <button 
                className={`toggle-btn ${formType === 'login' ? 'active-toggle bg-secondary-container' : ''}`}
                onClick={() => setFormType('login')}
              >
                Login
              </button>
              <button 
                className={`toggle-btn ${formType === 'signup' ? 'active-toggle bg-secondary-container' : ''}`}
                onClick={() => setFormType('signup')}
              >
                Register
              </button>
            </div>

            {/* Forms */}
            {formType === 'login' ? (
              <form className="auth-form" onSubmit={handleLoginSubmit}>
                <div className="form-field">
                  <label className="field-label">Email Address</label>
                  <div className="input-with-icon">
                    <span className="material-symbols-outlined input-icon">mail</span>
                    <input 
                      type="email" 
                      placeholder="name@elite.com" 
                      className="form-input" 
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <div className="label-row">
                    <label className="field-label">Password</label>
                    <a href="#" className="forgot-link">Forgot?</a>
                  </div>
                  <div className="input-with-icon">
                    <span className="material-symbols-outlined input-icon">lock</span>
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="form-input" 
                      required
                    />
                  </div>
                </div>

                <div className="remember-row">
                  <input type="checkbox" id="remember" className="checkbox-input" />
                  <label htmlFor="remember" className="checkbox-label">Remember my session</label>
                </div>

                <button type="submit" className="auth-submit-btn">
                  Enter Workspace
                </button>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleSignupSubmit}>
                <div className="name-fields-row">
                  <div className="form-field">
                    <label className="field-label">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Alex" 
                      className="form-input" 
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="field-label">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Stone" 
                      className="form-input" 
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">Email Address</label>
                  <div className="input-with-icon">
                    <span className="material-symbols-outlined input-icon">mail</span>
                    <input 
                      type="email" 
                      placeholder="name@elite.com" 
                      className="form-input" 
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">Select Goal</label>
                  <select className="form-input select-input">
                    <option>Hypertrophy & Strength</option>
                    <option>Fat Loss & Shred</option>
                    <option>Athletic Performance</option>
                    <option>General Longevity</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-label">Create Password</label>
                  <div className="input-with-icon">
                    <span className="material-symbols-outlined input-icon">lock_open</span>
                    <input 
                      type="password" 
                      placeholder="Min. 8 characters" 
                      className="form-input" 
                      required
                    />
                  </div>
                </div>

                <p className="terms-text">
                  By registering, you agree to our <a href="#">Terms of Protocol</a> and <a href="#">Privacy Policy</a>.
                </p>

                <button type="submit" className="auth-submit-btn">
                  Begin Transformation
                </button>
              </form>
            )}

            {/* Social Authentication */}
            <div className="social-auth-section">
              <div className="social-divider">
                <div className="divider-line"></div>
                <span className="divider-text">Or access via</span>
                <div className="divider-line"></div>
              </div>
              <div className="social-buttons">
                <button className="social-btn" onClick={() => alert("OAuth via Google Mocked")}>
                  <svg className="social-svg" viewBox="0 0 24 24" fill="white">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.32-2.12 4.52-1.36 1.36-3.48 2.4-6.84 2.4-5.48 0-9.92-4.44-9.92-9.92S5.88 1.28 11.36 1.28c3.08 0 5.36 1.12 7.04 2.72l2.36-2.36C18.2 0 15.24-1.24 11.36-1.24 4.84-1.24-.24 4.12-.24 10.72s5.08 11.96 11.6 11.96c3.56 0 6.28-1.16 8.36-3.32 2.16-2.16 2.84-5.24 2.84-7.68 0-.52-.04-1.04-.12-1.52H12.48z"></path>
                  </svg>
                  <span>Google</span>
                </button>
                <button className="social-btn" onClick={() => alert("OAuth via Facebook Mocked")}>
                  <svg className="social-svg" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                  <span>Facebook</span>
                </button>
              </div>
            </div>

            <footer className="join-footer">
              <p>© 2026 FitForge Elite. Precision engineered for performance.</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default JoinNow;
