import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('username');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-root">
      {/* Header Bar */}
      <div className="login-header-bar">
        <div className="login-header-left">
          <div className="login-logo">
            <span className="logo-dis">DIS</span>
            <span className="logo-88">88</span>
          </div>
        </div>
        <div className="login-header-right">
          <button className="header-signup-btn" onClick={() => navigate('/signup')}>SIGN UP</button>
          <button className="header-close-btn" onClick={() => navigate('/')}>×</button>
        </div>
      </div>

      {/* Title */}
      <h2 className="login-title">LOGIN</h2>

      {/* Tabs */}
      <div className="login-tabs">
        <button 
          className={`login-tab ${activeTab === 'username' ? 'active' : ''}`}
          onClick={() => setActiveTab('username')}
        >
          Username
        </button>
        <button 
          className={`login-tab ${activeTab === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveTab('mobile')}
        >
          Mobile
        </button>
        <button 
          className={`login-tab ${activeTab === 'email' ? 'active' : ''}`}
          onClick={() => setActiveTab('email')}
        >
          Email
        </button>
      </div>

      {/* Card */}
      <div className="login-card">
        <form className="login-form">
          <div className="login-field">
            <input 
              type="text" 
              className="login-input" 
              placeholder={activeTab === 'username' ? "Enter Your Username" : activeTab === 'mobile' ? "Enter Your Mobile" : "Enter Your Email"}
              autoComplete={activeTab === 'username' ? "username" : activeTab === 'mobile' ? "tel" : "email"}
            />
          </div>

          <div className="login-field">
            <div className="login-input-container">
              <input 
                type={showPassword ? "text" : "password"} 
                className="login-input" 
                placeholder="Password"
                autoComplete="current-password"
              />
              <button type="button" className="login-eye" onClick={() => setShowPassword(v => !v)}>
                <img src="https://img.icons8.com/ios-glyphs/30/cccccc/visible--v1.png" alt="Show/Hide" style={{width: '20px', height: '20px'}} />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Login Button */}
      <button className="login-btn">LOGIN</button>

      {/* Divider */}
      <div className="login-divider-row">
        <div className="login-divider" />
        <span className="login-or">or</span>
        <div className="login-divider" />
      </div>

      {/* Google Button */}
      <button className="login-google-btn">
        <span className="login-google-g">G</span>
      </button>

      {/* Forgot Password */}
      <div className="login-forgot-row">
        <span className="login-forgot-link">Forgot your password?</span>
      </div>

      {/* Customer Service */}
      <div className="login-customer-row">
        Any issues? Please contact our <span className="login-customer-link">customer service</span>
      </div>
    </div>
  );
};

export default LoginPage; 