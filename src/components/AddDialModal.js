import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import AddDialForm from './AddDialForm';

const AddDialModal = ({ handleHideAddDialModal, container, isOpen, theme }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={handleHideAddDialModal}
    closeTimeoutMS={150}
    className="add-dial-modal"
    style={{
      overlay: {
        background: `linear-gradient(to bottom, ${theme.dark}33, ${
          theme.dark
        }33),
        linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8))`
      },
      content: { background: 'white' }
    }}
  >
    <h2 className="add-dial-modal__title">
      New{' '}
      <span className="title__span" style={{ color: theme.primary }}>
        {container.name}
      </span>{' '}
      Dial
    </h2>

    <AddDialForm
      theme={theme}
      handleHideAddDialModal={handleHideAddDialModal}
    />
  </Modal>
);

AddDialModal.propTypes = {
  handleHideAddDialModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  container: PropTypes.objectOf(PropTypes.string),
  theme: PropTypes.objectOf(PropTypes.string)
};

export default AddDialModal;
