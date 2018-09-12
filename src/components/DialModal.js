import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import DialForm from './DialForm';

const DialModal = ({ handleHideDialModal, isOpen, theme, container, dial }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={handleHideDialModal}
    closeTimeoutMS={150}
    className="dial-modal"
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
    {dial ? (
      <h2 className="dial-modal__title">Edit Dial</h2>
    ) : (
      <h2 className="dial-modal__title">
        New{' '}
        <span className="title__span" style={{ color: theme.primary }}>
          {container.name}
        </span>{' '}
        Dial
      </h2>
    )}

    <DialForm
      handleHideDialModal={handleHideDialModal}
      theme={theme}
      dial={dial}
    />
  </Modal>
);

DialModal.propTypes = {
  handleHideDialModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  container: PropTypes.objectOf(PropTypes.string),
  theme: PropTypes.objectOf(PropTypes.string),
  dial: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = state => ({
  container: state.container
});

export default connect(mapStateToProps)(DialModal);
