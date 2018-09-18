import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const I = styled('i')(
  {
    color: 'white',
    fontSize: 28
  },
  ({ padded }) => ({
    paddingLeft: padded && 5
  })
);

const Icon = ({ icon, padded }) => (
  <I className="material-icons" padded={padded}>
    {icon}
  </I>
);

Icon.propTypes = {
  icon: PropTypes.string,
  padded: PropTypes.bool
};

export default Icon;
