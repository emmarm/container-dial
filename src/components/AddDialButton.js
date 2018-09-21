import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Button from './Button';

const AddButton = styled(Button)(
  {
    borderRadius: 0,
    height: '100%'
  },
  ({ theme }) => ({
    background: `${theme.light}33`,
    ':hover,:focus': {
      background: `${theme.light}99`
    }
  })
);

const AddDialButton = ({ handleShowDialModal }) => (
  <AddButton
    icon="add"
    onClick={handleShowDialModal}
    tabIndex={1}
    text="Add New"
  />
);

AddDialButton.propTypes = {
  handleShowDialModal: PropTypes.func.isRequired
};

export default AddDialButton;
