import React from 'react';
import './Login.css';

const Login = ({ loginData, setLoginData, onSubmit }) => {
  return (
    <div className="login-page">
      <h2>Login to MyStore</h2>
      <form onSubmit={onSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;