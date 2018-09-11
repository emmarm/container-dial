import React, { Component } from 'react';
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

EditDialButton.propTypes = {};

export default EditDialButton;
