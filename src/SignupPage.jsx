import React, { useState } from 'react';
import './SignupPage.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [checked, setChecked] = useState(true);

  return (
    <div className="signup-root">
      {/* Header Bar */}
      <div className="signup-header-bar">
        <div className="signup-header-left">
          <div className="signup-logo">
            <span className="logo-dis">DIS</span>
            <span className="logo-88">88</span>
          </div>
        </div>
        <div className="signup-header-right">
          <button className="header-login-btn" onClick={() => navigate('/login')}>LOGIN</button>
          <button className="header-close-btn" onClick={() => navigate('/')}>×</button>
        </div>
      </div>

      {/* Title */}
      <h2 className="signup-title">SIGN UP</h2>

      {/* Card */}
      <div className="signup-card">
        <div className="signup-card-title">Enter your account information</div>
        <form className="signup-form">
          <div className="signup-field">
            <label className="signup-label">Username</label>
            <div className="signup-input-container">
              <input type="text" className="signup-input" placeholder="Set your username" autoComplete="username" />
            </div>
          </div>

          <div className="signup-field">
            <label className="signup-label">Phone number</label>
            <div className="signup-phone-header">
              <div className="signup-phone-flag">
                <img src="/flag.jpg" alt="MY" className="signup-flag" />
                <span className="signup-country-code">+60</span>
                <span className="signup-dropdown">▼</span>
              </div>
              <span className="signup-placeholder">eg 123456789</span>
            </div>
            <div className="signup-input-container">
              <input type="tel" className="signup-input" placeholder="Phone number" autoComplete="tel" />
            </div>
          </div>

          <div className="signup-field">
            <label className="signup-label">Password</label>
            <div className="signup-input-container">
              <input type={showPassword ? "text" : "password"} className="signup-input" placeholder="Create password" autoComplete="new-password" />
              <button type="button" className="signup-eye" onClick={() => setShowPassword(v => !v)}>
                <img src="https://img.icons8.com/ios-glyphs/30/cccccc/visible--v1.png" alt="Show/Hide" style={{width: '20px', height: '20px'}} />
              </button>
            </div>
          </div>

          <div className="signup-field">
            <label className="signup-label">Confirm password</label>
            <div className="signup-input-container">
              <input type={showConfirm ? "text" : "password"} className="signup-input" placeholder="Type password again" autoComplete="new-password" />
              <button type="button" className="signup-eye" onClick={() => setShowConfirm(v => !v)}>
                <img src="https://img.icons8.com/ios-glyphs/30/cccccc/visible--v1.png" alt="Show/Hide" style={{width: '20px', height: '20px'}} />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Checkbox */}
      <div className="signup-checkbox-row">
        <input type="checkbox" checked={checked} onChange={() => setChecked(v => !v)} id="signup-age" />
        <label htmlFor="signup-age">
          I am 18 years old and have read <span className="signup-terms">terms & conditions</span>
        </label>
      </div>

      {/* Submit Button */}
      <button className="signup-btn">SUBMIT</button>

      {/* Divider */}
      <div className="signup-divider-row">
        <div className="signup-divider" />
        <span className="signup-or">or</span>
        <div className="signup-divider" />
      </div>

      {/* Google Button */}
      <button className="signup-google-btn">
        <span className="signup-google-g">G</span>
      </button>

      {/* Customer Service */}
      <div className="signup-customer-row">
        Any issues? Please contact our <span className="signup-customer-link">customer service</span>
      </div>
    </div>
  );
};

export default SignupPage;