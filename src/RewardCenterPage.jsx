import React from 'react';
import { FaArrowLeft, FaShare, FaStar, FaInfinity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './RewardCenterPage.css';

const RewardCenterPage = () => {
  const navigate = useNavigate();

  const rewardCategories = [
    {
      id: 1,
      name: "Sign-In Task",
      icon: "📅",
      buttonText: "Claim",
      buttonType: "claim",
      hasStar: true
    },
    {
      id: 2,
      name: "Bonus",
      icon: "🎁",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 3,
      name: "Rebate",
      icon: "🪙",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 4,
      name: "Mission Diary",
      icon: "🎯",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 5,
      name: "Lucky Spin",
      icon: "🎰",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 6,
      name: "Angpow",
      icon: "🧧",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 7,
      name: "VIP",
      icon: "🏆",
      buttonText: "View",
      buttonType: "view"
    },
    {
      id: 8,
      name: "Invite Friends",
      icon: "💰",
      buttonText: "View",
      buttonType: "view"
    }
  ];

  const handleBack = () => {
    navigate(-1);
  };

  const handleShare = () => {
    // Share functionality can be implemented here
    console.log('Share clicked');
  };

  const handleCategoryClick = (category) => {
    if (category.name === 'Rebate') {
      navigate('/rebate');
      return;
    }
    if (category.name === 'Mission Diary') {
      navigate('/mission-diary');
      return;
    }
    if (category.name === 'VIP') {
      navigate('/vip');
      return;
    }
    if (category.buttonType === 'claim') {
      console.log('Claiming reward for:', category.name);
    } else {
      console.log('Viewing:', category.name);
    }
  };

  return (
    <div className="reward-center-page">
      {/* Reward Center Header */}
      <div className="reward-header">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft />
        </button>
        <h1 className="page-title">REWARD CENTER</h1>
        <button className="share-button" onClick={handleShare}>
          <FaShare />
          <span className="share-text">Share</span>
          <span className="coin-icon">🪙</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="reward-content">
        <div className="reward-categories">
          {rewardCategories.map((category) => (
            <div key={category.id} className="reward-category-card">
              <div className="category-icon">
                {category.icon}
              </div>
              <div className="category-name">
                {category.name}
              </div>
              <div className="category-button-container">
                <button
                  className={`category-button ${category.buttonType}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.buttonText}
                </button>
                {category.hasStar && (
                  <div className="star-overlay">
                    <FaStar />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fab">
        <FaInfinity />
      </div>
    </div>
  );
};

export default RewardCenterPage;
