import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
import Header from "../header";

const Navbar = () => {
  return (
    <>
      <div className="top-banner">
        Refer a friend and earn 88.00 MYR for each friend you invite
        <button className="redeem-btn">Redeem</button>
        <span className="close-icon"> <FaTimes /> </span>
      </div>

      {/* Top Header with Logo and Icons */}
      <div className="header-container">
        {/* <div className="header">
          <div className="logo">
            <img src="/logo.png" alt="DIS88" />
            <img src="/gift-icon.png" alt="Gift" />
            <img src="/signup-icon.png" alt="Signup" />
          </div>
          <div className="header-icons">
            <button className="btn red">SIGN UP</button>
            <button className="btn outline">LOGIN</button>
            <img src="/flag.jpg" className="flag" alt="Flag" />
          </div>
        </div> */}
        <Header />
        <div>
          <h2 className="section-title">INVITE FRIENDS</h2>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs">
        <NavLink to="/referral" className={({ isActive }) => isActive ? "tab active" : "tab"}>Invitation</NavLink>
        <NavLink to="/Mydata" className={({ isActive }) => isActive ? "tab active" : "tab"}>My Data</NavLink>
        <NavLink to="/rewards" className={({ isActive }) => isActive ? "tab active" : "tab"}>Rewards Center</NavLink>
        <NavLink to="/record" className={({ isActive }) => isActive ? "tab active" : "tab"}>Record</NavLink>
        <NavLink to="/invitee-list" className={({ isActive }) => isActive ? "tab active" : "tab"}>Invitee List</NavLink>
      </div>
    </>
  );
};

export default Navbar;
