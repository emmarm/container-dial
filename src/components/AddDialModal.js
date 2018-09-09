import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const AddDialModal = ({ handleHideAddDialModal, container, isOpen }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={handleHideAddDialModal}
    closeTimeoutMS={150}
    className="add-dial-modal"
  >
    <h2>Add Dial</h2>
    <form>
      <label htmlFor="site-name">Site Name</label>
      <input id="site-name" type="text" placeholder="e.g. Facebook" />

      <label htmlFor="site-url">Site URL</label>
      <input
        id="site-url"
        type="text"
        placeholder="e.g. https://facebook.com"
      />

      <button onClick={handleHideAddDialModal}>Cancel</button>

      <button>Add New {container.name} Dial</button>
    </form>
  </Modal>
);

AddDialModal.propTypes = {
  handleHideAddDialModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  container: PropTypes.objectOf(PropTypes.string)
};

export default AddDialModal;
