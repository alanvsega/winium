import React from 'react';
import './style.css';

import Logo from '../../assets/WiniumLogoWhite.png';

export default function Header() {
  return (
    <div className="header-container">
      <div>
        <img className="logo-img" src={Logo} alt="It's a match" />
      </div>
      <nav className="navigation-menu-container font-color-light">
        <a href="./#">
          Home
        </a>
        <a href="./#">
          Catalog
        </a>
        <a href="./#">
          About
        </a>
      </nav>
      <div className="login-options-container">
        <h3 className="font-color-light">Welcome Visitor</h3>
        <div className="division" />
        <a href="./#" className="font-color-highlit-light">Login</a>
        <a href="./#" className="font-color-highlit-light">Sign Up</a>
      </div>
    </div>
  );
}
