import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DepositPage.css';

// Styles (mobile-first, responsive)
// ... existing code ...

const paymentMethods = [
  { label: 'Fast Deposit', icon: '/public/gift-icon.png' },
  { label: 'Bank Transfer', icon: '/public/logo.png' },
  { label: 'E-Wallet', icon: '/public/logo.png' },
  { label: 'Telco', icon: '/public/logo.png' },
  { label: 'Fpay Crypto', icon: '/public/logo.png' },
];

const depositChannels = [
  { label: 'RapidPay', icon: '/public/logo.png' },
  { label: 'PAYESSENCEPAY', icon: '/public/logo.png' },
  { label: 'FPAY', icon: '/public/logo.png' },
  { label: 'FPX-ALLIANCE', icon: '/public/logo.png' },
  { label: 'FPX-AMBANK', icon: '/public/logo.png' },
  { label: 'FPX-BSN', icon: '/public/logo.png' },
  { label: 'FPX-CIMB', icon: '/public/logo.png' },
  { label: 'FPX-DUITNOW', icon: '/public/logo.png' },
  { label: 'FPX-HLB', icon: '/public/logo.png' },
];

const quickAmounts = [500, 1000, 3000, 5000, 8000, 10000];

const DepositPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('Fast Deposit');
  const [selectedChannel, setSelectedChannel] = useState('RapidPay');
  const [amount, setAmount] = useState(0);
  const [selectedQuick, setSelectedQuick] = useState(null);

  // Placeholder values for quota, fees, receivable
  const quotaMin = 30;
  const quotaMax = 50000;
  const processingFee = 0;
  const receivable = amount;

  return (
    <div className="deposit-page">
      {/* Top Bar with Back Arrow and Title */}
      <div className="deposit-header">
        <button className="back-arrow" onClick={() => navigate('/')}>←</button>
        <div className="deposit-header-title-group">
          <span className="deposit-title">ONLINE PAYMENT</span>
          <span className="deposit-records">Deposit Records</span>
        </div>
      </div>
      <div className="deposit-scroll-content">
        {/* Tabs */}
        <div className="deposit-tabs">
          <span className="active">Deposit</span>
          <span onClick={() => navigate('/withdrawal')}>Withdrawal</span>
        </div>
        {/* Payment Method */}
        <div className="section-title">Payment Method</div>
        <div className="payment-methods">
          {paymentMethods.map((method) => (
            <div
              key={method.label}
              className={`method-card${selectedMethod === method.label ? ' selected' : ''}`}
              onClick={() => setSelectedMethod(method.label)}
            >
              <img src={method.icon} alt={method.label} className="method-icon" />
              <span>{method.label}</span>
            </div>
          ))}
        </div>
        {/* Deposit Channel */}
        <div className="section-title">Deposit Channel</div>
        <div className="deposit-channels">
          {depositChannels.map((channel) => (
            <div
              key={channel.label}
              className={`channel-card${selectedChannel === channel.label ? ' selected' : ''}`}
              onClick={() => setSelectedChannel(channel.label)}
            >
              <img src={channel.icon} alt={channel.label} className="channel-icon" />
              <span>{channel.label}</span>
            </div>
          ))}
        </div>
        {/* Deposit Quota and Amount Section */}
        <div className="deposit-info-section">
          <div className="deposit-quota-row">
            <span>Deposit Quota</span>
            <span className="quota-red">MYR {quotaMin.toFixed(2)} - MYR {quotaMax.toLocaleString(undefined, {minimumFractionDigits:2})}</span>
          </div>
          <div className="deposit-input-row">
            <span>MYR</span>
            <input
              type="number"
              className="deposit-amount-input"
              value={amount}
              min={0}
              onChange={e => {
                setAmount(Number(e.target.value));
                setSelectedQuick(null);
              }}
            />
          </div>
          <div className="deposit-fee-row">
            <span>Processing Fees</span>
            <span>0.00</span>
          </div>
          <div className="deposit-receivable-row">
            <span>Receivable Amount</span>
            <span className="quota-red">MYR {receivable.toFixed(2)}</span>
          </div>
          <div className="quick-amounts-row">
            {quickAmounts.map((amt, idx) => (
              <button
                key={amt}
                className={`quick-amount-btn${selectedQuick === idx ? ' selected' : ''}`}
                onClick={() => {
                  setAmount(amt);
                  setSelectedQuick(idx);
                }}
              >
                {amt.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
        {/* Submit Button */}
        <button className="deposit-submit">SUBMIT</button>
        <div style={{height: '80px'}}></div> {/* Spacer for bottom nav */}
      </div>
    </div>
  );
};

export default DepositPage;