import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import * as actions from '../actions';
import Button from './Button';
import getFavicon from '../utils/getFavicon';
import { normalizeUrl, isValidUrl } from '../utils/checkUrl';

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

const FormField = styled('div')({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: '120px 300px',
  margin: '10px'
});

const Label = styled('label')({
  color: '#888'
});

const TextInput = styled('input')({
  padding: '8px'
});

export const ButtonGroup = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '25px'
});

export class DialForm extends Component {
  state = {
    siteName: this.props.dial ? this.props.dial.siteName : '',
    siteUrl: this.props.dial ? this.props.dial.siteUrl : '',
    nameError: '',
    urlError: '',
    nameTouched: this.props.dial ? true : false,
    urlTouched: this.props.dial ? true : false,
    submitting: false
  };

  onSiteNameChange = e => {
    const siteName = e.target.value;
    this.setState(() => ({ siteName, nameTouched: true, nameError: '' }));
  };

  onSiteNameBlur = e => {
    const { value } = e.target;
    if (!value) {
      return this.setState(() => ({ nameError: 'Required' }));
    } else {
      return this.setState(() => ({ nameError: '' }));
    }
  };

  onSiteUrlChange = e => {
    const siteUrl = e.target.value;
    this.setState(() => ({ siteUrl, urlTouched: true, urlError: '' }));
  };

  onSiteUrlBlur = e => {
    const { value } = e.target;
    const url = normalizeUrl(value);

    if (!value) {
      return this.setState(() => ({ urlError: 'Required' }));
    } else if (!isValidUrl(url)) {
      return this.setState(() => ({ urlError: 'Invalid URL' }));
    } else {
      this.setState(() => ({ urlError: '' }));
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState(() => ({ submitting: true }));
    const { siteName, siteUrl } = this.state;
    const {
      dial,
      container,
      editDial,
      addDial,
      handleHideDialModal,
      newId
    } = this.props;

    const url = normalizeUrl(siteUrl);

    let favicon;
    try {
      const icon = await getFavicon(siteUrl);
      favicon = icon;
    } catch (err) {
      favicon = 'error';
    }

    const id = dial ? dial.id : newId;

    const newDial = {
      siteName,
      siteUrl: url,
      container: container.cookieStoreId,
      favicon,
      id
    };

    dial ? editDial(dial, newDial) : addDial(newDial);
    handleHideDialModal();
  };

  render() {
    const {
      siteName,
      siteUrl,
      nameError,
      urlError,
      nameTouched,
      urlTouched,
      submitting
    } = this.state;
    const { toggleShowDeleteConfirm, handleHideDialModal } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField>
          <Label htmlFor="site-name">Site Name</Label>
          <TextInput
            id="site-name"
            type="text"
            placeholder="e.g. Facebook"
            onChange={this.onSiteNameChange}
            onBlur={this.onSiteNameBlur}
            value={siteName}
          />
        </FormField>
        {nameError}

        <FormField>
          <Label htmlFor="site-url">Site URL</Label>
          <TextInput
            id="site-url"
            type="text"
            placeholder="e.g. https://facebook.com"
            onChange={this.onSiteUrlChange}
            onBlur={this.onSiteUrlBlur}
            value={siteUrl}
          />
        </FormField>
        {urlError}

        <ButtonGroup>
          {this.props.dial && (
            <Button danger icon="delete" onClick={toggleShowDeleteConfirm} />
          )}
          <Button onClick={handleHideDialModal} text="Cancel" />

          <Button
            icon={!submitting && 'done'}
            disabled={
              nameError || urlError || !nameTouched || !urlTouched || submitting
            }
            primary
            submit
            text={
              this.props.dial
                ? submitting
                  ? 'Saving...'
                  : 'Save Edits'
                : submitting
                  ? 'Adding...'
                  : 'Add Dial'
            }
          />
        </ButtonGroup>
      </Form>
    );
  }
}

DialForm.propTypes = {
  dial: PropTypes.shape({
    container: PropTypes.string,
    favicon: PropTypes.string,
    id: PropTypes.number,
    siteName: PropTypes.string,
    siteUrl: PropTypes.string
  }),
  handleHideDialModal: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.string),
  toggleShowDeleteConfirm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  container: state.container,
  newId:
    state.dials.length > 0
      ? Math.max(...state.dials.map(dial => dial.id)) + 1
      : 1
});

export default connect(
  mapStateToProps,
  actions
)(DialForm);
