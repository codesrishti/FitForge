import React, { useState } from 'react';
import './EliteTrainers.css';

const TRAINERS_DATA = [
  {
    id: 1,
    name: 'Marcus Thorne',
    rating: '5.0',
    specialties: ['Bodybuilding', 'Strength'],
    certs: 'NASM-CPT, IFBB PRO',
    desc: '12 years of experience turning high-level athletes into podium finishers through precision loading.',
    badge: 'ELITE PRO',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Jhpss2BQf48b8v6FT3N_1lEPoZRGdOB2afS6zicLET58VCIGx1-O8HFrSWNNmqj5dIaxUie1mNQTUJsPmIypTZufIuESuUbMjP89pZKxjMXjigqSCZGj3zjbVGFCuPrDUiKd-2eRdTM-uN-9ml_RJcKMBHcmc-xWVonTDGlwJHEsX7K2lPzXD4cGyK9L7KhxHh8Fivm1LuHjJgzQD0Epy8GRFIXDKQ27Hys8nZl7XdGK1i1Ii8L-3ZXECLbfce_xhOo8wRVooY4j'
  },
  {
    id: 2,
    name: 'Elena Vance',
    rating: '4.9',
    specialties: ['Nutrition', 'Bio-Hacking'],
    certs: 'CSCS, Precision Nutrition L2',
    desc: 'Specializing in metabolic restoration and peak performance nutrition for executive professionals.',
    badge: '',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZatrtmG8zJmLjQGlIhsxp2W8-6Usei1DJGHmzSWiAfBlWKke4XtWpN-KlpThOFl_AuMm4M1f_7DAiPy9kogHMrLaebXcfjxXAlbefJKHRf3TOvLMFzxitY5ZzNdJgfD0b1TX1fRgW-JtHlIB4uVp5itEXIjI_RgUrrqLcOPTYHvNLHMuE9AZqS_hyK-I2bRG_MHAm4j1kIlcu0VkFA77Rjc5883NMZY5YYx0l0tum_BTIq5j2H2Rm6wommWaAYnO5QhmPVargFYof'
  },
  {
    id: 3,
    name: 'Sgt. Silas Reed',
    rating: '5.0',
    specialties: ['Tactical', 'Endurance'],
    certs: 'Ex-Special Ops, CrossFit L3',
    desc: "Founder of the 'Forge Protocol'. Mental toughness and tactical conditioning for the elite few.",
    badge: 'SENIOR COACH',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzID1x3Y81y1menZn-CiAwrMUNpqPVkBDz2xQFnlJhSA9RjwMi4J7NUgx6rwm1c0ec2FSt5Nb_Lic0VblELPw0qOjHiVJXOr0EwFtqCedMLaz49kZL-Vk_IkLKC873udkDfL5WPMx8JMSMzvkiMqgXxw--0nc5lAMBxuFMJYK7wrcX9vcPsPV1jJNwcQ0hW28W1voxwXFdMSnuN-9vyfahRe3dclK3LKWAmCj2025bi_soMfASh_Fg6wGjms3m668TpwFkWzfv1DWj'
  },
  {
    id: 4,
    name: 'Maya Sterling',
    rating: '4.8',
    specialties: ['Mobility', 'Recovery'],
    certs: 'Master Pilates, Yoga RYT-500',
    desc: 'Integration of explosive power with fluid mobility. The secret weapon for longevity in sport.',
    badge: '',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvxQTlQrj5h0ExfXDCDeMF11kUlPy3AmWYpQo791iUOj3GBEOvzgMwWu3NNSf46dvFNj4Vji-qK50SxW9MRx1q3deUZWIrOao12orPQFLyeyB9bFpeNz0XsShakTdvAKhMetd1hP8TtcAX_KJI8ARmVdKHoB5fZUOllqcDw6R88NaeQm9v-wCy9yT5OqFLNFDI4JtvDeh5ucqJDuEAImFwGDN-S9MiFrH3k6bAD34DcIzSaKxDMN4V0LmablZ5XbD3NZD7fUOB57Pp'
  }
];

