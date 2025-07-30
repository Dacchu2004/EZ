import React from 'react';

export default function Footer() {
  return (
    <>
      <style>
        {`
        .footer-container {
          background-color: #000;
          color: #a0aec0;
          padding: 2rem 1rem;
          font-family: 'Inter', sans-serif;
        }

        .footer-grid {
          max-width: 80rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .footer-section-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.75rem;
        }

        .footer-text {
          font-size: 0.75rem;
          line-height: 1.4;
        }

        .footer-icon-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .footer-img {
          height: 1.5rem;
          width: auto;
          border-radius: 0.25rem;
        }

        .footer-img-round {
          height: 1.8rem;
          width: 1.8rem;
          border-radius: 9999px;
        }

        .footer-social-link {
          color: #a0aec0;
          transition: color 0.2s ease-in-out;
        }

        .footer-social-link:hover {
          color: #fff;
        }

        .footer-social-icon {
          width: 1.2rem;
          height: 1.2rem;
        }

        .footer-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .footer-dis88-logo {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
        }

        .dis88-logo-img {
          height: 3.5rem;
          width: auto;
          border-radius: 9999px;
        }
        `}
      </style>

      <footer className="footer-container">
        <div className="footer-grid">
          {/* About DIS88 */}
          <div>
            <h3 className="footer-section-title">About DIS88</h3>
            <p className="footer-text">
              DIS88 is licensed and regulated by the Government of Curaçao and operates under the master license of Gaming Services Provider N.V. #365/JAZ.
            </p>
          </div>
          {/* Gaming License */}
          <div>
            <h3 className="footer-section-title">Gaming License</h3>
            <div className="footer-icon-group">
              <img src="https://placehold.co/60x30/000000/ffffff?text=GC+Logo" alt="Gaming Curacao Logo" className="footer-img" />
              <span className="footer-text">GAMING CURACAO</span>
            </div>
          </div>
          {/* Payment Method */}
          <div>
            <h3 className="footer-section-title">Payment Method</h3>
            <div className="footer-icon-group">
              <img src="https://placehold.co/60x30/000000/ffffff?text=Bank" alt="Bank Deposit Icon" className="footer-img" />
              <img src="https://placehold.co/60x30/000000/ffffff?text=Pay" alt="Pay Icon" className="footer-img" />
            </div>
          </div>
          {/* Empty for grid alignment */}
          <div></div>
        </div>
        {/* Certification & Security row */}
        <div className="footer-two-col">
          <div>
            <h3 className="footer-section-title">Certification</h3>
            <div className="footer-icon-group">
              <img src="https://placehold.co/50x25/000000/ffffff?text=bmm" alt="bmm" className="footer-img" />
              <img src="https://placehold.co/50x25/000000/ffffff?text=GoDaddy" alt="GoDaddy" className="footer-img" />
              <img src="https://placehold.co/50x25/000000/ffffff?text=iTech" alt="iTech" className="footer-img" />
              <img src="https://placehold.co/50x25/000000/ffffff?text=Labs" alt="Labs" className="footer-img" />
              <img src="https://placehold.co/50x25/000000/ffffff?text=Cert" alt="Cert" className="footer-img" />
            </div>
          </div>
          <div>
            <h3 className="footer-section-title">Security</h3>
            <div className="footer-icon-group">
              <img src="https://placehold.co/50x25/000000/ffffff?text=iovation" alt="Iovation" className="footer-img" />
              <img src="https://placehold.co/50x25/000000/ffffff?text=ThreatMetrix" alt="ThreatMetrix" className="footer-img" />
            </div>
          </div>
        </div>
        {/* Follow Us & Responsible Gaming row */}
        <div className="footer-two-col">
          <div>
            <h3 className="footer-section-title">Follow Us</h3>
            <div className="footer-icon-group">
              <a href="#" className="footer-social-link">
                <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link">
                <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
              <a href="#" className="footer-social-link">
                <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-.31-.157-.753-.285-1.157-.333C17.486 2.05 12 2 12 2s-5.486 0-6.458.851c-.404.048-.847.176-1.157.333C3.486 3.682 3 4.416 3 5.4v13.2c0 .984.486 1.718 1.385 2.116.31.157.753.285 1.157.333C6.514 22 12 22 12 22s5.486 0 6.458-.851c.404-.048.847-.176 1.157-.333C20.514 20.318 21 19.584 21 18.6V5.4c0-.984-.486-1.718-1.385-2.116zM9.545 15.568V8.432L15.82 12l-6.275 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-section-title">Responsible Gaming</h3>
            <div className="footer-icon-group">
              <img src="https://placehold.co/30x30/000000/ffffff?text=18+" alt="18+" className="footer-img-round" />
              <img src="https://placehold.co/30x30/000000/ffffff?text=G" alt="G" className="footer-img-round" />
              <img src="https://placehold.co/80x30/000000/ffffff?text=Aware" alt="Aware" className="footer-img" />
            </div>
          </div>
        </div>
        <div className="footer-dis88-logo">
          <img src="https://placehold.co/60x60/000000/ffffff?text=DIS88" alt="DIS88 Logo" className="dis88-logo-img" />
        </div>
      </footer>
    </>
  );
}
