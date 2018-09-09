import React from 'react';
import PropTypes from 'prop-types';

const AddDialButton = ({ handleShowAddDialModal }) => (
  <button className="add-dial__button" onClick={handleShowAddDialModal}>
    <h3 className="add-dial__text">Add New</h3>
  </button>
);

AddDialButton.propTypes = {
  handleShowAddDialModal: PropTypes.func.isRequired
};

export default AddDialButton;
