import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VIPPage.css';

const PrivilegeCard = ({ title, status }) => {
  return (
    <div className="vip-priv-card">
      <div className="vip-priv-icon">🎁</div>
      <div className="vip-priv-title">{title}</div>
      <div className={`vip-priv-badge ${status === 'Contact Us' ? 'contact' : ''}`}>{status}</div>
    </div>
  );
};

const VIPPage = () => {
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState(0);

  const vipLevels = [
    { name: 'Regular', color: 'linear-gradient(135deg, #d28a4f, #b76a3c)', logo: '/regular.png', vipPointsRequired: 0, depositRequired: 0 },
    { name: 'Bronze', color: 'linear-gradient(135deg, #cd7f32, #a0522d)', logo: '/bronze.png', vipPointsRequired: 30000, depositRequired: 30000 },
    { name: 'Silver', color: 'linear-gradient(135deg, #c0c0c0, #a8a8a8)', logo: '/silver.png', vipPointsRequired: 100000, depositRequired: 100000 },
    { name: 'Gold', color: 'linear-gradient(135deg, #ffd700, #daa520)', logo: '/gold.png', vipPointsRequired: 500000, depositRequired: 500000 },
    { name: 'Platinum', color: 'linear-gradient(135deg, #e5e4e2, #b8b8b8)', logo: '/platinum.png', vipPointsRequired: 1000000, depositRequired: 1000000 },
    { name: 'Diamond', color: 'linear-gradient(135deg, #b9f2ff, #87ceeb)', logo: '/diamond.png', vipPointsRequired: 5000000, depositRequired: 5000000 }
  ];

  const handlePrevLevel = () => {
    setCurrentLevel(prev => prev === 0 ? vipLevels.length - 1 : prev - 1);
  };

  const handleNextLevel = () => {
    setCurrentLevel(prev => prev === vipLevels.length - 1 ? 0 : prev + 1);
  };

  const currentLevelData = vipLevels[currentLevel];

  // Helper function to format numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const privileges = [
    { title: 'Upgrade Bonus', status: 'Insufficient Level' },
    { title: 'Birthday Bonus', status: 'Insufficient Level' },
    { title: 'Month Bonus', status: 'Insufficient Level' },
    { title: 'Vip Gift', status: 'Contact Us' },
    { title: 'Weekly Aid Bonus', status: 'Insufficient Level' },
  ];

  return (
    <div className="vip-page">
      <header className="vip-header">
        <button className="vip-back" onClick={() => navigate(-1)} aria-label="Back">‹</button>
        <h1 className="vip-title">VIP</h1>
        <button className="vip-link" aria-label="VIP Records">VIP Records</button>
      </header>

      <section className="vip-tier">
        <button className="vip-carousel-nav left" onClick={handlePrevLevel}>‹</button>
        
        {/* Stacked background cards */}
        <div className="vip-card-stack">
          {/* Previous card (left-3) */}
          <div 
            className="vip-tier-card stacked-card left-3" 
            style={{ 
              background: vipLevels[currentLevel <= 2 ? vipLevels.length - (3 - currentLevel) : currentLevel - 3].color,
            }}
          >
            <div className="vip-tier-top">
              <div className="vip-tier-name">{vipLevels[currentLevel <= 2 ? vipLevels.length - (3 - currentLevel) : currentLevel - 3].name}</div>
            </div>
          </div>
          
          {/* Previous card (left-2) */}
          <div 
            className="vip-tier-card stacked-card left-2" 
            style={{ 
              background: vipLevels[currentLevel <= 1 ? vipLevels.length - (2 - currentLevel) : currentLevel - 2].color,
            }}
          >
            <div className="vip-tier-top">
              <div className="vip-tier-name">{vipLevels[currentLevel <= 1 ? vipLevels.length - (2 - currentLevel) : currentLevel - 2].name}</div>
            </div>
          </div>
          
          {/* Previous card (left) */}
          <div 
            className="vip-tier-card stacked-card left" 
            style={{ 
              background: vipLevels[currentLevel === 0 ? vipLevels.length - 1 : currentLevel - 1].color,
            }}
          >
            <div className="vip-tier-top">
              <div className="vip-tier-name">{vipLevels[currentLevel === 0 ? vipLevels.length - 1 : currentLevel - 1].name}</div>
            </div>
          </div>
          
          {/* Main card */}
          <div className="vip-tier-card main-card" style={{ background: currentLevelData.color }}>
            <div className="vip-tier-top">
              <div className="vip-tier-name">{currentLevelData.name}</div>
              <button className="vip-intro">VIP Introduction ›</button>
            </div>
            <div className="vip-tier-emblem">
              <img src={currentLevelData.logo} alt={`${currentLevelData.name} VIP Emblem`} />
            </div>
          </div>
          
          {/* Next card (right) */}
          <div 
            className="vip-tier-card stacked-card right" 
            style={{ 
              background: vipLevels[currentLevel === vipLevels.length - 1 ? 0 : currentLevel + 1].color,
            }}
          >
            <div className="vip-tier-top">
              <div className="vip-tier-name">{vipLevels[currentLevel === vipLevels.length - 1 ? 0 : currentLevel + 1].name}</div>
            </div>
          </div>
          
          {/* Next card (right-2) */}
          <div 
            className="vip-tier-card stacked-card right-2" 
            style={{ 
              background: vipLevels[currentLevel >= vipLevels.length - 2 ? currentLevel - (vipLevels.length - 2) : currentLevel + 2].color,
            }}
          >
            <div className="vip-tier-top">
              <div className="vip-tier-name">{vipLevels[currentLevel >= vipLevels.length - 2 ? currentLevel - (vipLevels.length - 2) : currentLevel + 2].name}</div>
            </div>
          </div>
          
          {/* Next card (right-3) */}
          <div 
            className="vip-tier-card stacked-card right-3" 
            style={{ 
              background: vipLevels[currentLevel >= vipLevels.length - 3 ? currentLevel - (vipLevels.length - 3) : currentLevel + 3].color,
            }}
          >
            <div className="vip-tier-top">
              <div className="vip-tier-name">{vipLevels[currentLevel >= vipLevels.length - 3 ? currentLevel - (vipLevels.length - 3) : currentLevel + 3].name}</div>
            </div>
          </div>
        </div>
        
        <button className="vip-carousel-nav right" onClick={handleNextLevel}>›</button>
      </section>

      <section className="vip-conditions">
        <div className="vip-conditions-head">
          <h2>Upgrade {currentLevelData.name} Condition</h2>
          <div className="vip-chip">Incomplete</div>
        </div>

        <div className="vip-cond-row">
          <div className="vip-cond-left">
            <div className="vip-cond-label">VIP Points</div>
            <div className="vip-cond-values"><span className="red">0.00</span> / {formatNumber(currentLevelData.vipPointsRequired)}</div>
          </div>
          <button className="vip-cta">Play Now</button>
        </div>
        <div className="vip-progress">
          <div className="vip-progress-bar" />
          <div className="vip-progress-cap">Need {formatNumber(currentLevelData.vipPointsRequired)} more</div>
        </div>

        <div className="vip-cond-row">
          <div className="vip-cond-left">
            <div className="vip-cond-label">Deposit</div>
            <div className="vip-cond-values"><span className="green">0.00</span> / {formatNumber(currentLevelData.depositRequired)}</div>
          </div>
          <button className="vip-cta">Deposit</button>
        </div>
        <div className="vip-progress">
          <div className="vip-progress-bar" />
          <div className="vip-progress-cap">Need {formatNumber(currentLevelData.depositRequired)} more</div>
        </div>
      </section>

      <section className="vip-priv-section">
        <h3 className="vip-priv-title-section">Privilege Reward</h3>
        <div className="vip-priv-grid">
          {privileges.map((p, idx) => (
            <PrivilegeCard key={idx} title={p.title} status={p.status} />
          ))}
        </div>
      </section>

      <button className="vip-fab" aria-label="88 Button">
        <img src="/logo.png" alt="88 logo" />
      </button>
    </div>
  );
};

export default VIPPage;


