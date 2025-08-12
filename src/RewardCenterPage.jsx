import React from 'react';
import { FaArrowLeft, FaShare, FaCalendarCheck, FaGift, FaCoins, FaBullseye, FaSpinner, FaEnvelope, FaCrown, FaUserFriends } from 'react-icons/fa';
import './RewardCenterPage.css';

const RewardCenterPage = () => {
  const rewardItems = [
    {
      id: 1,
      icon: <FaCalendarCheck className="reward-icon" />,
      text: "Sign-In Task",
      buttonText: "Claim",
      buttonType: "claim",
      hasNotification: true
    },
    {
      id: 2,
      icon: <FaGift className="reward-icon" />,
      text: "Bonus",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 3,
      icon: <FaCoins className="reward-icon" />,
      text: "Rebate",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 4,
      icon: <FaBullseye className="reward-icon" />,
      text: "Mission Diary",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 5,
      icon: <FaSpinner className="reward-icon" />,
      text: "Lucky Spin",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 6,
      icon: <FaEnvelope className="reward-icon" />,
      text: "Angpow",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 7,
      icon: <FaCrown className="reward-icon" />,
      text: "VIP",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 8,
      icon: <FaUserFriends className="reward-icon" />,
      text: "Invite Friends",
      buttonText: "View",
      buttonType: "view"
    }
  ];

  const handleBack = () => {
    window.history.back();
  };

  const handleShare = () => {
    // Share functionality can be implemented here
    console.log('Share clicked');
  };

  return (
    <div className="reward-center-page">
      {/* Header */}
      <div className="reward-header">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft />
        </button>
        <h1 className="reward-title">REWARD CENTER</h1>
        <button className="share-button" onClick={handleShare}>
          <div className="share-icon-container">
            <div className="coin-icon">💰</div>
            <div className="people-icon">👥</div>
          </div>
          <span>Share</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="reward-content">
        {rewardItems.map((item) => (
          <div key={item.id} className="reward-item">
            <div className="reward-item-left">
              <div className="reward-icon-container">
                {item.icon}
              </div>
              <span className="reward-text">{item.text}</span>
            </div>
            <button 
              className={`reward-button ${item.buttonType}`}
              onClick={() => console.log(`${item.text} clicked`)}
            >
              {item.buttonText}
              {item.hasNotification && (
                <div className="notification-dot">⭐</div>
              )}
            </button>
          </div>
        ))}
      </div>


    </div>
  );
};

export default RewardCenterPage;
