import React, { useState } from 'react';
import './Mydata.css';

const Mydata = () => {
  const [title, setTitle] = useState("summary");

  const cards = [
    { title: "Yesterday's Register", value: '0' },
    { title: "Yesterday's Active Member", value: '0' },
    { title: "Yesterday's Team Valid Bet", value: 'MYR 0.00' },
    { title: "Yesterday's Invitation Rewards", value: 'MYR 0.00' },
    { title: "Yesterday's Team Betting Rebate", value: 'MYR 0.00' },
    { title: "Yesterday's Team Deposit", value: 'MYR 0.00' },
    { title: "Yesterday's Team Win/Loss", value: 'MYR 0.00' },
  ];

  return (
    <div className="overview-container">
      <h2 className="overview-title">Overview:</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <p className="card-title">{card.title}</p>
            <p className="card-value">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="cardd">
        <h2>Data Dashboard:</h2>
         <div className="tab-buttons">
        <button
          className={`tab-btn ${title === "summary" ? "active" : ""}`}
          onClick={() => setTitle("summary")}
        >
          Summary
        </button>
        <button
          className={`tab-btn ${title === "details" ? "active" : ""}`}
          onClick={() => setTitle("details")}
        >
          Details
        </button>
      </div>
       {title === "summary" && (
        <div className="summary-box">
          <div className="income-bar">Today's Income: MYR 0</div>
          <div className="summary-grid">
            <div className="summary-item">
              <p>Registers</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Valid Invitees</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Depositors</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Invitation Rewards</p>
              <strong>MYR 0.00</strong>
            </div>
            <div className="summary-item">
              <p>Achievement Rewards</p>
              <strong>MYR 0.00</strong>
            </div>
            <div className="summary-item">
              <p>Betting Rebate</p>
              <strong>MYR 0.00</strong>
            </div>
          </div>
           <div className="income-bar">Today's Income: MYR 0</div>
          <div className="summary-grid">
            <div className="summary-item">
              <p>Registers</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Valid Invitees</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Depositors</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Invitation Rewards</p>
              <strong>MYR 0.00</strong>
            </div>
            <div className="summary-item">
              <p>Achievement Rewards</p>
              <strong>MYR 0.00</strong>
            </div>
            <div className="summary-item">
              <p>Betting Rebate</p>
              <strong>MYR 0.00</strong>
            </div>
          </div>
        </div>
      )}

      {/* Details Section (Placeholder) */}
      {title == "details" && (
        <div className="summary-box">
         <div className="income-bar">Today's Income: MYR 0</div>
          <div className="summary-grid">
            <div className="summary-item">
              <p>Registers</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Valid Invitees</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Depositors</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Invitation Rewards</p>
              <strong>MYR 0.00</strong>
            </div>
            <div className="summary-item">
              <p>Achievement Rewards</p>
              <strong>MYR 0.00</strong>
            </div>
            <div className="summary-item">
              <p>Betting Rebate</p>
              <strong>MYR 0.00</strong>
            </div>
          </div>
           <div className="income-bar">Today's Income: MYR 0</div>
          <div className="summary-grid">
            <div className="summary-item">
              <p>Registers</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Valid Invitees</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Depositors</p>
              <strong>0</strong>
            </div>
            <div className="summary-item">
              <p>Invitation Rewards</p>
              <strong>MYR 0.00</strong>
            </div>
            <div className="summary-item">
              <p>Achievement Rewards</p>
              <strong>MYR 0.00</strong>
            </div>
            <div className="summary-item">
              <p>Betting Rebate</p>
              <strong>MYR 0.00</strong>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Mydata;