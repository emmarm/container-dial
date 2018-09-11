import React from 'react';
import PropTypes from 'prop-types';

const Dial = ({ siteName, siteUrl, icon }) => (
  <a href={siteUrl} className="dial">
    <div className="dial__title-area">
      <p className="dial__title">{siteName}</p>
    </div>
    <div
      className="dial__icon"
      style={{
        backgroundImage: `url('${icon}')`
      }}
    />
  </a>
);

Dial.propTypes = {
  siteName: PropTypes.string,
  icon: PropTypes.string
};

export default Dial;
