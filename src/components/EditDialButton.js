import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import * as actions from '../actions';
import Button from './Button';

export const EditButton = styled(Button)({
  borderRadius: '50%',
  opacity: '0',
  position: 'absolute',
  right: '-10px',
  top: '-10px',
  transition: 'all 200ms ease-in',
  width: '50px',
  ':hover,:focus': {
    opacity: 1
  }
});

const EditDialButton = ({ dial, handleShowDialModal, setCurrentDial }) => {
  const setDial = () => {
    setCurrentDial(dial);
    handleShowDialModal(dial);
  };
  return (
    <EditButton className="edit-button" icon="edit" onClick={setDial} primary />
  );
};

EditDialButton.propTypes = {
  dial: PropTypes.shape({
    container: PropTypes.string,
    favicon: PropTypes.string,
    id: PropTypes.number,
    siteName: PropTypes.string,
    siteUrl: PropTypes.string
  }).isRequired,
  handleShowDialModal: PropTypes.func.isRequired,
  setCurrentDial: PropTypes.func.isRequired
};

export default connect(
  undefined,
  actions
)(EditDialButton);
