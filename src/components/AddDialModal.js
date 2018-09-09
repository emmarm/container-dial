import React from 'react';
import PropTypes from 'prop-types';

const AddDialModal = ({ handleHideAddDialModal, container }) => (
  <div>
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
  </div>
);

AddDialModal.propTypes = {
  handleHideAddDialModal: PropTypes.func.isRequired,
  container: PropTypes.objectOf(PropTypes.string)
};

export default AddDialModal;
