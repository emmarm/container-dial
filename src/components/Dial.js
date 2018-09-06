import React from 'react';

const Dial = ({ name, theme, icon }) => (
  <button className="dial">
    <div className="dial--hover" />
    <div className="dial__title-area">
      <p className="dial__title">{name}</p>
    </div>
    <div className="dial__icon" style={{ backgroundImage: `url('${icon}')` }} />
  </button>
);

export default Dial;
