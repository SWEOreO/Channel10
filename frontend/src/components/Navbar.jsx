// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="new-navbar">
      <div className="new-navbar-left">
        <Link to="/" className="new-navbar-logo">
          <img src="./frontend/public/image/channel10.jpg" alt="Channel 10 Logo" className="new-navbar-logo-image" />
        </Link>
        <div className="new-navbar-search">
          <input type="text" placeholder="Search by keywords, style, theme, tag, etc." />
        </div>
      </div>
      <div className="new-navbar-links">
        <Link to="/buy-art" className="new-navbar-link">Discover</Link>
        <Link to="/auctions" className="new-navbar-link">Shop</Link>
        <Link to="/viewing-rooms" className="new-navbar-link">Community</Link>
        <Link to="/galleries" className="new-navbar-link">Journals</Link>
        <Link to="/fairs-and-events" className="new-navbar-link">Library</Link>
      </div>
      <div className="new-navbar-user">
        <Link to="/price-database" className="new-navbar-link">Shopping Cart</Link>
        <Link to="/editorial" className="new-navbar-link">My Account</Link>
        <Link to="/login" className="new-navbar-link">Message</Link>
        <Link to="/profile" className="new-navbar-link">Settings</Link>
      </div>
    </nav>
  );
}