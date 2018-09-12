import React from 'react';
import PropTypes from 'prop-types';

const Dial = ({ dial: { siteUrl, siteName, favicon } }) => (
  <a href={siteUrl} className="dial">
    <div className="dial__title-area">
      <p className="dial__title">{siteName}</p>
    </div>
    <div
      className="dial__icon"
      style={{
        backgroundImage: `url('${favicon}')`
      }}
    />
  </a>
);

Dial.propTypes = {
  dial: PropTypes.objectOf(PropTypes.string)
};

export default Dial;
