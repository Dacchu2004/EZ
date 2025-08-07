import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotificationPage.css';

const NotificationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="notification-page">
      <div className="notification-header">
        <button className="back-arrow" onClick={() => navigate(-1)}>←</button>
        <span className="notification-title">NOTIFICATIONS</span>
      </div>
      <div className="notification-content">
        <div className="notification-info">Notification will be automatically deleted after 30 days</div>
        <div className="notification-empty">No Record</div>
      </div>
    </div>
  );
};

export default NotificationPage;