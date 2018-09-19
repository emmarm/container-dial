import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import * as actions from '../actions';
import Form from './Form';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

const Text = styled('p')({
  fontSize: 20,
  textAlign: 'center'
});

const Span = styled('span')(props => ({
  color: props.primary ? props.theme.primary : props.theme.light
}));

export const DeleteConfirm = ({
  container,
  currentDial,
  handleDelete,
  toggleShowDeleteConfirm
}) => (
  <Form>
    <Text>
      Delete <Span primary>{currentDial.siteName}</Span> from{' '}
      <Span>{container.name}</Span> Container?
    </Text>

    <ButtonGroup>
      <Button onClick={toggleShowDeleteConfirm} text="Cancel" />

      <Button
        danger
        icon="delete_forever"
        onClick={handleDelete}
        text="Delete"
      />
    </ButtonGroup>
  </Form>
);

DeleteConfirm.propTypes = {
  container: PropTypes.objectOf(PropTypes.string).isRequired,
  currentDial: PropTypes.shape({
    container: PropTypes.string,
    favicon: PropTypes.string,
    id: PropTypes.number,
    siteName: PropTypes.string,
    siteUrl: PropTypes.string
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  toggleShowDeleteConfirm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  container: state.container,
  currentDial: state.currentDial
});

export default connect(
  mapStateToProps,
  actions
)(DeleteConfirm);
