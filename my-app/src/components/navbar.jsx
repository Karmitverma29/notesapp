import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <h1>Note Down</h1>
      <div className="navbar-links">
        <Link to="/signup" className="navbar-link">Sign Up</Link>
        <Link to="/login" className="navbar-link">Log In</Link>
        <Link to="/notes" className="navbar-link">Notes</Link>
      </div>
    </div>
  );
}

export default Navbar;
