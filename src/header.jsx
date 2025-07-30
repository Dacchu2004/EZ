import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-row">
       <div className="logo">
        <img src="https://www.dis88tonight.com/dis88/img/dis88_logo.png?v=4" alt="Logo" />
        <img src="/gift-icon.png" alt="Gift" />
        <img src="/signup-icon.png" alt="Signup" />
      </div>
      <div className="header-actions">
        <div className="pulse-button-container">
        <button className="red-pulse-button">
          Sign up
        </button>
      </div>
        <a href="#" className="btn2">Login</a>
        <div className="flag-circle">
          <img src="https://d2a18plfx719u2.cloudfront.net/frontend/flags/my.png?v=1" alt="Flag" />
        </div>
      </div>
    </div>
  );
};

export default Header;
