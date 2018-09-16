import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const I = styled('i')({
  color: 'white',
  fontSize: 28
});

const Icon = ({ icon }) => <I className="material-icons">{icon}</I>;

Icon.propTypes = {
  icon: PropTypes.string
};

export default Icon;
