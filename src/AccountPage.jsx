import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountPage.css';
import { 
  FaCopy, 
  FaCheck, 
  FaInfinity, 
  FaSyncAlt, 
  FaMoneyBillWave, 
  FaHandHoldingUsd, 
  FaFileAlt, 
  FaHistory,
  FaUserShield,
  FaLock,
  FaWallet,
  FaUniversity,
  FaSignOutAlt,
  FaRedo,
  FaStar,
  FaBell,
  FaHandshake
} from 'react-icons/fa';

const AccountPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/');
  };

  const quickActions = [
    { icon: <FaMoneyBillWave />, label: 'Deposit' },
    { icon: <FaHandHoldingUsd />, label: 'Withdrawal' },
    { icon: <FaFileAlt />, label: 'Statement' },
    { icon: <FaHistory />, label: 'Bet History' }
  ];

  const allMenuItems = [
    { icon: <FaUserShield />, label: 'My Profile', action: () => navigate('/profile') },
    { icon: <FaLock />, label: 'Security Center', action: () => navigate('/security') },
    { icon: <FaWallet />, label: 'Wallet', action: () => navigate('/wallet') },
    { icon: <FaUniversity />, label: 'Bank Account', action: () => navigate('/bank-account') },
    { icon: <FaStar />, label: 'Reward Center', action: () => navigate('/reward-center') },
    { icon: <FaBell />, label: 'Notifications', action: () => navigate('/notifications'), notificationCount: 1 },
    { icon: <FaHandshake />, label: 'Affiliate', action: () => navigate('/affiliate') }
  ];

  return (
    <div className="account-page">
      {/* Back Button */}
      <div className="account-back-header">
        <button className="back-button" onClick={handleBackClick}>
          ←
        </button>
      </div>

      {/* Red Header Section */}
      <div className="account-header">
        <div className="user-info">
          <div className="user-details">
            <h2 className="user-name">Hi, AYANKK512</h2>
            <div className="user-id-section">
              <span className="user-id">ID: DI3F8D6</span>
              <button className="copy-btn">
                <FaCopy />
              </button>
            </div>
            <div className="account-level-section">
              <span className="account-level">REGULAR</span>
              <div className="level-badge">
                <FaInfinity />
                <span>Regular</span>
              </div>
            </div>
          </div>
          <div className="header-actions">
            <div className="status-badge">
              <FaCheck />
              <span>Pending</span>
            </div>
            <button className="logout-btn">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>
        
        <div className="credit-section">
          <span className="credit-label">Credit</span>
          <div className="credit-amount">
            <span className="amount">MYR 2.80</span>
            <button className="refresh-btn">
              ↻
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
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

      {/* All Menu Items Section */}
      <div className="menu-section">
        {allMenuItems.map((item, index) => (
          <div 
            key={index} 
            className="menu-item"
            onClick={item.action}
            style={{ cursor: item.action ? 'pointer' : 'default' }}
          >
            <div className="menu-icon">
              {item.icon}
            </div>
            <span className="menu-label">{item.label}</span>
            {item.notificationCount && (
              <div className="notification-badge">
                {item.notificationCount}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountPage; 