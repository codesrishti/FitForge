import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FitnessPrograms.css';

const PROGRAMS_DATA = [
  {
    id: 1,
    title: 'Strength Training',
    desc: 'Master compound movements and build raw power with our signature heavy-lift protocol.',
    category: 'strength',
    tag: 'Hardcore',
    duration: '60m',
    difficulty: 'High',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcSrsj331_T7tM32a-a_6wpeKsrw44P_7wP7X2WdA85SxbQxoehWey-L0afmetXiE66lyx6v-_vuRmQ2KsDi-A5GYNvezyNWa944sXBpBhiqEAxtZr4WkQJDqWCCWxQk65uuKCe0Pb_6_94ozBkL-7JqTxSFEncO_WQlboSO5MCMLs5EM2pv6EWL7Aim02F-QJKFir4jI8K0fJ3UHtUDuQ9E1AX3WSHFvWEqwJZkN2-xC38NfcLiLiPBt0hgz0XUiMG3kQEFaXKHNM'
  },
  {
    id: 2,
    title: 'Cardio Blast',
    desc: 'Push your metabolic limits with high-intensity intervals and endurance circuits.',
    category: 'endurance',
    tag: 'Explosive',
    duration: '45m',
    difficulty: 'Extreme',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyZMh495OpJas2FO7X-Y4CuRxfJw89dEdWXwERuVmv2IXKxLjc69cGSpEHyQg_DW0kQVgnSduQwHtv1JSYZl3iwspihtcpR-tHw4KCBEVM6EC7d-Pyjhy0Kll1PvuXsy72rW8qa5ehfVdXGAo4c9ox0xjw695NYhnf64AyGrlDwhhlEU5TDvcGHkbsZYgXYi7jQ3QSkCwaLRkw_mVkHH5m8WtgdHPopMr9e4nU_HpmukbsfncI0H-oIe5rUk1a25xFxCmqdMoFrq8P'
  },
  {
    id: 3,
    title: 'Yoga & Flow',
    desc: 'Enhance flexibility and focus with a rhythmic combination of breath and movement.',
    category: 'mobility',
    tag: 'Mental Clarity',
    duration: '75m',
    difficulty: 'Medium',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8v0XkB6wZocxsAHKqNHETIIseM4AwdqBekAGSsyGmNPLosLqrM1dlMUtIm1y4A_2bt_cgp6Ac8hXM1z8FcqhQY5oDV2NzMYYadVbEQMle7bFpQe5vsQb2n8TYWywgd5Skjb1XCU8bYfDZ011eNLXt8iwudLntpx4uhnUu_uz8n576Wr0a_zGGmhH9PayxHe05kdvXJa1KbTqAq5kmASFIaQlFHPShk_-K6LnGa6chDjRjhy_1s1tM9zsqkhKFljA9B90kWxGgvZX7'
  },
  {
    id: 4,
    title: 'CrossFit Elite',
    desc: 'The ultimate test of versatility. High-rep, high-intensity functional training.',
    category: 'strength',
    tag: 'Functional',
    duration: '50m',
    difficulty: 'V. High',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzFEU4s41RSZnWUpyEkErlws_2k2ANx5yUsQCiy1YTxMKt0-iaWR8bXj6ipr_oSP1FJhC8V_ZAv_slOm1h8fKPRiBKVp1HbZHrPouNV9ZOKOKUdH7kxF7_R5Qa2ajzjqq1hBBXkUZ-LkPFWUJ2vljwMhQocBxKWC1a2hRUu842QGp8VeroztE9CfelJpQnRxDSOWe3htpP3QXK2sjzb9LgT7dAiv--zAIyamv0V6-FAPWzZHczovZBQAxTDh5tqQum_6S5ZrGdNGXS'
  },
  {
    id: 5,
    title: 'Boxing Drills',
    desc: 'Sharpen your reflexes and torch calories with pro-level boxing mechanics.',
    category: 'endurance',
    tag: 'Combat',
    duration: '60m',
    difficulty: 'High',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK-VbhrZaTCzR5WkGH7tPb-i7ijTxl-tttWggEUAYvOz_fQahIzzJHq8Mscu406ZdifIqwWcTOMYF1JIrAus2gyH59aEtGMCYHbpKcRge7v_2TLnbCex0NvdsF85fJ9S23mQBUbpygOXSU6zhROZQz05bGQQokMq6AtmUqPbvwLiauMB4P92qP8d7D5Uk9R2n4a17guIyUn6_udasQN_QwhUlnGtTLArT3EumkU4AgNVH7o3w40ccyWI0e-fXQmbn2XQCd-5qr8mqm'
  },
  {
    id: 6,
    title: 'Power Cycle',
    desc: 'A high-wattage journey through diverse terrain and intense sprint stages.',
    category: 'endurance',
    tag: 'Endurance',
    duration: '45m',
    difficulty: 'Extreme',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoQG3E6HqsUtbeQ3P1XLfBymKC-8OxbeBQSTAP-VFz4k5t56Bg2g1q_ORPC9mW01xdwyYAZF8SBkZnckglFfz34VkiJ9RBiV1nfBb1Ohn928Xz3-tthb9yMtuE4cDcu89oFSVvQXZJ226YFV1O9OZ0AZJRQ7ilJ8HksacM_6ruO2YQ4OsV2aHaQsL9nhSg0BIoBqgbfTPs2S2V_07W_eUcE5E2825NyZfOURkitvGPk_5YuzDrSPr4p3-MDGQHlt7oUoY76GYQ7U5q'
  }
];

