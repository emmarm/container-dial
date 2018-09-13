import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Button = styled('button')({
  background: 'rgba(255, 255, 255, 0.3)',
  border: 'none',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer'
  }
});

const ButtonText = styled('h3')({
  color: 'white',
  fontSize: '20px',
  fontWeight: '100'
});

const AddDialButton = ({ handleShowDialModal }) => (
  <Button onClick={handleShowDialModal}>
    <ButtonText>Add New</ButtonText>
  </Button>
);

AddDialButton.propTypes = {
  handleShowDialModal: PropTypes.func.isRequired
};

export default AddDialButton;
