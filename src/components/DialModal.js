import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { css } from 'emotion';
import styled from 'react-emotion';

import * as actions from '../actions';
import DeleteConfirm from './DeleteConfirm';
import DialForm from './DialForm';

const modalClass = {
  base: css({
    alignItems: 'center',
    background: 'white none repeat scroll',
    border: '1px solid rgb(204,204,204)',
    borderRadius: '4px',
    boxShadow:
      'rgba(50, 50, 93, 0.1) 0px 15px 35px, rgba(0, 0, 0, 0.07) 0px 5px 15px',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    margin: '15vh auto',
    outline: 'currentcolor none medium',
    overflow: 'auto',
    padding: '30px',
    width: '500px'
  }),
  beforeClose: css({
    display: 'none',
    transition: 'all 150ms ease-out'
  })
};

const DialTitle = styled('h2')({
  color: '#888',
  fontWeight: '100',
  marginBottom: '30px'
});

const Span = styled('span')(({ theme }) => ({
  color: theme.primary
}));

export class DialModal extends Component {
  state = {
    showDeleteConfirm: false
  };

  toggleShowDeleteConfirm = () => {
    this.setState(prevState => ({
      showDeleteConfirm: !prevState.showDeleteConfirm
    }));
  };

  handleClose = () => {
    this.setState(() => ({
      showDeleteConfirm: false
    }));
    this.props.handleHideDialModal();
  };

  handleDelete = () => {
    const { currentDial, deleteDial, handleHideDialModal } = this.props;
    deleteDial(currentDial);
    this.toggleShowDeleteConfirm();
    handleHideDialModal();
  };

  render() {
    const { showDeleteConfirm } = this.state;
    const { isOpen, handleHideDialModal, currentDial, container } = this.props;
    return (
      <Modal
        className={modalClass}
        isOpen={isOpen}
        onRequestClose={this.handleClose}
        closeTimeoutMS={150}
      >
        {showDeleteConfirm ? (
          <DialTitle>Delete Dial</DialTitle>
        ) : currentDial ? (
          <DialTitle>Edit Dial</DialTitle>
        ) : (
          <DialTitle>
            New <Span>{container.name}</Span> Dial
          </DialTitle>
        )}

        {showDeleteConfirm ? (
          <DeleteConfirm
            handleDelete={this.handleDelete}
            toggleShowDeleteConfirm={this.toggleShowDeleteConfirm}
          />
        ) : (
          <DialForm
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
  container: PropTypes.objectOf(PropTypes.string).isRequired,
  currentDial: PropTypes.shape({
    container: PropTypes.string,
    favicon: PropTypes.string,
    id: PropTypes.number,
    siteName: PropTypes.string,
    siteUrl: PropTypes.string
  }),
  deleteDial: PropTypes.func.isRequired
};

Modal.propTypes = {
  className: PropTypes.object,
  overlayClassName: PropTypes.func
};

const mapStateToProps = state => ({
  container: state.container,
  currentDial: state.currentDial
});

export default connect(
  mapStateToProps,
  actions
)(DialModal);
