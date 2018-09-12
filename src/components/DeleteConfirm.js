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
  <div>
    <p>
      Delete {dial.siteName} from {container.name}?
    </p>

    <button onClick={toggleShowDeleteConfirm}>Cancel</button>

    <button onClick={handleDelete}>Delete</button>
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
