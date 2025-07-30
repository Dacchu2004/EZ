import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaArrowLeft } from "react-icons/fa";

export default function Profile() {
  const navigate = useNavigate();
  
  // State for editable fields
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [editing, setEditing] = useState({ email: false, dob: false });
  const [temp, setTemp] = useState({ email: "", dob: "" });

  // Handlers
  const startEdit = (field) => {
    setEditing((e) => ({ ...e, [field]: true }));
    setTemp((t) => ({ ...t, [field]: field === "email" ? email : dob }));
  };
  const cancelEdit = (field) => {
    setEditing((e) => ({ ...e, [field]: false }));
  };
  const saveEdit = (field) => {
    if (field === "email") setEmail(temp.email);
    if (field === "dob") setDob(temp.dob);
    setEditing((e) => ({ ...e, [field]: false }));
  };

  return (
    <>
      <style>{`
        .profile-container {
          background: #000;
          min-height: 100vh;
          color: #fff;
          padding: 20px 8px 24px 8px;
          font-family: 'Inter', Arial, sans-serif;
        }
        .profile-title {
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 1.2rem;
        }
        .profile-tabs {
          display: flex;
          gap: 18px;
          margin-bottom: 1.5rem;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
        .profile-tab {
          border: 2px solid #fff;
          border-radius: 50vw;
          padding: 14px 24px;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 500;
          background: #000;
          min-width: 110px;
          text-align: center;
          transition: border 0.2s, color 0.2s;
        }
        .profile-tab.active {
          box-shadow: 0 0 0 2px #c00 inset;
          color: #fff;
          border-color: #c00;
        }
        .profile-warning {
          background: #faebdd;
          color: #c00;
          border-radius: 10px;
          padding: 10px 12px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          font-size: 1rem;
          font-weight: 500;
        }
        .profile-warning-icon {
          font-size: 1.2rem;
          margin-right: 8px;
        }
        .profile-warning-link {
          color: #c00;
          text-decoration: underline;
        }
        .profile-fields {
          max-width: 500px;
          margin: 0 auto;
        }
        .profile-field {
          margin-bottom: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .profile-field-label {
          color: #bbb;
          font-size: 0.98rem;
          margin-bottom: 2px;
        }
        .profile-field-value {
          font-size: 1.15rem;
          font-weight: 400;
          word-break: break-all;
        }
        .profile-field-action {
          margin-left: 8px;
        }
        .profile-verify-btn {
          background: #c00;
          color: #fff;
          border: none;
          border-radius: 7px;
          padding: 3px 14px;
          font-weight: 500;
          font-size: 0.98rem;
          cursor: pointer;
        }
        .profile-edit-icon {
          color: #c00;
          font-size: 1.1rem;
          vertical-align: middle;
        }
        .profile-edit-input {
          font-size: 1.05rem;
          padding: 2px 8px;
          border-radius: 5px;
          border: 1px solid #ccc;
          margin-right: 6px;
        }
        .profile-edit-btn {
          background: #c00;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 2px 10px;
          font-size: 0.95rem;
          margin-left: 2px;
          cursor: pointer;
        }
        .profile-cancel-btn {
          background: #444;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 2px 10px;
          font-size: 0.95rem;
          margin-left: 2px;
          cursor: pointer;
        }
        @media (max-width: 600px) {
          .profile-tabs {
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-start;
          }
          .profile-tab {
            font-size: 0.95rem;
            padding: 10px 12px;
            min-width: 90px;
          }
          .profile-title {
            font-size: 1.2rem;
          }
          .profile-fields {
            max-width: 100%;
          }
          .profile-field-value {
            font-size: 0.98rem;
          }
        }
      `}</style>
      <div className="profile-container">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <button 
            onClick={() => navigate('/account')}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '1.2rem',
              cursor: 'pointer',
              marginRight: '1rem',
              padding: '8px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FaArrowLeft />
          </button>
          <h1 className="profile-title" style={{ margin: 0 }}>MY ACCOUNT</h1>
        </div>
        {/* Warning Banner */}
        <div className="profile-warning">
          <span className="profile-warning-icon">⚠️</span>
          <span style={{ color: "#222" }}>
            Verify Your Profile Now!{' '}
            <a href="#" className="profile-warning-link">Click Here</a>
          </span>
        </div>
        {/* Profile Info */}
        <div className="profile-fields">
          <ProfileField label="Username" value="ayankk512" />
          <ProfileField label="Level Name" value="Regular" />
          <ProfileField label="Real Name" value="ayank" />
          <ProfileField label="Contact Number" value="+608******8066" action={<button className="profile-verify-btn">Verify</button>} />
          {/* Editable Email */}
          <ProfileField
            label="Email"
            value={editing.email ? (
              <>
                <input
                  className="profile-edit-input"
                  type="email"
                  value={temp.email}
                  placeholder="Enter email"
                  onChange={e => setTemp(t => ({ ...t, email: e.target.value }))}
                />
                <button className="profile-edit-btn" onClick={() => saveEdit("email")}>Save</button>
                <button className="profile-cancel-btn" onClick={() => cancelEdit("email")}>Cancel</button>
              </>
            ) : (email || "-")}
            action={editing.email ? null : <FaEdit className="profile-edit-icon" onClick={() => startEdit("email")} style={{ cursor: "pointer" }} />}
          />
          {/* Editable DOB */}
          <ProfileField
            label="Date of Birth"
            value={editing.dob ? (
              <>
                <input
                  className="profile-edit-input"
                  type="date"
                  value={temp.dob}
                  onChange={e => setTemp(t => ({ ...t, dob: e.target.value }))}
                />
                <button className="profile-edit-btn" onClick={() => saveEdit("dob")}>Save</button>
                <button className="profile-cancel-btn" onClick={() => cancelEdit("dob")}>Cancel</button>
              </>
            ) : (dob || "-")}
            action={editing.dob ? null : <FaEdit className="profile-edit-icon" onClick={() => startEdit("dob")} style={{ cursor: "pointer" }} />}
          />
          <ProfileField label="Registered" value={<span style={{ fontWeight: 600 }}>2024-11-15 12:43:54</span>} />
          <ProfileField label="Last Login" value={<span style={{ fontWeight: 600 }}>2025-07-29 20:38:06</span>} />
        </div>
      </div>
    </>
  );
}

function ProfileField({ label, value, action }) {
  return (
    <div className="profile-field">
      <div>
        <div className="profile-field-label">{label}</div>
        <div className="profile-field-value">{value}</div>
      </div>
      {action && <div className="profile-field-action">{action}</div>}
    </div>
  );
} 