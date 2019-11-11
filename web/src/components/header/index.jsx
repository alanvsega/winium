import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

import Logo from '../../assets/WiniumLogoWhite.png';

export default function Header() {
  return (
    <div className="header-container">
      <div>
        <Link className="font-color-highlit-light" to="/">
          <img className="logo-img" src={Logo} alt="It's a match" />
        </Link>
      </div>
      <nav className="navigation-menu-container font-color-light">
        <a href="./#">Home</a>
        <a href="./#">Catalog</a>
        <a href="./#">About</a>
      </nav>
      <div className="login-options-container">
        <h3 className="font-color-light">Welcome Visitor</h3>
        <div className="division" />
        {/* <a href="./#" className="font-color-highlit-light">Login</a> */}
        {/* <a href="./#" className="font-color-highlit-light">Sign Up</a> */}
        <Link className="font-color-highlit-light" to="/login">
          Login
        </Link>
        <Link className="font-color-highlit-light" to="/create-account">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
