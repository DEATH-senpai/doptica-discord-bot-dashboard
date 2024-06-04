import React from 'react'
import { Link } from '@mui/material';
export default function WelcomeMessage() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">DOPICA</div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="content">
        <h1>WELCOME</h1>
        <p>A very customizable multipurpose bot for welcome image, In-depth logs, Social commands, Moderation and many more...</p>
        <button className="log-in-button">Log In</button>
      </div>
    </div>
  );
};

