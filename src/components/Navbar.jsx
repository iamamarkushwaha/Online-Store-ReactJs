import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="logo"><b>CartAttack</b></div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/orders">Order</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/cart">Cart({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;