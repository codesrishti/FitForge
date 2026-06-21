import React, { useState } from 'react';
import './Nutrition.css';

const PROTOCOLS = [
  {
    id: 'keto',
    name: 'Protocol: Keto',
    desc: 'High-fat, low-carb state for metabolic flexibility and sustained focus.',
    icon: 'restaurant'
  },
  {
    id: 'vegan',
    name: 'Protocol: Vegan',
    desc: 'Plant-powered performance focusing on recovery and inflammation control.',
    icon: 'eco'
  },
  {
    id: 'muscle',
    name: 'Protocol: Muscle Gain',
    desc: 'Strategic caloric surplus and protein timing for maximum hypertrophy and strength gains.',
    icon: 'fitness_center',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0c6VGmQRFBkxoFm5o8CboeqCi_KO9TImhCuHmtX333CEH6_fFym1KFgd-zLDoHokpmCr9389pfGFgmonDFirCpNRah8dp5KpM5QKEmjyFpygJ8mdjCKrOa5NRu-BKvpzQhk4bUZiiyWvHpKfrF9lYNkHpsHYVF5RoHg-v54IZ1f9BgICxb3KBtahQT2nz7EOanDIhKz88Gr482WYJ0eE189Z0HdytoUXh-oUfzoPgBbNU7Ah39NIEOZXQ31x4kdwFHBhRUGy9vgl8'
  }
];

const RECIPES = [
  {
    id: 1,
    title: 'Fire-Seared Atlantic Salmon',
    macroText: '45g Protein • 12g Fats • 450 kcal',
    protein: 45,
    fats: 12,
    carbs: 5,
    calories: 450,
    tag: 'PROTEIN+',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB10RkKcsRvVr0tU2-Y2AGPImbvYIAIIItWRX7_FyDrHQPL2XUMiAUHdUBiugeKfekzmia1bglGINdxjHJasDvcJCL0t4lZaWInk0Xo8GrYkP0R4h6YKrFec0snykxVy9kfM87IA2T2nueV3BYAYjmfmYwLwRoX9x5f7OvdG3toe1h3cpGLH1JpVvs-WqaZUGLHUGfWJ6oU-vlDqA4J9TV8uWtQyrQWitd6g5lkjCVfOKlM46QsYl_r4QBOOBLZyPX0JV11hBt0YvkR'
  },
  {
    id: 2,
    title: 'Quinoa Power Harvest Bowl',
    macroText: '22g Protein • 18g Fats • 520 kcal',
    protein: 22,
    fats: 18,
    carbs: 65,
    calories: 520,
    tag: 'VEGAN POWER',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr0uNaRTHhbvSX6KLlmaTlS-3YvbfPO1O-ZZgjJo5HMEveL-_kQ3aTqUOlFzVBIx_ulJC8z7rwVhvSJgW5fsh5V7BQZmQHEuQkmin-Nr2vvvqgkcmznGfbUCRZLSUxUp1oQDd0C2nb0t5zLJIdCQLhsAd3yJnN90TeSSiwtAtKVpHuPVAMVRtaE0XSDzfbYcpf0jj4u9DeqXZUDHrhjl3FeE6-aWltA7sm3_2BzhvXoJb14OnvoUZoWHZT6TU49-iWyztjTlTEy8Z2'
  },
  {
    id: 3,
    title: 'Lean Forge Steak & Roots',
    macroText: '52g Protein • 22g Fats • 780 kcal',
    protein: 52,
    fats: 22,
    carbs: 45,
    calories: 780,
    tag: 'BULKING',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmSnon8D0Ix8WuTE5b9jq-HDZ6wSbvHx9N-jL_WPgPfnMuWThwal4u16me5M1WNTMncGu5cqNVVLMhvL-yAid6N2Ga2rSvA81Ly4YmVNljOpZb-yReqCtpb6ht7xt2zoX8yYJgwJWb0xnUqq5EhSu9yRU50lxmw31vOCKU1K_QnA6Xymr9HjBQGckhz0DX-ZTrTwWmEc9SF-pe_RL7Vbaayihv_y7TAo9q4lOUNfdN07SWmFQU0yMGLGWQ6dPrB2_zYAawDf6vtIqz'
  }
];

