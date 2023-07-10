import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Profilepage = () => {
  const location = useLocation();
  const { name, age, mobile } = location.state || {};

  const navigate = useNavigate();
  const handleSignOut = () => {
    // Perform sign out logic here
    navigate('/login');
  };

  return (
    <div>
      {name ? (
        <div>
          <h2>Welcome, {name}!</h2>
          <p>Age: {age}</p>
          <p>Mobile: {mobile}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>No user details found.</p>
      )}
    </div>
  );
};

export default Profilepage;
