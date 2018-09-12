import React from 'react';
import PropTypes from 'prop-types';

const AddDialButton = ({ handleShowDialModal }) => (
  <button className="add-dial__button" onClick={handleShowDialModal}>
    <h3 className="add-dial__text">Add New</h3>
  </button>
);

AddDialButton.propTypes = {
  handleShowDialModal: PropTypes.func.isRequired
};

export default AddDialButton;