function Nutrition() {
  const [weight, setWeight] = useState(85);
  const [goal, setGoal] = useState('Lean Bulk');
  const [loggedCalories, setLoggedCalories] = useState(0);
  const [loggedProtein, setLoggedProtein] = useState(0);
  const [loggedCarbs, setLoggedCarbs] = useState(0);
  const [loggedFats, setLoggedFats] = useState(0);

  // Dynamic Macro calculations based on weight and goal
  let targetCalories = 2000;
  let targetProtein = 160;
  let targetCarbs = 180;
  let targetFats = 70;

  if (goal === 'Lean Bulk') {
    targetCalories = Math.round(weight * 33.5);
    targetProtein = Math.round(weight * 2.2);
    targetCarbs = Math.round(weight * 3.8);
    targetFats = Math.round(weight * 1.0);
  } else if (goal === 'Aggressive Cut') {
    targetCalories = Math.round(weight * 22);
    targetProtein = Math.round(weight * 2.4);
    targetCarbs = Math.round(weight * 1.8);
    targetFats = Math.round(weight * 0.7);
  } else if (goal === 'Strength Peak') {
    targetCalories = Math.round(weight * 38);
    targetProtein = Math.round(weight * 2.3);
    targetCarbs = Math.round(weight * 4.5);
    targetFats = Math.round(weight * 1.2);
  } else { // Maintain
    targetCalories = Math.round(weight * 28);
    targetProtein = Math.round(weight * 2.0);
    targetCarbs = Math.round(weight * 2.8);
    targetFats = Math.round(weight * 0.9);
  }

  const handleAddRecipe = (recipe) => {
    setLoggedCalories(prev => prev + recipe.calories);
    setLoggedProtein(prev => prev + recipe.protein);
    setLoggedCarbs(prev => prev + recipe.carbs);
    setLoggedFats(prev => prev + recipe.fats);
    alert(`Logged ${recipe.title} to your daily intake.`);
  };

  const handleSyncMacros = () => {
    alert(`Synced Target: ${targetCalories} kcal, P: ${targetProtein}g, C: ${targetCarbs}g, F: ${targetFats}g to your device.`);
  };

  // Radial chart percentage calculations
  const totalScore = loggedCalories > targetCalories ? 'Caloric Surplus' : 'Optimal intake';
  const progressPercent = Math.min(Math.round((loggedCalories / targetCalories) * 100), 100);

  return (
    <div className="nutrition-page-content animate-fade-in">
      {/* Hero Header */}
      <section className="nutrition-hero">
        <div className="nutrition-hero-bg"></div>
        <div className="nutrition-hero-overlay"></div>
        <div className="nutrition-hero-content">
          <h1 className="hero-heading">FUEL YOUR <span className="highlight-orange">ELITE</span></h1>
          <p className="hero-desc">
            Precision nutrition is 70% of the battle. Forge your physique with science-backed meal protocols and elite-level macro tracking.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => document.getElementById('macro-engine').scrollIntoView({ behavior: 'smooth' })}>
              Calculate Macros
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('recipes-sec').scrollIntoView({ behavior: 'smooth' })}>
              View Recipes
            </button>
          </div>
        </div>
      </section>

      {/* Grid: Protocols & Macro Engine */}
      <section className="nutrition-grid-row-1" id="macro-engine">
        {/* Protocols */}
        <div className="protocols-col">
          <div className="protocols-subgrid">
            <div className="glass-card protocol-card">
              <span className="material-symbols-outlined protocol-icon">restaurant</span>
              <h3 className="protocol-title">Protocol: Keto</h3>
              <p className="protocol-desc">High-fat, low-carb state for metabolic flexibility and sustained focus.</p>
              <button className="explore-plan-link" onClick={() => alert("Loading Keto dietary layout...")}>
                EXPLORE PLAN <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            
            <div className="glass-card protocol-card">
              <span className="material-symbols-outlined protocol-icon">eco</span>
              <h3 className="protocol-title">Protocol: Vegan</h3>
              <p className="protocol-desc">Plant-powered performance focusing on recovery and inflammation control.</p>
              <button className="explore-plan-link" onClick={() => alert("Loading Vegan dietary layout...")}>
                EXPLORE PLAN <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="glass-card protocol-card-horizontal">
            <div className="horizontal-content">
              <h3 className="protocol-title">Protocol: Muscle Gain</h3>
              <p className="protocol-desc">Strategic caloric surplus and protein timing for maximum hypertrophy and strength gains.</p>
              <button className="explore-plan-link" onClick={() => alert("Loading Muscle Gain dietary layout...")}>
                EXPLORE PLAN <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="horizontal-img-box">
              <img 
                className="horizontal-img" 
                alt="Healthy food meal prep" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0c6VGmQRFBkxoFm5o8CboeqCi_KO9TImhCuHmtX333CEH6_fFym1KFgd-zLDoHokpmCr9389pfGFgmonDFirCpNRah8dp5KpM5QKEmjyFpygJ8mdjCKrOa5NRu-BKvpzQhk4bUZiiyWvHpKfrF9lYNkHpsHYVF5RoHg-v54IZ1f9BgICxb3KBtahQT2nz7EOanDIhKz88Gr482WYJ0eE189Z0HdytoUXh-oUfzoPgBbNU7Ah39NIEOZXQ31x4kdwFHBhRUGy9vgl8"
              />
            </div>
          </div>
        </div>

        {/* Macro Engine Widget */}
        <div className="glass-card macro-engine-widget border-orange">
          <h3 className="widget-title">Macro Engine</h3>
          <div className="widget-form">
            <div className="form-item">
              <label className="item-label">Current Weight (kg)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))} 
                className="widget-input"
              />
            </div>
            <div className="form-item">
              <label className="item-label">Target Goal</label>
              <select 
                value={goal} 
                onChange={(e) => setGoal(e.target.value)} 
                className="widget-input select-widget"
              >
                <option>Maintain Physique</option>
                <option>Aggressive Cut</option>
                <option>Lean Bulk</option>
                <option>Strength Peak</option>
              </select>
            </div>

            <div className="result-calories-block">
              <div className="result-text-row">
                <span className="result-lbl">Daily Target</span>
                <span className="result-val orange-text">{targetCalories} kcal</span>
              </div>
              <div className="bar-background">
                <div className="bar-fill" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="widget-macros-grid">
              <div className="macro-box">
                <span className="box-lbl">Protein</span>
                <span className="box-val">{targetProtein}g</span>
              </div>
              <div className="macro-box">
                <span className="box-lbl">Carbs</span>
                <span className="box-val">{targetCarbs}g</span>
              </div>
              <div className="macro-box">
                <span className="box-lbl">Fats</span>
                <span className="box-val">{targetFats}g</span>
              </div>
            </div>

            <button className="sync-btn" onClick={handleSyncMacros}>
              SYNC TO TRACKER
            </button>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="recipes-section" id="recipes-sec">
        <header className="recipes-header">
          <div>
            <h2 className="section-title">Elite Recipes</h2>
            <p className="section-desc">Performance nutrition that doesn't compromise on flavor.</p>
          </div>
          <button className="view-all-btn" onClick={() => alert('Loading recipes collection...')}>
            VIEW ALL <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </header>

        <div className="recipes-grid">
          {RECIPES.map((recipe) => (
            <div key={recipe.id} className="recipe-card-group group">
              <div className="recipe-img-box">
                <img className="recipe-img" alt={recipe.title} src={recipe.img} />
                <div className="recipe-tag">{recipe.tag}</div>
                <div className="recipe-hover-overlay">
                  <button className="add-log-btn" onClick={() => handleAddRecipe(recipe)}>
                    QUICK ADD TO LOG
                  </button>
                </div>
              </div>
              <div className="recipe-info-row">
                <div>
                  <h4 className="recipe-name">{recipe.title}</h4>
                  <p className="recipe-macros">{recipe.macroText}</p>
                </div>
                <button className="fav-btn" onClick={() => alert(`Added ${recipe.title} to favorites!`)}>
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optimized Absorption */}
      <section className="glass-card absorption-section">
        <div className="absorption-text-box">
          <h2 className="absorption-heading">Optimized Absorption</h2>
          <p className="absorption-description">
            Our algorithms analyze your workout intensity to adjust micronutrient suggestions in real-time. Ensure your body has exactly what it needs, when it needs it.
          </p>
          <div className="absorption-stats-grid">
            <div className="absorption-stat-item">
              <div className="bar-orange-indicator"></div>
              <div>
                <span className="stat-lbl">Vitamin Bioavailability</span>
                <span className="stat-val">94%</span>
              </div>
            </div>
            <div className="absorption-stat-item">
              <div className="bar-gray-indicator"></div>
              <div>
                <span className="stat-lbl">Metabolic Efficiency</span>
                <span className="stat-val">High</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic circular chart tracking user logging progress */}
        <div className="absorption-chart-box">
          <svg viewBox="0 0 100 100" className="absorption-svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#1B1B1B" strokeWidth="8"></circle>
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#FF6B00" 
              strokeWidth="8"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * progressPercent) / 100}
              strokeLinecap="round"
              className="glow-fill"
            ></circle>
            <circle cx="50" cy="50" r="30" fill="none" stroke="#1B1B1B" strokeWidth="6"></circle>
            <circle 
              cx="50" 
              cy="50" 
              r="30" 
              fill="none" 
              stroke="#e2e2e2" 
              strokeWidth="6"
              strokeDasharray="188.4"
              strokeDashoffset={188.4 - (188.4 * progressPercent) / 100}
              strokeLinecap="round"
            ></circle>
          </svg>
          <div className="svg-center-text">
            <span className="total-score-lbl">LOGGED STATUS</span>
            <span className="total-score-grade">{progressPercent}%</span>
            <span className="total-score-sub">{totalScore}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nutrition;
