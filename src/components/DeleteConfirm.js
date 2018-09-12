import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const DeleteConfirm = ({
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

const mapStateToProps = state => ({
  container: state.container,
  theme: state.theme
});

export default connect(
  mapStateToProps,
  actions
)(DeleteConfirm);
