import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = () => {
    const requestBody = {
      Email: email,
      Contraseña: password
    };

    fetch('http://localhost:5000/donante/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
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
      })
      .catch(error => {
        console.error('Error during login:', error);
        // Handle the error (e.g., display an error message)
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
};

export default Login;
