import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faStar } from '@fortawesome/free-solid-svg-icons';

import WineTop1 from '../../assets/wine1.png';
import WineTop2 from '../../assets/wine2.png';
import WineTop3 from '../../assets/wine3.png';

import Logo from '../../assets/WiniumLogoWhite.png';

export default function HomeScreen() {
  return (
    <div className="home-container">
      <div className="home-not-logged">
        <img className="brand-logo-img" src={Logo} alt="winium logo" />
        <div className="bran-call-container font-color-light">
          <p>Enjoy all winium features by creating an account.</p>
          <p>- The best wine in your region;</p>
          <p>- Wine recomendations;</p>
          <p>- Your favorite wines statistics;</p>
          <p>- Rate your wines;</p>
        </div>
        <div className="buttons-container font-color-dark">
          <Link
            to="/create-account"
            className="button-home background-highlight featured-button"
          >
            <p>Create Account</p>
          </Link>
          <Link
            to="/login"
            className="button-home background-highlight featured-button"
          >
            <p>Login</p>
          </Link>
        </div>
      </div>
      <div className="ranking-container background-main-light">
        <h1 className="font-color-highlight-dark">
          Top 3 Word&apos;s Best Wines
        </h1>
        <div className="ranking">
          <div className="ranking-item top2">
            <FontAwesomeIcon
              className="crown-icon"
              icon={faCrown}
              style={{ color: 'C0C0C0' }}
            />
            <img
              src={WineTop2}
              alt="ranking-2"
              className="ranking-item-thumb ranking-2"
            />
            <h3 className="font-color-dark">Wine 1</h3>
            <div className="points-container font-color-highlight-dark">
              <FontAwesomeIcon icon={faStar} />
              <h2>99</h2>
            </div>
          </div>
          <div className="ranking-item top1">
            <FontAwesomeIcon
              className="crown-icon"
              icon={faCrown}
              style={{ color: 'FFD700' }}
            />
            <img
              src={WineTop1}
              alt="ranking-1"
              className="ranking-item-thumb ranking-1"
            />
            <h3 className="font-color-dark">Wine 2</h3>
            <div className="points-container font-color-highlight-dark">
              <FontAwesomeIcon icon={faStar} />
              <h2>99</h2>
            </div>
          </div>
          <div className="ranking-item top3">
            <FontAwesomeIcon
              className="crown-icon"
              icon={faCrown}
              style={{ color: '#CD7F32' }}
            />
            <img
              src={WineTop3}
              alt="ranking-3"
              className="ranking-item-thumb ranking-3"
            />
            <h3 className="font-color-dark">Wine 3</h3>
            <div className="points-container font-color-highlight-dark">
              <FontAwesomeIcon icon={faStar} />
              <h2>99</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
