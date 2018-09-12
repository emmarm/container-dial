import React from 'react';
import PropTypes from 'prop-types';

const EditDialButton = ({ dial, handleShowDialModal }) => {
  const setDial = () => {
    handleShowDialModal(dial);
  };
  return (
    <button className="edit-dial__button" onClick={() => setDial()}>
      <h3 className="edit-dial__text">Edit</h3>
    </button>
  );
};

EditDialButton.propTypes = {
  dial: PropTypes.objectOf(PropTypes.string).isRequired,
  handleShowDialModal: PropTypes.func.isRequired
};

export default EditDialButton;