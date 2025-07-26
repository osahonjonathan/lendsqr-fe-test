import { useEffect, useState } from 'react';
import UserTabs from './userTab';

import { useNavigate } from 'react-router-dom';
import type { IUserDetails } from '../../model/user';
import UserDetails from './userDetails';

const UserDetailsPage = () => {
  const [details, setDetails] = useState<IUserDetails | null>(null);

  useEffect(() => {
    const storedDetails = localStorage.getItem('userDetails');
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails));
    }
  }, []);

  const [activeTab, setActiveTab] = useState('General Details');
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/app/users');
  };

  if (!details) return <p>Loading user details...</p>;

  return (
    <div className="user-page">
      <span>
        <button className="btn-back" onClick={goBack}>
          ← Back to Users
        </button>
      </span>

      <div className="header">
        <h2>User Details</h2>
        <div className="actions">
          <button className="btn danger">Blacklist User</button>
          <button className="btn success">Activate User</button>
        </div>
      </div>

      <div className="profile-card">
        <div className="user-summary">
          <div className="avatar"></div>
          <div className="info">
            <h3>John Doe</h3>
            <p>ACC-0001 / Access Bank</p>
          </div>
          <div className="tier">
            <span>User’s Tier</span>
            <div className="stars">★★☆</div>
          </div>
          <div className="balance">
            <h4>₦500,000.00</h4>
            <p>9912345678 / Access Bank</p>
          </div>
        </div>
        <UserTabs active={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === 'General Details' ? (
        <UserDetails userDetails={details} />
      ) : (
        <div className="placeholder">{activeTab} content coming soon...</div>
      )}
    </div>
  );
};

export default UserDetailsPage;
