import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import * as actions from '../actions';
import DeleteConfirm from './DeleteConfirm';
import DialForm from './DialForm';

export class DialModal extends Component {
  state = {
    showDeleteConfirm: false
  };

  toggleShowDeleteConfirm = () => {
    this.setState(prevState => ({
      showDeleteConfirm: !prevState.showDeleteConfirm
    }));
  };

  handleDelete = () => {
    const { deleteDial, handleHideDialModal } = this.props;
    deleteDial(this.props.dial);
    this.toggleShowDeleteConfirm();
    handleHideDialModal();
  };

  render() {
    const { isOpen, handleHideDialModal, theme, dial, container } = this.props;
    return (
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
          }
        }}
      >
        {this.state.showDeleteConfirm ? (
          <h2 className="dial-modal__title">Delete Dial</h2>
        ) : dial ? (
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

        {this.state.showDeleteConfirm ? (
          <DeleteConfirm
            dial={dial}
            handleDelete={this.handleDelete}
            toggleShowDeleteConfirm={this.toggleShowDeleteConfirm}
          />
        ) : (
          <DialForm
            dial={dial}
            handleHideDialModal={handleHideDialModal}
            toggleShowDeleteConfirm={this.toggleShowDeleteConfirm}
          />
        )}
      </Modal>
    );
  }
}

DialModal.propTypes = {
  handleHideDialModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  container: PropTypes.objectOf(PropTypes.string),
  theme: PropTypes.objectOf(PropTypes.string),
  dial: PropTypes.objectOf(PropTypes.string),
  deleteDial: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  container: state.container,
  theme: state.theme
});

export default connect(
  mapStateToProps,
  actions
)(DialModal);
