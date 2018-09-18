import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Group = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '25px'
});

const ButtonGroup = ({ children }) => <Group>{children}</Group>;

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ButtonGroup;
