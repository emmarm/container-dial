import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

export const EditButton = styled('button')({
  background: 'black',
  border: 'none',
  borderRadius: '50%',
  color: 'white',
  height: '50px',
  opacity: '0',
  position: 'absolute',
  right: '-10px',
  textAlign: 'center',
  top: '-10px',
  transition: 'all 200ms ease-in',
  width: '50px',
  ':hover': {
    backgroundColor: '#333',
    opacity: 1
  }
});

const EditDialButton = ({ dial, handleShowDialModal }) => {
  const setDial = () => {
    handleShowDialModal(dial);
  };
  return (
    <EditButton className="edit-button" onClick={() => setDial()}>
      <h3>Edit</h3>
    </EditButton>
  );
};

EditDialButton.propTypes = {
  dial: PropTypes.objectOf(PropTypes.string).isRequired,
  handleShowDialModal: PropTypes.func.isRequired
};

export default EditDialButton;
