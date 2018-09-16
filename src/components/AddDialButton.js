import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Button = styled('button')({
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.3)',
  border: 'none',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer'
  },
  display: 'flex',
  height: '100%',
  justifyContent: 'center'
});

const ButtonText = styled('h3')({
  color: 'white',
  fontSize: 20,
  fontWeight: 100
});

const I = styled('i')({
  color: 'white',
  fontSize: 28
});

const AddDialButton = ({ handleShowDialModal }) => (
  <Button onClick={handleShowDialModal}>
    <ButtonText>
      Add New
      {'  '}
    </ButtonText>
    <I className="material-icons">add</I>
  </Button>
);

AddDialButton.propTypes = {
  handleShowDialModal: PropTypes.func.isRequired
};

export default AddDialButton;
