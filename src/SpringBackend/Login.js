import React, { useState } from 'react';
import './Backendcss/Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setLogInEmail] = useState('');
  const [password, setLogInPass] = useState('');
  const [forgotpass, setForgotpass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    setForgotpass(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError('Please fill in both email and password');
      return;
    }
    
    if(!email){
      toast.error("Please enter valid Email")
      return;
    }
    if(!password){
      toast.error("Please enter valid password")
      return;
    }
    if (email !== password ) {
      toast.error("Passwords do not match. Please enter the correct password.");
      return;
    }
    

    try {
      const response = await axios.post('http://localhost:8080/name/login', {
        email,
        password,
      });
     setLogInEmail("");
      if (response.data) {
        console.log(response.data);
        navigate('/Home');
      } else {
        setError('Please check your email and password');
      }
    } catch (error) {
      setError('please check  login');
    }
  };

  return (
    <section className="login">
      <div className="formlogin">
        <h2 className="h2login">Create an account</h2>
        <div className="Inputlogin">
          <label>Your Email</label>
          <input
            type="email"
            placeholder="email"
            className="Inputsi"
            value={email}
            onChange={(e) => setLogInEmail(e.target.value)}
          />

          <label>Your Password</label>
          <input
            type="password"
            placeholder="password"
            className="Inputsi"
            value={password}
            onChange={(e) => setLogInPass(e.target.value)}
          />

          <label>
            <input className="" type="checkbox" value="" />
            I agree to all statements in{' '}
            <a href="#!" className="text-body">
              <u>Terms of service</u>
            </a>
          </label>

          <button
            type="submit"
            className="btnsignup"
            onClick={handleLogin}
            disabled={email.trim() === '' || password.trim() === ''}
          >
            Login
          </button>

          <label style={{ paddingLeft: '180px' }}>
            <button onClick={handleForgotPassword}>Forgot password</button>
            <p className="btnlink">
              Have already forword{' '}
              <a href="#!">
                <u>
                  <Link to={'/ResetPasswordForm'}>Login here</Link>
                </u>
              </a>
            </p>
          </label>

          <div style={{ color: 'red' }}>{error && <p>{error}</p>}</div>
        </div>
      </div>
    </section>
  );
};

export default Login;
