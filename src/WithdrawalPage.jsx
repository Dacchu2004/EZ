import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WithdrawalPage.css';

const WithdrawalPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleWithdrawClick = () => {
    // Handle withdrawal action
    console.log('Withdraw button clicked');
  };

  const transactions = [
    {
      id: 1,
      date: '2025-07-01 14:45:44',
      description: 'Lucky Wheel Reward',
      status: 'Pending'
    }
    // Add more transactions as needed
  ];

  return (
    <div className="withdrawal-page">
      {/* Header */}
      <div className="withdrawal-header">
        <button className="back-button" onClick={handleBackClick}>
          ←
        </button>
        <h1 className="page-title">WITHDRAWAL</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <button 
          className="tab"
          onClick={() => navigate('/deposit')}
        >
          Deposit
        </button>
        <button 
          className="tab active"
        >
          Withdrawal
        </button>
      </div>

      {/* Withdraw Button */}
      <div className="withdraw-section">
        <button className="withdraw-button" onClick={handleWithdrawClick}>
          Withdraw
        </button>
      </div>

      {/* Weekly Turnover Section */}
      <div className="weekly-turnover-section">
        <div className="turnover-info">
          <span className="turnover-label">Weekly Turnover Total:</span>
          <span className="turnover-amount">0.00</span>
        </div>
        <div className="turnover-timer">
          <span className="timer-text">10:00</span>
          <button className="refresh-button">↻</button>
        </div>
      </div>

      {/* Transaction List Section */}
      <div className="transaction-section">
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-details">
                <div className="transaction-date">{transaction.date}</div>
                <div className="transaction-description">{transaction.description}</div>
              </div>
              <div className="transaction-status">
                <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Button */}
        <div className="more-section">
          <button className="more-button">More</button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalPage; 