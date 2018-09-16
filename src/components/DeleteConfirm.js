import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import * as actions from '../actions';
import { Form, ButtonGroup, Button } from './DialForm';

const FormLayout = Form.withComponent('div');

const Text = styled('p')({
  fontSize: 20,
  textAlign: 'center'
});

const Span = styled('span')(props => ({
  color: props.primary ? props.theme.primary : props.theme.light
}));

const I = styled('i')({
  color: 'white',
  fontSize: 28,
  margin: 0
});

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
        <I className="material-icons">delete_forever</I>
      </Button>
    </ButtonGroup>
  </FormLayout>
);

DeleteConfirm.propTypes = {
  dial: PropTypes.shape({
    siteName: PropTypes.string,
    siteUrl: PropTypes.string,
    container: PropTypes.string,
    favicon: PropTypes.string,
    id: PropTypes.number
  }).isRequired,
  toggleShowDeleteConfirm: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  container: PropTypes.objectOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  container: state.container
});

export default connect(
  mapStateToProps,
  actions
)(DeleteConfirm);
