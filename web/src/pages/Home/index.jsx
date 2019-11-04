import React from 'react';
import './style.css';

import Logo from '../../assets/WiniumLogoWhite.png';

export default function HomeScreen() {
  return (
    <div className="home-container">
      <div className="home-not-logged">
        <img className="brand-logo-img" src={Logo} alt="winium logo" />
        <div className="bran-call-container">
          <p>
            Enjoy all winium features by creating an account.
          </p>
          <p>
            - The bet wine in your region;
          </p>
          <p>
            - Wine recomendations;
          </p>
          <p>
            - Your favorite wines statistics;
          </p>
          <p>
            - Rate your wines;
          </p>
        </div>
        <div className="buttons-home">
          <button className="button-home-bottom">
            <p>Create Account</p>
            <p>>></p>
          </button>
          <button className="button-home-bottom">
            <p>Login</p>
            <p>>></p>
          </button>
        </div>
      </div>
      <div className="ranking-container">
        <h1>Top 3 Word's Best Wines</h1>
      </div>
    </div>
  );
}
