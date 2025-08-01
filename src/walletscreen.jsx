import React, { useState } from 'react';
import './WalletScreen.css';

export default function WalletScreen() {
  // Slot providers data
  const slotProviders = [
    { name: "PP", balance: "0.00" },
    { name: "JILI", balance: "0.00" },
    { name: "RG", balance: "0.00" },
    { name: "Joker", balance: "0.00" },
    { name: "HBN", balance: "0.00" },
    { name: "QTech", balance: "0.00" },
    { name: "Kiron", balance: "0.00" },
    { name: "QS", balance: "0.00" },
    { name: "BPG", balance: "0.00" },
    { name: "HAK", balance: "0.00" },
    { name: "TK", balance: "0.00" },
    { name: "RLX", balance: "0.00" },
    { name: "PNG", balance: "0.00" },
    { name: "CQ9", balance: "0.00" },
    { name: "SIMPLE", balance: "0.00" },
    { name: "SBO", balance: "0.00" },
    { name: "FUNKY", balance: "0.00" },
    { name: "NextSpin", balance: "0.00" },
    { name: "PlayTech", balance: "0.00" },
    { name: "LGD", balance: "0.00" },
    { name: "KA", balance: "0.00" },
    { name: "GPI", balance: "0.00" },
    { name: "YGG", balance: "0.00" },
    { name: "BBIN", balance: "0.00" },
    { name: "IDS", balance: "0.00" },
    { name: "ES", balance: "0.00" },
    { name: "BNG", balance: "0.00" },
    { name: "REEVO", balance: "0.00" },
    { name: "PLAYSTAR", balance: "0.00" },
    { name: "FACHAI", balance: "0.00" },
    { name: "RICH88", balance: "0.00" },
    { name: "BGM", balance: "0.00" },
    { name: "JDB", balance: "0.00" },
    { name: "SG", balance: "0.00" },
    { name: "LIVE22", balance: "0.00" },
    { name: "FASTSPIN", balance: "0.00" },
    { name: "HOTDOG", balance: "0.00" },
    { name: "BIGTIMEGAMIN", balance: "0.00" },
    { name: "NETENT", balance: "0.00" },
    { name: "NOLIMITCITY", balance: "0.00" },
    { name: "REDTIGER", balance: "0.00" },
    { name: "SPLUS", balance: "0.00" },
    { name: "SMARTSOFT", balance: "0.00" },
    { name: "LUCKY365", balance: "0.00" },
    { name: "HACKSAWGAM", balance: "0.00" },
    { name: "RELAXGAMING", balance: "0.00" }
  ];

  // Live Casino providers data
  const liveCasinoProviders = [
    { name: "EVO", balance: "0.00" },
    { name: "DG", balance: "0.00" },
    { name: "ALLBET", balance: "0.00" },
    { name: "PP", balance: "0.00" },
    { name: "PlayTech", balance: "0.00" },
    { name: "YEEBET", balance: "0.00" },
    { name: "EZUGI", balance: "0.00" },
    { name: "SBO", balance: "0.00" },
    { name: "SEXY", balance: "0.00" },
    { name: "SA", balance: "0.00" },
    { name: "Oriental", balance: "0.00" },
    { name: "WM", balance: "0.00" },
    { name: "HG", balance: "0.00" },
    { name: "BBIN", balance: "0.00" },
    { name: "BG", balance: "0.00" },
    { name: "AG", balance: "0.00" }
  ];

  // 7-11 providers data
  const sevenElevenProviders = [
    { name: "918KISS", balance: "0.00" },
    { name: "PUSSY888", balance: "0.00" },
    { name: "MEGA", balance: "0.00" }
  ];

  // Fast Game providers data
  const fastGameProviders = [
    { name: "HAK", balance: "0.00" },
    { name: "SPB", balance: "0.00" },
    { name: "BGM", balance: "0.00" },
    { name: "SPLUS", balance: "0.00" },
    { name: "AVIATRIX", balance: "0.00" },
    { name: "SMARTSOFT", balance: "0.00" },
    { name: "HACKSAW", balance: "0.00" }
  ];

  // Fishing providers data
  const fishingProviders = [
    { name: "GG", balance: "0.00" },
    { name: "CQ9", balance: "0.00" },
    { name: "KA", balance: "0.00" },
    { name: "BG", balance: "0.00" },
    { name: "BBIN", balance: "0.00" },
    { name: "JILI", balance: "0.00" },
    { name: "FACHAI", balance: "0.00" },
    { name: "JDB", balance: "0.00" },
    { name: "SG", balance: "0.00" },
    { name: "FASTSPIN", balance: "0.00" },
    { name: "SPLUS", balance: "0.00" }
  ];

  // Sports providers data
  const sportsProviders = [
    { name: "BTI", balance: "0.00" },
    { name: "SBO", balance: "0.00" },
    { name: "CMD", balance: "0.00" },
    { name: "M8", balance: "0.00" },
    { name: "SABA", balance: "0.00" },
    { name: "UG", balance: "0.00" },
    { name: "3SING", balance: "0.00" }
  ];

  // Esport providers data
  const esportProviders = [
    { name: "TF", balance: "0.00" }
  ];

  // Lottery providers data
  const lotteryProviders = [
    { name: "TCG", balance: "0.00" },
    { name: "GPI", balance: "0.00" },
    { name: "QQKENO", balance: "0.00" }
  ];

  // Card Game providers data
  const cardGameProviders = [
    { name: "LUCKY365", balance: "0.00" },
    { name: "KM", balance: "0.00" },
    { name: "JILI", balance: "0.00" },
    { name: "BGM", balance: "0.00" },
    { name: "NextSpin", balance: "0.00" },
    { name: "SMARTSOFT", balance: "0.00" }
  ];

  // Cockfight providers data
  const cockfightProviders = [
    { name: "SVENUS", balance: "0.00" }
  ];

  const handleBackClick = () => {
    // Navigate back to home
    window.history.back();
  };

  return (
    <div className="wallet-container">
      {/* Wallet Header */}
      <div className="wallet-header">
        <h1>Wallet</h1>
      </div>

      {/* Total Amount Section */}
      <div className="total-amount-section">
        <div className="total-amount-card">
          <div className="back-button" onClick={handleBackClick}>
            <div className="back-arrow">←</div>
          </div>
          <div className="total-amount-info">
            <h3 className="total-amount-label">Total Amount</h3>
            <h2 className="total-amount-value">2.80</h2>
          </div>
          <div className="refresh-icon">
            <div className="refresh-symbol">↻</div>
          </div>
        </div>
      </div>

      {/* Slot Providers Section */}
      <div className="slot-section">
        <div className="slot-header">
          <h3>Slot</h3>
        </div>
        
        <div className="slot-providers-grid">
          {slotProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-name">{provider.name}</div>
              <div className="provider-balance">{provider.balance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Casino Section */}
      <div className="live-casino-section">
        <div className="live-casino-header">
          <h3>Live Casino</h3>
        </div>
        
        <div className="live-casino-providers-grid">
          {liveCasinoProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-name">{provider.name}</div>
              <div className="provider-balance">{provider.balance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 7-11 Section */}
      <div className="seven-eleven-section">
        <div className="seven-eleven-header">
          <h3>7-11</h3>
        </div>
        
        <div className="seven-eleven-providers-grid">
          {sevenElevenProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-name">{provider.name}</div>
              <div className="provider-balance">{provider.balance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Fast Game Section */}
      <div className="fast-game-section">
        <div className="fast-game-header">
          <h3>Fast Game</h3>
        </div>
        
        <div className="fast-game-providers-grid">
          {fastGameProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-name">{provider.name}</div>
              <div className="provider-balance">{provider.balance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Fishing Section */}
      <div className="fishing-section">
        <div className="fishing-header">
          <h3>Fishing</h3>
        </div>
        
        <div className="fishing-providers-grid">
          {fishingProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-name">{provider.name}</div>
              <div className="provider-balance">{provider.balance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Section */}
      <div className="sports-section">
        <div className="sports-header">
          <h3>Sports</h3>
        </div>
        
        <div className="sports-providers-grid">
          {sportsProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-name">{provider.name}</div>
              <div className="provider-balance">{provider.balance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Esport Section */}
      <div className="esport-section">
        <div className="esport-header">
          <h3>Esport</h3>
        </div>
        
        <div className="esport-providers-grid">
          {esportProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-name">{provider.name}</div>
              <div className="provider-balance">{provider.balance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lottery Section */}
      <div className="lottery-section">
        <div className="lottery-header">
          <h3>Lottery</h3>
        </div>
        
        <div className="lottery-providers-grid">
          {lotteryProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-name">{provider.name}</div>
              <div className="provider-balance">{provider.balance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Game Section */}
      <div className="card-game-section">
        <div className="card-game-header">
          <h3>Card Game</h3>
        </div>
        
        <div className="card-game-providers-grid">
          {cardGameProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-name">{provider.name}</div>
              <div className="provider-balance">{provider.balance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cockfight Section */}
      <div className="cockfight-section">
        <div className="cockfight-header">
          <h3>Cockfight</h3>
        </div>
        
        <div className="cockfight-providers-grid">
          {cockfightProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-name">{provider.name}</div>
              <div className="provider-balance">{provider.balance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Spacing for Scroll */}
      <div className="bottom-spacing"></div>
    </div>
  );
}
