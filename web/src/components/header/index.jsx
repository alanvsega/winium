import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

import Logo from '../../assets/WiniumLogoWhite.png';

export default function Header() {
  return (
    <div className="header-container">
      <div>
        <Link className="font-color-highlight-light" to="/">
          <img className="logo-img" src={Logo} alt="It's a match" />
        </Link>
      </div>
      <nav className="navigation-menu-container font-color-light">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="login-options-container">
        <h3 className="font-color-light">Welcome Visitor</h3>
        <div className="division" />
        <Link className="font-color-highlight-light" to="/login">
          Login
        </Link>
        <Link className="font-color-highlight-light" to="/create-account">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
