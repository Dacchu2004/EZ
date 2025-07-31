import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BankAccountPage.css';
import { FaCreditCard, FaChevronRight, FaArrowLeft } from 'react-icons/fa';

const BankAccountPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bank-account-page">
      {/* Header */}
      <div className="bank-header">
        <button className="back-btn" onClick={() => navigate('/account')}>
          <FaArrowLeft />
        </button>
      </div>

      {/* Title */}
      <h2 className="bank-title">Bank Account</h2>

      {/* Add Bank Account Section */}
      <div className="add-bank-section">
        <button className="add-bank-btn">Add Bank Account</button>
      </div>

      {/* Existing Bank Account */}
      <div className="bank-account-card">
        <div className="bank-account-info">
          <div className="bank-icon">
            <FaCreditCard />
          </div>
          <div className="bank-details">
            <div className="account-number">78373787378</div>
            <div className="account-name">ayank</div>
            <div className="bank-name">OCBC BANK</div>
          </div>
        </div>
        <div className="bank-chevron">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default BankAccountPage; 