import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = async () => {
    try {
      const requestBody = {
        email: email,
        contraseña: password
      };

      const response = await fetch('http://localhost:5000/donante/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        setLoginStatus('Login successful');
        // Handle the successful login (e.g., redirect to a new page)
      } else if (response.status === 401) {
        // Invalid credentials
        setLoginStatus('Invalid email or password');
        // Handle the failed login (e.g., display an error message)
      } else {
        // Other errors
        setLoginStatus('Error during login');
        // Handle the error (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginStatus('Error during login');
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form>
        <label className="login-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="login-input"
        />
        <br />
        <label className="login-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="login-input"
        />
        <br />
        <button type="button" onClick={handleLogin} className="login-button">
          Login
        </button>
      </form>
      {loginStatus && <p className="login-status">{loginStatus}</p>}
    </div>
  );
};

export default Login;
