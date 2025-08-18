import React from 'react';
import { FaShare } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './RebatePage.css';

const RebatePage = () => {
  const navigate = useNavigate();

  const tiers = [
    { id: 'daily', title: 'Daily', amount: '0.00 MYR', imgAlt: 'Daily coin' },
    { id: 'weekly', title: 'Weekly', amount: '0.00 MYR', imgAlt: 'Weekly coin' },
    { id: 'monthly', title: 'Monthly', amount: '0.00 MYR', imgAlt: 'Monthly chest' },
  ];

  return (
    <div className="rebate-page">
      <header className="rebate-header">
        <button className="icon-button" onClick={() => navigate(-1)} aria-label="Back">
          <span className="back-glyph">‹</span>
        </button>
        <h1 className="rebate-title">REBATE</h1>
        <button className="share-pill" onClick={() => {}} aria-label="Share">
          <FaShare />
          <span className="share-text">Share</span>
          <span className="share-coin">🪙</span>
        </button>
      </header>

      <main className="rebate-content">
        <div className="rebate-grid">
          {tiers.map((t) => (
            <div key={t.id} className="rebate-card">
              <div className="rebate-card-inner">
                <div className="rebate-card-top">
                  <span className="rebate-period">{t.title}</span>
                </div>
                <div className="rebate-image-wrap">
                  {/* placeholder image */}
                  <img src="/gift-icon.png" alt={t.imgAlt} className="rebate-image" />
                </div>
                <div className="rebate-amount">{t.amount}</div>
                <button className="rebate-cta">Play Now</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating app button bottom-right */}
      <button className="floating-logo" aria-label="Home">
        <img src="/logo.png" alt="88 logo" />
      </button>
    </div>
  );
};

export default RebatePage;


