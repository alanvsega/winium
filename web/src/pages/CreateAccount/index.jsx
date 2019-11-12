import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";

import Logo from "../../assets/WiniumSimpleLogo.png";

import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

export default function CreateAccount() {
  const [startDate, setStartDate] = useState(new Date());
  const [countries, setCountries] = useState([]);

  async function GetCountries() {
    fetch("https://restcountries.eu/rest/v2/all").then(async res => {
      const resultCountries = await res.json();
      setCountries(resultCountries);
    });
  }

  useEffect(() => {
    GetCountries();
  }, []);

  function dateChange(date) {
    setStartDate(date);
  }

  return (
    <div className="create-account-container">
      <div className="brand-details-container">
        <div className="background-img-contaier font-color-dark">
          <button
            type="button"
            className="goto-app-button background-highlight featured-button"
          >
            <p>Also enjoy our mobile app</p>
          </button>
        </div>
      </div>
      <div className="new-account-form-container">
        <div className="brand-header-container">
          <img src={Logo} className="logo-img" alt="Winium logo" />
          <p className="font-color-dark">
            Come to winium and be part of wine tasters community
          </p>
        </div>
        <form action="" className="create-account-form font-color-dark">
          <div className="input-group-container">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="input-group-container">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="account-inputs-container">
            <div className="input-group-container">
              <label htmlFor="birthday">Birthday</label>
              <DatePicker
                className="birthday-date-picker"
                name="birtyhday"
                selected={startDate}
                onChange={e => dateChange(e)}
              />
            </div>
            <div className="input-group-container">
              <label htmlFor="country">Country</label>
              <Select
                className="select-countries"
                options={countries.map(c => ({
                  value: c.name,
                  label: c.name
                }))}
              />
            </div>
            <div className="input-group-container">
              <label htmlFor="province">State/Province</label>
              <input type="text" name="province" />
            </div>
          </div>
          <div className="input-group-container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="input-group-container">
            <label htmlFor="repeat-password">Repeat Password</label>
            <input type="password" name="repeat-password" />
          </div>
          <div className="account-options-buttons">
            <Link
              to="/Login"
              type="button"
              className="login-button featured-button"
            >
              <p className="font-color-highlight-dark">Login</p>
            </Link>
            <button
              type="submit"
              className="background-main-dark featured-button"
            >
              <p className="font-color-light">Create Account</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
