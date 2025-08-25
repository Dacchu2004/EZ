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
        <div className="vip-card-stack">
          {vipLevels.map((level, idx) => {
            // Compute relative position of this card to the currentLevel with wrap-around
            let rel = (idx - currentLevel) % vipLevels.length;
            if (rel > vipLevels.length / 2) rel -= vipLevels.length;
            if (rel < -vipLevels.length / 2) rel += vipLevels.length;

            // Clamp to range [-3, 3]; hide others
            const hidden = rel < -3 || rel > 3;
            const className =
              rel === 0
                ? 'vip-tier-card main-card pos-0'
                : rel === -1
                ? 'vip-tier-card stacked-card pos-n1'
                : rel === -2
                ? 'vip-tier-card stacked-card pos-n2'
                : rel === -3
                ? 'vip-tier-card stacked-card pos-n3'
                : rel === 1
                ? 'vip-tier-card stacked-card pos-p1'
                : rel === 2
                ? 'vip-tier-card stacked-card pos-p2'
                : 'vip-tier-card stacked-card pos-p3';

            return (
              <div
                key={idx}
                className={`${className}${hidden ? ' is-hidden' : ''}`}
                style={{ background: level.color }}
              >
                <div className="vip-tier-top">
                  <div className="vip-tier-name">{level.name}</div>
                  {rel === 0 && <button className="vip-intro">VIP Introduction ›</button>}
                </div>
                <div className="vip-content">
                  <div className="vip-content-title text-shadow">{level.name}</div>
                  <div className="vip-content-stat text-shadow">Points >= {formatNumber(level.vipPointsRequired)}</div>
                  <div className="vip-content-stat text-shadow">Deposit >= {formatNumber(level.depositRequired)}</div>
                </div>
                <div className="vip-tier-emblem">
                  <img src={level.logo} alt={level.name} />
                </div>
                <div className="vip-tier-emblem">
                  <img src={level.logo} alt={`${level.name} VIP Emblem`} />
                </div>
              </div>
            );
          })}
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


