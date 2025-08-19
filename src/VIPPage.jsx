import React from 'react';
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
        <div className="vip-carousel-nav left">‹</div>
        <div className="vip-tier-card">
          <div className="vip-tier-top">
            <div className="vip-tier-name">Regular</div>
            <button className="vip-intro">VIP Introduction ›</button>
          </div>
          <div className="vip-tier-emblem">
            <img src="/logo.png" alt="VIP Emblem" />
          </div>
        </div>
        <div className="vip-carousel-nav right">›</div>
      </section>

      <section className="vip-conditions">
        <div className="vip-conditions-head">
          <h2>Upgrade Regular Condition</h2>
          <div className="vip-chip">Incomplete</div>
        </div>

        <div className="vip-cond-row">
          <div className="vip-cond-left">
            <div className="vip-cond-label">VIP Points</div>
            <div className="vip-cond-values"><span className="red">0.00</span> / 0.00</div>
          </div>
          <button className="vip-cta">Play Now</button>
        </div>
        <div className="vip-progress">
          <div className="vip-progress-bar" />
          <div className="vip-progress-cap">Need 0 more</div>
        </div>

        <div className="vip-cond-row">
          <div className="vip-cond-left">
            <div className="vip-cond-label">Deposit</div>
            <div className="vip-cond-values"><span className="green">0.00</span> / 0.00</div>
          </div>
          <button className="vip-cta">Deposit</button>
        </div>
        <div className="vip-progress">
          <div className="vip-progress-bar" />
          <div className="vip-progress-cap">Need 0 more</div>
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


