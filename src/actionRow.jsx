import './ActionRow.css';
import NewsTicker from "./announcement";
import { FaUserFriends, FaMobileAlt, FaWallet, FaMoneyBillWave } from 'react-icons/fa';

const actions = [
  { label: 'Referral', icon: FaUserFriends },
  { label: 'App', icon: FaMobileAlt },
  { label: 'Deposit', icon: FaWallet },
  { label: 'Withdraw', icon: FaMoneyBillWave },
];

const ActionRow = () => {
  return (
    <>
      <NewsTicker text="Breaking: Invite 1 friend and get 100THB instantly!" />
      <div className="action-row">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <div className="action-item" key={index}>
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
