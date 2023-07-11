import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Profilepage = () => {
  // const location = useLocation();
  // const { email, age, mobile } = location.state || {};
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    
    navigate('/login');
  };

  return (
    <div>
      {userData ? (
        <div>
          <h2>Welcome, {userData.name}!</h2>
          <p>Email: {userData.email}</p>
          <p>Gender: {userData.gender}</p>
          <button className='btn btn-success' onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <p>No user details found.</p>
      )}
    </div>
  );
};

export default Profilepage;
