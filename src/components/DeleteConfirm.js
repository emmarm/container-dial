import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import * as actions from '../actions';
import { Form, ButtonGroup, Button } from './DialForm';

const FormLayout = Form.withComponent('div');

const Text = styled('p')({
  fontSize: '20px',
  textAlign: 'center'
});

const Span = styled('span')(props => ({
  color: props.primary ? props.theme.primary : props.theme.light
}));

export const DeleteConfirm = ({
  dial,
  toggleShowDeleteConfirm,
  handleDelete,
  container
}) => (
  <FormLayout>
    <Text>
      Delete <Span primary>{dial.siteName}</Span> from{' '}
      <Span>{container.name}</Span> Container?
    </Text>

    <ButtonGroup>
      <Button secondary onClick={toggleShowDeleteConfirm}>
        Cancel
      </Button>

      <Button danger onClick={handleDelete}>
        Delete
      </Button>
    </ButtonGroup>
  </FormLayout>
);

DeleteConfirm.propTypes = {
  dial: PropTypes.objectOf(PropTypes.string),
  toggleShowDeleteConfirm: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  container: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = state => ({
  container: state.container
});

export default connect(
  mapStateToProps,
  actions
)(DeleteConfirm);
