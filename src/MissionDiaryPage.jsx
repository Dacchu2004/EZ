import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MissionDiaryPage.css';

const missionItems = [
  { id: 1, title: 'Daily Deposit(Accumulated)', target: 1000, reward: 'Activity Point 100 point(s)', rewardType: 'points' },
  { id: 2, title: 'Daily Deposit(Accumulated)', target: 5000, reward: 'Fixed Reward 38.00 MYR', rewardType: 'cash' },
  { id: 3, title: 'Daily Deposit(Accumulated)', target: 10000, reward: 'Fixed Reward 58.00 MYR', rewardType: 'cash' },
  { id: 4, title: 'Daily Deposit(Accumulated)', target: 30000, reward: 'Fixed Reward 188.00 MYR', rewardType: 'cash' },
  { id: 5, title: 'Daily Deposit(Accumulated)', target: 50000, reward: 'Fixed Reward 288.00 MYR', rewardType: 'cash' },
  { id: 6, title: 'Daily Deposit(Per Transaction)', target: 15000, reward: 'Fixed Reward 188.00 MYR', rewardType: 'cash' },
];

const MissionDiaryPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('daily');

  const items = missionItems; // same items for demo/placeholder

  return (
    <div className="mdiary-page">
      <header className="mdiary-header">
        <button className="mdiary-back" onClick={() => navigate(-1)} aria-label="Back">‹</button>
        <h1 className="mdiary-title">MISSION DIARY</h1>
      </header>

      <div className="mdiary-tabs">
        <button className={`mdiary-tab ${tab === 'daily' ? 'active' : ''}`} onClick={() => setTab('daily')}>Daily Mission</button>
        <button className={`mdiary-tab ${tab === 'acc' ? 'active' : ''}`} onClick={() => setTab('acc')}>Accumulative Mission</button>
      </div>

      <main className="mdiary-content">
        {items.map((m) => (
          <section key={m.id} className="mdiary-card">
            <div className="mdiary-card-head">
              <h2 className="mdiary-card-title">{m.title}</h2>
              <button className="mdiary-cta">DEPOSIT</button>
            </div>
            <div className="mdiary-sub">Target {m.target} MYR or more</div>
            <div className="mdiary-reward"><span className="reward-icon">$</span> {m.reward}</div>
            <div className="mdiary-progress">
              <div className="mdiary-ring">
                <div className="mdiary-ring-inner">0%</div>
              </div>
              <div className="mdiary-bar-wrap">
                <div className="mdiary-bar" />
                <div className="mdiary-bar-text">0/{m.target} MYR</div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default MissionDiaryPage;


