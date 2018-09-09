import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const AddDialModal = ({ handleHideAddDialModal, container, isOpen, theme }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={handleHideAddDialModal}
    closeTimeoutMS={150}
    className="add-dial-modal"
  >
    <h2 className="add-dial-modal__title">
      New{' '}
      <span className="title__span" style={{ color: theme.primary }}>
        {container.name}
      </span>{' '}
      Dial
    </h2>

    <form className="add-dial-modal__form">
      <div className="add-dial-modal__field">
        <label htmlFor="site-name" className="field__label">
          Site Name
        </label>
        <input
          id="site-name"
          className="field__input"
          type="text"
          placeholder="e.g. Facebook"
        />
      </div>

      <div className="add-dial-modal__field">
        <label htmlFor="site-url" className="field__label">
          Site URL
        </label>
        <input
          id="site-url"
          className="field__input"
          type="text"
          placeholder="e.g. https://facebook.com"
        />
      </div>

      <div className="add-dial-modal__buttons">
        <button
          onClick={handleHideAddDialModal}
          className="add-dial-modal__button button--secondary"
        >
          Cancel
        </button>

        <button
          className="add-dial-modal__button button--primary"
          style={{ backgroundColor: theme.primary }}
        >
          Add Dial
        </button>
      </div>
    </form>
  </Modal>
);

AddDialModal.propTypes = {
  handleHideAddDialModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  container: PropTypes.objectOf(PropTypes.string)
};

export default AddDialModal;
