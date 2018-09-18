import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Button from './Button';

const AddButton = styled(Button)(
  {
    // background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 0,
    height: '100%',
    ':hover,:focus': {
      // background: 'rgba(255,255,255, 0.5)'
    }
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
    onClick={handleShowDialModal}
    text="Add New"
    icon="add"
    tabIndex={1}
  />
);

AddDialButton.propTypes = {
  handleShowDialModal: PropTypes.func.isRequired
};

export default AddDialButton;
