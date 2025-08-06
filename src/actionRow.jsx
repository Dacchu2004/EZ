import './ActionRow.css';
import NewsTicker from "./announcement";
import { FaUserFriends, FaMobileAlt, FaWallet, FaMoneyBillWave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ActionRow = () => {
  const navigate = useNavigate();

  const actions = [
    { label: 'Referral', icon: FaUserFriends, action: () => navigate('/referral') },
    { label: 'App', icon: FaMobileAlt, action: () => navigate('/app') },
    { label: 'Deposit', icon: FaWallet, action: () => navigate('/deposit') },
    { label: 'Withdraw', icon: FaMoneyBillWave, action: () => navigate('/withdrawal') },
  ];

  return (
    <>
      <NewsTicker text="Breaking: Invite 1 friend and get 100THB instantly!" />
      <div className="action-row">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <div 
              className="action-item" 
              key={index}
              onClick={action.action}
              style={{ cursor: 'pointer' }}
            >
              <div className="icon-circle">
                <IconComponent className="action-icon" />
              </div>
              <span>{action.label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ActionRow;
