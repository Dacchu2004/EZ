import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTimes, 
  FaHome, 
  FaGift, 
  FaGamepad, 
  FaFire, 
  FaBook, 
  FaCrown,
  FaTicketAlt,
  FaDice,
  FaVideo,
  FaFootballBall,
  FaTrophy,
  FaCoins,
  FaPlayCircle,
  FaFish,
  FaInfoCircle,
  FaEnvelope,
  FaBlog,
  FaGlobe,
  FaSignOutAlt,
  FaUsers,
  FaTag
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: FaGift, label: 'Refer And Earn', path: '/referral', highlight: true },
    { icon: FaGamepad, label: 'Lucky Spin', path: '/lucky-spin', highlight: true },
    { icon: FaBook, label: 'Mission Diary', path: '/mission-diary', highlight: true },
    { icon: FaFire, label: 'Angpow', path: '/angpow', highlight: true },
    { icon: FaCrown, label: 'VIP', path: '/vip' },
    { icon: FaTag, label: 'Promotion', path: '/promotion' },
    { icon: FaTicketAlt, label: 'Redeem Code', path: '/redeem', fire: true },
    { icon: FaDice, label: 'Slot', path: '/slot' },
    { icon: FaVideo, label: 'Live Casino', path: '/live-casino' },
    { icon: FaGamepad, label: '7-11', path: '/7-11' },
    { icon: FaFire, label: 'Fast Game', path: '/fast-game', red: true },
    { icon: FaFish, label: 'Fishing', path: '/fishing' },
    { icon: FaFootballBall, label: 'Sports', path: '/sports' },
    { icon: FaTrophy, label: 'Esport', path: '/esport' },
    { icon: FaCoins, label: 'Lottery', path: '/lottery' },
    { icon: FaPlayCircle, label: 'Card Game', path: '/card-game' },
    { icon: FaGamepad, label: 'Cockfight', path: '/cockfight' },
    { icon: FaUsers, label: 'Affiliate', path: '/affiliate' },
    { icon: FaInfoCircle, label: 'Info Center', path: '/info-center' },
    { icon: FaEnvelope, label: 'Contact Us', path: '/contact' },
    { icon: FaBlog, label: 'Blog', path: '/blog' },
    { icon: FaGlobe, label: 'Language', path: '/language' },
    { icon: FaSignOutAlt, label: 'Logout', path: '/logout' }
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src="/logo.png" alt="DIS88" className="logo-image" />
            <span className="logo-text">DIS88</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Home Button */}
        <Link to="/" className="home-btn" onClick={onClose}>
          <FaHome />
          <span>Home</span>
        </Link>

        {/* Menu Items */}
        <div className="sidebar-menu">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link 
                key={index}
                to={item.path} 
                className={`menu-item ${item.highlight ? 'highlight' : ''} ${item.red ? 'red' : ''}`}
                onClick={onClose}
              >
                <div className="menu-item-content">
                  <IconComponent className="menu-icon" />
                  <span className="menu-label">{item.label}</span>
                  {item.fire && <span className="fire-icon">🔥</span>}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Logo */}
        <div className="sidebar-bottom">
          <div className="bottom-logo">
            <img src="/logo.png" alt="DIS88" className="bottom-logo-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
