import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';

export const DeleteConfirm = ({
  dial,
  toggleShowDeleteConfirm,
  handleDelete,
  container,
  theme
}) => (
  <div className="dial-modal__form">
    <p className="form__text">
      Delete{' '}
      <span className="text__span" style={{ color: theme.primary }}>
        {dial.siteName}
      </span>{' '}
      from{' '}
      <span className="text__span" style={{ color: theme.light }}>
        {container.name}
      </span>{' '}
      Container?
    </p>

    <div className="dial-modal__buttons">
      <button
        className="dial-modal__button button--secondary"
        onClick={toggleShowDeleteConfirm}
      >
        Cancel
      </button>

      <button
        className="dial-modal__button button--delete"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  </div>
);

DeleteConfirm.propTypes = {
  dial: PropTypes.objectOf(PropTypes.string),
  toggleShowDeleteConfirm: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  container: PropTypes.objectOf(PropTypes.string),
  theme: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = state => ({
  container: state.container,
  theme: state.theme
});

export default connect(
  mapStateToProps,
  actions
)(DeleteConfirm);
