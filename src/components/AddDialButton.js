import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Button from './Button';

const AddButton = styled(Button)({
  background: 'rgba(255, 255, 255, 0.3)',
  borderRadius: 0,
  height: '100%',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.5)'
  }
});

const AddDialButton = ({ handleShowDialModal }) => (
  <AddButton onClick={handleShowDialModal} text="Add New" icon="add" />
);

AddDialButton.propTypes = {
  handleShowDialModal: PropTypes.func.isRequired
};

export default AddDialButton;
