import React from 'react';
import PropTypes from 'prop-types';

const Dial = ({ dial }) => (
  <a href={dial.siteUrl} className="dial">
    <div className="dial__title-area">
      <p className="dial__title">{dial.siteName}</p>
    </div>
    <div
      className="dial__icon"
      style={{
        backgroundImage: `url('${dial.favicon}')`
      }}
    />
  </a>
);

Dial.propTypes = {
  dial: PropTypes.objectOf(PropTypes.string)
};

export default Dial;
