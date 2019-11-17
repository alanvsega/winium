import React from 'react';
import PropTypes from 'prop-types';

import bottleSlhouette from '../../../../assets/bottleSlhouette.jpg';
import './style.css';

export default function WineItem(props) {
  const { wine } = props;

  return (
    <div className="wine-container">
      <div className="wine-card-content">
        <img src={wine.src ? wine.src : bottleSlhouette} alt={wine.designation} />
      </div>
      <div className="wine-footer">
        <p>{wine.designation}</p>
      </div>
    </div>
  );
}

WineItem.propTypes = {
  wine: PropTypes.shape({
    designation: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};
