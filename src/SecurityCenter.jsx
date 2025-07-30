import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaExclamationTriangle, 
  FaEdit, 
  FaUserShield, 
  FaIdCard, 
  FaLock, 
  FaMobile, 
  FaEnvelope, 
  FaCreditCard,
  FaUser,
  FaDollarSign,
  FaPhone,
  FaEnvelope as FaEnvelopeAlt,
  FaSignOutAlt
} from 'react-icons/fa';
import './SecurityCenter.css';

const SecurityCenter = () => {
  const navigate = useNavigate();

  const quickActions = [
    { icon: <FaUser />, label: 'Profile' },
    { icon: <FaDollarSign />, label: 'Wallet' },
    { icon: <FaPhone />, label: 'Support' },
    { icon: <FaEnvelopeAlt />, label: 'Email' }
  ];

  const securityItems = [
    {
      icon: <FaUserShield />,
      title: 'Personal Information',
      subtitle: 'Complete Personal Information',
      hasWarning: false,
      hasEdit: false
    },
    {
      icon: <FaIdCard />,
      title: 'ID Verification',
      subtitle: 'Verify your Profile now',
      hasWarning: true,
      hasEdit: true
    },
    {
      icon: <FaLock />,
      title: 'Change Password',
      subtitle: 'Recommend Letter And Number Combination',
      hasWarning: false,
      hasEdit: true
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Verification',
      subtitle: 'Mobile Verification',
      hasWarning: true,
      hasEdit: false
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Verification',
      subtitle: 'Email Verification',
      hasWarning: true,
      hasEdit: false
    },
    {
      icon: <FaCreditCard />,
      title: 'Bank Account',
      subtitle: 'Bank Account',
      hasWarning: true,
      hasEdit: false
    },
    {
      icon: <FaSignOutAlt />,
      title: 'Logout',
      subtitle: 'Sign out from your account',
      hasWarning: false,
      hasEdit: false
    }
  ];

  return (
    <div className="security-center">
      {/* Header */}
      <div className="security-header">
        <button 
          onClick={() => navigate('/account')}
          className="back-btn"
        >
          <FaArrowLeft />
        </button>
        <h1 className="security-title">SECURITY CENTER</h1>
      </div>

      {/* Security Level Card */}
      <div className="security-level-card">
        <div className="security-progress">
          <div className="progress-circle">
            <span className="progress-text">0%</span>
            <div className="progress-dot"></div>
          </div>
          <div className="security-info">
            <div className="security-level">
              <span>Security Level</span>
              <div className="lightning-bolts">
                <span>⚡</span>
                <span>⚡</span>
                <span>⚡</span>
                <span>⚡</span>
              </div>
            </div>
            <div className="login-info">
              <div>Last login IP: 241.37.177.65</div>
              <div>Last login 2025-07-30</div>
              <div>time: 20:39:22</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="verification-banner">
        <div className="banner-icon">💰</div>
        <span className="banner-text">Verify Your Account NOW and Get MYR 8.00</span>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        {quickActions.map((action, index) => (
          <div key={index} className="action-item">
            <div className="action-icon">
              {action.icon}
            </div>
            <span className="action-label">{action.label}</span>
          </div>
        ))}
      </div>

      {/* Security Items */}
      <div className="security-items">
        {securityItems.map((item, index) => (
          <div key={index} className="security-item">
            <div className="item-icon">
              {item.icon}
            </div>
            <div className="item-content">
              <div className="item-title">
                {item.title}
                {item.hasWarning && <FaExclamationTriangle className="warning-icon" />}
                {item.hasEdit && <FaEdit className="edit-icon" />}
              </div>
              <div className="item-subtitle">{item.subtitle}</div>
            </div>
            <div className="item-arrow">›</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityCenter; 