function FitnessPrograms() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const filteredPrograms = PROGRAMS_DATA.filter((p) => {
    return activeTab === 'all' || p.category === activeTab;
  });

  const handleLearnMore = (title) => {
    alert(`Showing information details for ${title}.`);
  };

  return (
    <div className="programs-page animate-fade-in">
      <main className="programs-main">
        {/* Header Section */}
        <section className="programs-hero-section">
          <div className="glow-effect"></div>
          <div className="programs-hero-content">
            <h1 className="programs-title">
              Forge Your <span className="highlight-italic">Limits</span>
            </h1>
            <p className="programs-desc">
              Explore our elite-tier training programs. From raw power to mental clarity, our classes are designed for those who refuse to settle.
            </p>
            <div className="programs-filter-tabs">
              {['all', 'strength', 'endurance', 'mobility'].map((tab) => (
                <button
                  key={tab}
                  className={`filter-badge ${activeTab === tab ? 'active-badge' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'all' ? 'All Classes' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Program Grid */}
        <section className="programs-grid">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="program-card glass-card">
              <div className="program-img-wrapper">
                <div 
                  className="program-img" 
                  style={{ backgroundImage: `url(${program.img})` }}
                ></div>
                <div className="program-img-gradient"></div>
                <div className="program-tag-container">
                  <span className="program-tag">{program.tag}</span>
                </div>
              </div>
              <div className="program-content">
                <h3 className="program-card-title">{program.title}</h3>
                <p className="program-card-desc">{program.desc}</p>
                <div className="program-footer">
                  <div className="program-meta">
                    <div className="meta-item">
                      <span className="material-symbols-outlined">schedule</span>
                      <span>{program.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="material-symbols-outlined">signal_cellular_alt</span>
                      <span>{program.difficulty}</span>
                    </div>
                  </div>
                  <button 
                    className="learn-more-link"
                    onClick={() => handleLearnMore(program.title)}
                  >
                    Learn More
                    <span className="material-symbols-outlined arrow">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="programs-cta glass-card">
          <div className="svg-decorative-bg">
            <svg height="100%" width="100%">
              <defs>
                <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 107, 0, 0.15)" strokeWidth="0.5"></path>
                </pattern>
              </defs>
              <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
            </svg>
          </div>
          <div className="cta-content">
            <h2 className="cta-heading">Ready to Forge your <span className="orange-gradient-text">Elite Physique?</span></h2>
            <p className="cta-description">
              Join 5,000+ athletes who have transformed their lives with FitForge. First class is on us.
            </p>
            <div className="cta-actions">
              <button className="btn-primary" onClick={() => navigate('/join')}>
                Claim Free Trial
              </button>
              <button className="btn-secondary" onClick={() => navigate('/schedule')}>
                View Schedule
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FitnessPrograms;
