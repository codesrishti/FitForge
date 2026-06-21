import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const statsRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-stats-visible');
        }
      });
    }, observerOptions);

    const statsElements = document.querySelectorAll('.stat-item');
    statsElements.forEach((stat) => observer.observe(stat));

    return () => {
      statsElements.forEach((stat) => observer.unobserve(stat));
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Build <span className="highlight">Strength.</span><br />Transform Life.
          </h1>
          <p className="hero-subtitle">
            Join the elite community of athletes pushing the boundaries of human performance. Precision-engineered training for the serious athlete.
          </p>
          <div className="hero-actions">
            <button className="btn-primary hero-btn" onClick={() => navigate('/join')}>
              Start Your Transformation
            </button>
            <button className="btn-secondary hero-btn" onClick={() => navigate('/programs')}>
              Explore Programs
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container stats-grid">
          <div className="stat-item">
            <div className="stat-value">5000+</div>
            <div className="stat-label">Elite Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">150+</div>
            <div className="stat-label">Expert Trainers</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">12k+</div>
            <div className="stat-label">Workouts Logged</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">98%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Featured Programs Bento Grid */}
      <section className="programs-section container">
        <div className="section-header">
          <h2 className="section-title">Featured Programs</h2>
          <div className="section-underline"></div>
        </div>

        <div className="bento-grid">
          {/* Card 1: HIIT */}
          <div className="bento-card card-large">
            <div className="card-bg hiit-bg"></div>
            <div className="card-gradient"></div>
            <div className="card-content">
              <span className="card-tag">High Intensity</span>
              <h3 className="card-title">Forge-HIIT Elite</h3>
              <p className="card-description">Maximum metabolic burn in 45 minutes. Designed for the relentless.</p>
              <button className="btn-secondary card-btn" onClick={() => navigate('/schedule')}>View Schedule</button>
            </div>
          </div>

          {/* Card 2: Strength */}
          <div className="bento-card card-small">
            <div className="card-bg strength-bg"></div>
            <div className="card-gradient"></div>
            <div className="card-content">
              <span className="card-tag">Strength</span>
              <h3 className="card-title">Iron Mastery</h3>
              <p className="card-description">Progressive overload for peak muscular capacity.</p>
              <button className="btn-secondary card-btn" onClick={() => navigate('/programs')}>Details</button>
            </div>
          </div>

          {/* Card 3: Yoga / Recovery */}
          <div className="bento-card card-full-width">
            <div className="card-bg yoga-bg"></div>
            <div className="card-gradient"></div>
            <div className="card-content flex-row">
              <div className="flex-col">
                <span className="card-tag">Recovery</span>
                <h3 className="card-title">Zen Performance</h3>
                <p className="card-description">Precision recovery and flexibility to balance your explosive power.</p>
              </div>
              <button className="btn-primary card-btn-align" onClick={() => navigate('/schedule')}>
                View Class Schedule
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-section">
        <div className="container">
          <h2 className="section-title text-center">Success Stories</h2>
          <div className="testimonials-grid">
            <div className="glass-card testimonial-card">
              <span className="material-symbols-outlined quote-icon">format_quote</span>
              <p className="testimonial-text">
                "FitForge didn't just change my body; it changed my entire mindset. The discipline I learned here carries over into every aspect of my life."
              </p>
              <div className="testimonial-user">
                <img 
                  className="user-img" 
                  alt="Marcus Thorne" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXepPcdeScky1EBo_FBSAxOfAhnHpw9DNWBf_7hTqoOV_xSzmluWErVWu6EWXIkG6YrLSrFkacKNNyULCi8AXx6kHa8ZhVq9iEJMYD8WUt0dscELwzWTiqPO0hgPBbxnOadrenKEuUTj-e0hsW7ua2OolTxKlQXd02yTOKeTjRr5G0RXs2n3wxJkHIuLgL_ZkrijwU8z3_Q8iv-EgJrlaDPWtuHSKa4Z16k5fL6uJKdQIgU0m_2UBAveZLWmimagwu_5j0eacecp1_"
                />
                <div className="user-details">
                  <h4 className="user-name">Marcus Thorne</h4>
                  <span className="user-subtitle">Elite Member for 2 Years</span>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card featured-testimonial">
              <span className="material-symbols-outlined quote-icon">format_quote</span>
              <p className="testimonial-text">
                "The data-driven approach and the expert coaches are unmatched. I've hit PRs I never thought possible in just six months."
              </p>
              <div className="testimonial-user">
                <img 
                  className="user-img" 
                  alt="Sarah Jenkins" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgwapzRdcmIMx1QzFNHwpIWgqRp7c_CBXkp4h3E2JelvB140hkeho8SSqE0QrMyIDCW62NiRcg7gHnVtxvDXu38rCwzFmScpeG81Z7qfHW5LJvU7NrJZI04sSzfdS--Mbb5cTicD7QIdKBIJA6TDbt8_H7Sh1VtUwycQ9yat8BDe_t2YgRYMVAgDvtGwju-bedVtkX7sjgJN-du308EDa_X5Cft3gbHWCl8qp3ypW28Cj-t0ZXZaYGXGsGsdWcCrbJHmGmO4FMGEdw"
                />
                <div className="user-details">
                  <h4 className="user-name">Sarah Jenkins</h4>
                  <span className="user-subtitle">Iron Mastery Program</span>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <span className="material-symbols-outlined quote-icon">format_quote</span>
              <p className="testimonial-text">
                "The community here is relentless. You're surrounded by people who refuse to quit. That energy is contagious."
              </p>
              <div className="testimonial-user">
                <img 
                  className="user-img" 
                  alt="David Chen" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo7w3BZjA_DouguMWcVEbrsA1dyFQxFLSPchS8UthtTBLeqJOe_3zlMH_6XsJ8FFEkuDA1-c4MvtevywoPm_zyalgeNA1tfpuaEPajPq0oVVDJzGify14CbCviGgorvoCHUH1FkYW1qoVtvQFgjY8xxJeIk3-gV2Xv6jmzNDVbMHXxP93b5uaYYc0psYRmT6twyWy3nJpUs3iYG35alaOk6HqBstKk8hk9m_9wNk0oev1TpGvMIsaG_86wLXnXf0Ei_ZNSytUyW2SS"
                />
                <div className="user-details">
                  <h4 className="user-name">David Chen</h4>
                  <span className="user-subtitle">HIIT Elite Athlete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Plans Section */}
      <section className="cta-plans container">
        <div className="text-center mb-lg">
          <h2 className="section-title">CHOOSE YOUR PATH</h2>
          <p className="section-subtitle">Flexible memberships designed to fit your intensity level.</p>
        </div>
        <div className="quick-plans-grid">
          <div className="quick-plan-card glass-card">
            <span className="plan-label">Foundation</span>
            <div className="plan-price">$49<span>/mo</span></div>
            <p className="plan-desc">Standard access, core coaching assessment included.</p>
            <button className="btn-secondary w-full" onClick={() => navigate('/plans')}>Learn More</button>
          </div>
          <div className="quick-plan-card glass-card featured-plan">
            <div className="popular-badge">MOST POPULAR</div>
            <span className="plan-label orange-text">Elite Pro</span>
            <div className="plan-price">$99<span>/mo</span></div>
            <p className="plan-desc">24/7 access, unlimited classes, tailored macro nutrition app.</p>
            <button className="btn-primary w-full" onClick={() => navigate('/join')}>Join the Grind</button>
          </div>
          <div className="quick-plan-card glass-card">
            <span className="plan-label">Ultimate Elite</span>
            <div className="plan-price">$199<span>/mo</span></div>
            <p className="plan-desc">1-on-1 expert master coach, recovery suites, labs review.</p>
            <button className="btn-secondary w-full" onClick={() => navigate('/plans')}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
