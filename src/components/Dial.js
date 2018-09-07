import React from 'react';
import PropTypes from 'prop-types';

const Dial = ({ name, icon }) => (
  <button className="dial">
    <div className="dial--hover" />
    <div className="dial__title-area">
      <p className="dial__title">{name}</p>
    </div>
    <div className="dial__icon" style={{ backgroundImage: `url('${icon}')` }} />
  </button>
);

Dial.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string
};

export default Dial;
