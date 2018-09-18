import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import Form from './Form';
import FormField from './FormField';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import getFavicon from '../utils/getFavicon';
import { normalizeUrl, isValidUrl } from '../utils/checkUrl';

export class DialForm extends Component {
  state = {
    nameError: '',
    nameTouched: this.props.dial ? true : false,
    siteName: this.props.dial ? this.props.dial.siteName : '',
    siteUrl: this.props.dial ? this.props.dial.siteUrl : '',
    submitting: false,
    urlError: '',
    urlTouched: this.props.dial ? true : false
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
      addDial,
      container,
      dial,
      editDial,
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
      nameError,
      nameTouched,
      siteName,
      siteUrl,
      submitting,
      urlError,
      urlTouched
    } = this.state;
    const { toggleShowDeleteConfirm, handleHideDialModal } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField
          error={nameError}
          id="site-name"
          label="Site Name"
          onBlur={this.onSiteNameBlur}
          onChange={this.onSiteNameChange}
          placeholder="e.g. Facebook"
          value={siteName}
        />

        <FormField
          error={urlError}
          id="site-url"
          label="Site Url"
          onBlur={this.onSiteUrlBlur}
          onChange={this.onSiteUrlChange}
          placeholder="e.g. https://facebook.com"
          value={siteUrl}
        />

        <ButtonGroup>
          {this.props.dial && (
            <Button
              danger
              icon="delete"
              narrow
              onClick={toggleShowDeleteConfirm}
            />
          )}
          <Button onClick={handleHideDialModal} text="Cancel" />

          <Button
            icon={!submitting && 'done'}
            disabled={
              !!nameError ||
              !!urlError ||
              !nameTouched ||
              !urlTouched ||
              submitting
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
