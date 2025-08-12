import React, { useState } from 'react';
import './ForgotPasswordPage.css';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('username');

  return (
    <div className="forgot-root">
      {/* Header Bar */}
      <div className="forgot-header-bar">
        <div className="forgot-header-left">
          <div className="forgot-logo">
            <span className="logo-dis">DIS</span>
            <span className="logo-88">88</span>
          </div>
        </div>
        <div className="forgot-header-right">
          <button className="header-login-btn" onClick={() => navigate('/login')}>LOGIN</button>
          <button className="header-close-btn" onClick={() => navigate('/')}>×</button>
        </div>
      </div>

      {/* Title */}
      <h2 className="forgot-title">FORGOT PASSWORD</h2>

      {/* Tabs */}
      <div className="forgot-tabs">
        <button 
          className={`forgot-tab ${activeTab === 'username' ? 'active' : ''}`}
          onClick={() => setActiveTab('username')}
        >
          Username
        </button>
        <button 
          className={`forgot-tab ${activeTab === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveTab('mobile')}
        >
          Mobile
        </button>
        <button 
          className={`forgot-tab ${activeTab === 'email' ? 'active' : ''}`}
          onClick={() => setActiveTab('email')}
        >
          Email
        </button>
      </div>

      {/* Input Field */}
      <div className="forgot-input-container">
        <input 
          type="text" 
          className="forgot-input" 
          placeholder={activeTab === 'username' ? "Enter Your Username" : activeTab === 'mobile' ? "Enter Your Mobile" : "Enter Your Email"}
          autoComplete={activeTab === 'username' ? "username" : activeTab === 'mobile' ? "tel" : "email"}
        />
      </div>

      {/* GET OTP Button */}
      <button className="forgot-otp-btn">GET OTP</button>

      {/* Login Link */}
      <div className="forgot-login-row">
        <span>Already have an account? </span>
        <span className="forgot-login-link" onClick={() => navigate('/login')}>Login Now</span>
      </div>

      {/* Customer Service */}
      <div className="forgot-customer-row">
        Any issues? Please contact our <span className="forgot-customer-link">customer service</span>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
