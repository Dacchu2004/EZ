import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header-row">
      <div className="logo">
        <img src="https://www.dis88tonight.com/dis88/img/dis88_logo.png?v=4" alt="Logo" />
        <img src="/gift-icon.png" alt="Gift" />
        <img src="/signup-icon.png" alt="Signup" />
      </div>
      <div className="header-right">
        <button className="header-signup" onClick={() => navigate('/signup')}>SIGN UP</button>
        <button className="header-login" onClick={() => navigate('/login')}>LOGIN</button>
        <div className="header-flag">
          <img src="/public/flag.jpg" alt="MY Flag" />
        </div>
      </div>
    </header>
  );
};

export default Header;
