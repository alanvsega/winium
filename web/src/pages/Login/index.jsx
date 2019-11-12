import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Logo from '../../assets/WiniumLogoWhite.png';

export default function Login() {
  return (
    <div className="background-container background-main-light">
      <div className="user-login-container background-main-gradient">
        <img src={Logo} alt="winium brand logo" />
        <form action="" className="login-form font-color-light">
          <div className="input-group-container">
            <label htmlFor="email">Email</label>
            <input name="email" />
          </div>
          <div className="input-group-container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="button-options-container">
            <Link to="/create-account" className="featured-button signup-button">
              <p className="font-color-highlight-light">Sign Up</p>
            </Link>
            <button type="submit" className="featured-button background-highlight">
              <p className="font-color-dark" >Login</p>
            </button>
          </div>
        </form>
        <p className="brand-call-text font-color-light">
          Come and be part of the greatest wine tasters community with winium!
        </p>
      </div>
    </div>
  );
}
