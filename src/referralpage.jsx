import React from "react";
import "./ReferralPage.css";
import { MdGroups2 } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const ReferralPage = () => {
  return (
    <div className="referral-page">
      {/* Top Alert Banner */}
      
      {/* Total Income Section */}
      <div className="income-card">
        <div className="income-top">
          <div className="income-left">
            <div className="income-label">Total Income Amount</div>
            <div className="income-value">$$$$$$</div>
          </div>
          <div className="vertical-dotted-line"></div>
          <div className="income-right">
            <button className="claim-btn">
              CLAIM <span className="claim-dot"></span>
            </button>
          </div>
        </div>
      </div>


    <div className="paid-out">
  <p>Income Paid Out</p>
  <div className="counter-row">
    <span>$</span>
    {'40,730,092'.split('').map((char, idx) => (
      <div
        className={`counter-box${char === ',' ? ' comma' : ''}`}
        key={idx}
      >
        {char}
      </div>
    ))}
  </div>
</div>


      {/* Invite Friend Section */}
      <div className="invite-box">
        <p>Invite a friend to earn</p>
        <h1>RM 88</h1>
        <p className="small">The invited friend is required to complete valid deposits</p>
        <button className="invite-btn">
          <span className="icon"><MdGroups2 /></span>
          INVITE NOW
        </button>
      </div>

      {/* Bottom Rewards Section */}
      <div className="rewards-row">
        <video className="reward-icon" autoPlay loop muted playsInline>
          <source src="/gif.mp4" type="video/mp4" width={20} height={30} />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="faq-container">
        <h2>❓ FAQ</h2>
        <div className="faq-card">
          <h3><u>Share & Earn RM88 + Commission!</u></h3>
          <h4>How to Apply:</h4>
          <ol>
            <li>
              Only available for DIS88 registered members. <span className="red">Not a member yet? <a href="#">Sign up HERE!</a></span>
            </li>
            <li>
              Log in to your DIS88 account. Find your <strong>Referral Link</strong> or <strong>Referral QR Code</strong> on your profile page under <span className="link">[Invite Friends]</span>.
            </li>
            <li>
              Invite your friends to register at DIS88 through your <strong>Referral Link</strong>.
            </li>
            <li>
              DIS88 will notify all eligible members via inbox message after the member fulfills the requirements in thirty (30) days.
            </li>
            <li>
              Kindly contact our customer service to claim your referral bonus within the week once the inbox message is received. Click <span className="red">HERE</span> to apply.
            </li>
          </ol>

          <h4>Promotion Details:</h4>
          <p><strong>A. RM88 Referral Bonus</strong></p>

          <div className="table">
            <div className="table-row table-header">
              <div>Applicable Products & Providers</div>
              <div>Referrer</div>
              <div>Referee Deposit<br />Amount and Turnover</div>
              <div>Referral Bonus</div>
              <div>Turnover</div>
            </div>
            <div className="table-row">
              <div>
                Sports / E-Sports<br />
                Slots / Fishing<br />
                Instant Win<br />
                Casino<br />
                <span className="small-text">(except Card Games & CockFight)</span>
              </div>
              <div>You</div>
              <div>
                RM 250<br />
                X5 Turnover
              </div>
              <div>RM 88</div>
              <div>5x</div>
            </div>
          </div>
          <div className="bonus-container">
            <h4><u>Bonus Play Requirements:</u></h4>
            <p>
              Referee must achieve a minimum of <strong>5x turnover</strong> and a total deposit of <strong>RM250</strong> for the referrer to be eligible to receive the <strong>RM88</strong> reward.
            </p>

            <p><strong>B. <a href="#">Referral Unlimited Commission</a></strong></p>

            <h4>Downline Level</h4>
            <p><strong>Example:</strong><br />
              Tier 1 is referring to your friend.<br />
              Tier 2 is referring to your friend of a friend.
            </p>

            <div className="table">
              <div className="table-row table-header">
                <div>Downline Level</div>
                <div>Referral Commision</div>
                <div>Turnover</div>
              </div>
              <div className="table-row">
                <div>
                  1
                </div>
                <div>0.2%</div>
                <div>
                  5x
                </div>
              </div>
              <div className="table-row">
                <div>
                  1
                </div>
                <div>20%</div>
                <div>
                  5x
                </div>
              </div>
            </div>

            <ol className="bonus-conditions">
              <li>
                Only referees who have deposited a minimum of <strong>RM100</strong> or more, will be eligible for the Direct Referral Reward.
              </li>
              <li>
                The minimum payout limit of this bonus is <strong>RM1</strong> and the maximum is <strong>RM500</strong>.
              </li>
              <li>
                The reward will be issued on every <strong>3rd</strong> of the month after verification has been done on every last day of the previous month.
              </li>
              <li>
                It will be made available on the home screen for claiming.
              </li>
              <li>
                Please claim the reward within <strong>24 hours</strong>, otherwise, it will be forfeited.
              </li>
            </ol>

            <h4>Bonus Play Requirements:</h4>
            <p>Members are required to fulfill the 5x Turnover Requirement before transfer or withdrawal can be made.</p>
            <p>Below are some calculation examples for your reference:</p>
            <p>
              Example: </p>
            <p>
              First Level Commission = (Total Valid Bet Amount of Level 1) × 0.2%
            </p>
            <p>
              Second Level Commission = (Total Valid Bet Amount of Level 2) × 0.2% × 20%
            </p>
            <p>
              Third Level Commission = (Total Valid Bet Amount of Level 3) × 0.2% × 20% × 2%</p>

            <img className="imgbox" src="/below.jpg"></img>

            <h4>Terms and Conditions:</h4>
            <ol>
              <li>
                The referee (invited friend) must:
                <ul>
                  <li>Register using the referrer's link QR code.</li>
                  <li>Deposit a <strong>minimum of RM250</strong> within <strong>30 days</strong> from the registration date</li>
                </ul>
              </li>
              <li>The referee (invited friend) must:
                <ul>
                  <li>Register using the referrer's link or QR code.</li>
                  <li>Deposit a minimum of RM250 within 30 days from the registration date.</li>
                </ul>
              </li>
              <li>Referrers will be eligible to receive a RM88 referral bonus per qualified referee.</li>
              <li>The referral bonus is subject to a 5x turnover requirement before any withdrawal can be made.</li>
              <li>Eligible products for turnover include: Sports, E-Sports, Slots, Fishing, Instant Win, and Casino, excluding Card Games and Cockfight.</li>
              <li>The maximum amount of bonus can be withdrawn per day is RM500 only.</li>
              <li>Phone number verification is required to receive any bonuses.</li>
              <li>There's no referral limit, but DIS88 may adjust program rules at any time.</li>
              <li>Overseas referral bonuses vary by region and will be converted to local currency using the current exchange rate.</li>
              <li>Cut-off time: Referees must meet deposit requirements within 30 days from sign-up.</li>
              <li>Bonuses are credited every Wednesday at 12:00 PM (GMT+8) after eligibility is confirmed.</li>
              <li>Bonus funds must only be used on supported game types. Bets outside these games won't count.</li>
              <li>Only win/loss bets are valid for turnover. Ties, voids, cancels, or opposite-side bets won't count.</li>
              <li>Promo cannot be combined with other DIS88 offers (except referral bonuses).</li>
              <li>Duplicate/fake accounts will be disqualified and bonuses forfeited.</li>
              <li>DIS88 may modify or terminate the promo without notice.</li>
              <li>By participating in this promotion, all users agree to abide by the <span className="red"><a href="#">general terms and conditions</a></span> of DIS88</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
    

};

export default ReferralPage;
