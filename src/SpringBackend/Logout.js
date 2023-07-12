import React, { useState } from 'react';
import axios from 'axios';

const Logout = () => {
  const [error, setError] = useState('');
  
  const handleLogout = async () => {

    try {
      const response = await axios.post('http://localhost:8080/name/delete',
      {
        
      });
      console.log(response.data);
      localStorage.clear();
    alert("Your account has been permanently deleted.");
   
    } catch (error) {
      setError('Please check your account deletion');
    }
  };

  return (
    <div>
    
  
      <button type="submit" className="btnlogout" onClick={handleLogout}>
        Logout
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Logout;
