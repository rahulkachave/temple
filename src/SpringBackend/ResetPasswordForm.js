import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Backendcss/Forwordpass.css'
function ResetPasswordForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetStatus, setResetStatus] = useState('');
  const navigate = useNavigate();
  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/name/resetpass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
        
      });
      navigate('/ResetPasswordForm');
      if (response.ok) {
        setResetStatus('Password reset successfully');
      } else {
        setResetStatus('Error occurred during password reset');
      }
    } catch (error) {
      console.error('Error occurred during the request:', error);
      setResetStatus('Error occurred during the request');
    }
  };

  return (
    <div className='forgotpass'>
      <form onSubmit={handleResetPassword}>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          New Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Reset Password</button>
        <Link   to={'/Login'}>Login here</Link>
      </form>
      {resetStatus && <p>{resetStatus}</p>}
    </div>
  );
}

export default ResetPasswordForm;
