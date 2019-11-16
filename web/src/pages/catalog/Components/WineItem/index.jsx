import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function WineItem(props) {
  const { wine } = props;

  return (
    <div className="wine-container">
      <div className="wine-car-content">
        <p>{wine.designation}</p>
      </div>
      <div className="wine-footer">
        <p>{wine.designation}</p>
      </div>
    </div>
  );
}

WineItem.propTypes = {
  wine: PropTypes.shape({
  }).isRequired,
};