function EliteTrainers() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleBook = (name) => {
    alert(`Initiating booking flow with ${name}.`);
  };

  const handleAssessment = () => {
    alert("Loading performance assessment questions...");
  };

  // Filtering Logic
  const filteredTrainers = TRAINERS_DATA.filter((trainer) => {
    // Filter by Tab Specialty
    const matchesSpecialty = 
      activeFilter === 'All' || 
      trainer.specialties.some(s => s.toLowerCase() === activeFilter.toLowerCase());

    // Filter by search term
    const matchesSearch = 
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      trainer.certs.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="trainers-page animate-fade-in">
      {/* Hero Header */}
      <header className="trainers-hero">
        <div className="trainers-hero-overlay"></div>
        <div className="trainers-hero-content">
          <span className="hero-tag">Elite Performance</span>
          <h1 className="hero-title">THE FORGE MASTERS</h1>
          <p className="hero-desc">
            Train with the world's most disciplined experts. Our elite trainers are certified masters in human performance, nutrition, and metabolic science.
          </p>
        </div>
      </header>

      {/* Filters & Search */}
      <section className="filters-section container">
        <div className="filters-wrapper">
          <div className="filter-tabs">
            {['All', 'Bodybuilding', 'Nutrition', 'HIIT', 'Mobility'].map((spec) => (
              <button
                key={spec}
                className={`filter-tab-btn ${activeFilter === spec ? 'active-tab' : ''}`}
                onClick={() => setActiveFilter(spec)}
              >
                {spec === 'All' ? 'All Specialities' : spec}
              </button>
            ))}
          </div>
          <div className="search-bar">
            <span className="material-symbols-outlined search-icon">search</span>
            <input
              type="text"
              placeholder="Search trainers..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="trainers-grid-section container">
        {filteredTrainers.length > 0 ? (
          <div className="trainers-grid">
            {filteredTrainers.map((trainer) => (
              <div key={trainer.id} className="trainer-card glass-card">
                <div className="trainer-img-wrapper">
                  <img
                    className="trainer-img"
                    alt={trainer.name}
                    src={trainer.img}
                  />
                  {trainer.badge && (
                    <div className="trainer-badge">{trainer.badge}</div>
                  )}
                  <div className="trainer-img-gradient"></div>
                </div>
                <div className="trainer-info">
                  <div className="trainer-header">
                    <h3 className="trainer-name">{trainer.name}</h3>
                    <div className="trainer-rating">
                      <span className="material-symbols-outlined star-icon fill-icon">star</span>
                      <span>{trainer.rating}</span>
                    </div>
                  </div>
                  <p className="trainer-certs">{trainer.certs}</p>
                  <div className="trainer-specialty-tags">
                    {trainer.specialties.map((spec) => (
                      <span key={spec} className="specialty-tag">{spec}</span>
                    ))}
                  </div>
                  <p className="trainer-desc">{trainer.desc}</p>
                  <button
                    className="book-btn"
                    onClick={() => handleBook(trainer.name)}
                  >
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-trainers text-center">
            <span className="material-symbols-outlined no-results-icon">search_off</span>
            <h3>No trainers found</h3>
            <p>Try adjustments in search text or categories.</p>
          </div>
        )}
      </section>

      {/* Assessment CTA */}
      <section className="assessment-cta">
        <div className="assessment-container container">
          <div className="assessment-text">
            <h2>NOT SURE WHERE TO START?</h2>
            <p>Take our 2-minute performance assessment and we'll match you with the perfect coach for your specific goals.</p>
          </div>
          <button className="assessment-btn" onClick={handleAssessment}>
            Start Assessment
          </button>
        </div>
      </section>
    </div>
  );
}

export default EliteTrainers;
