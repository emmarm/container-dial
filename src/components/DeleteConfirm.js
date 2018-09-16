import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import * as actions from '../actions';
import { Form, ButtonGroup } from './DialForm';
import Button from './Button';

const FormLayout = Form.withComponent('div');

const Text = styled('p')({
  fontSize: 20,
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
      <Button onClick={toggleShowDeleteConfirm} text="Cancel" />

      <Button
        danger
        onClick={handleDelete}
        text="Delete"
        icon="delete_forever"
      />
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
