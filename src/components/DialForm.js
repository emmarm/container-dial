import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import getFavicon from '../utils/getFavicon';

export class DialForm extends Component {
  state = {
    siteName: this.props.dial ? this.props.dial.siteName : '',
    siteUrl: this.props.dial ? this.props.dial.siteUrl : '',
    nameError: '',
    urlError: '',
    nameTouched: this.props.dial ? true : false,
    urlTouched: this.props.dial ? true : false
  };

  onSiteNameChange = e => {
    const siteName = e.target.value;
    this.setState(() => ({ siteName, nameTouched: true }));
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
    this.setState(() => ({ siteUrl, urlTouched: true }));
  };

  onSiteUrlBlur = e => {
    const { value } = e.target;
    const url = value.replace(/^(?:https?:\/\/)?(.*)$/, 'https://$1');

    const isValidUrl = string => {
      try {
        new URL(string);
        return true;
      } catch (err) {
        return false;
      }
    };

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
    const { siteName, siteUrl } = this.state;
    const { container, editDial, addDial, handleHideDialModal } = this.props;

    let favicon;
    try {
      const icon = await getFavicon(siteUrl);

      favicon = icon;
    } catch (err) {
      favicon = 'error';
    }
    const dial = { siteName, siteUrl, container: container.name, favicon };

    this.props.dial ? editDial(this.props.dial, dial) : addDial(dial);
    handleHideDialModal();
  };

  render() {
    const {
      siteName,
      siteUrl,
      nameError,
      urlError,
      nameTouched,
      urlTouched
    } = this.state;
    const { theme, handleHideDialModal } = this.props;
    return (
      <form className="dial-modal__form" onSubmit={this.handleSubmit}>
        <div className="dial-modal__field">
          <label htmlFor="site-name" className="field__label">
            Site Name
          </label>
          <input
            id="site-name"
            className="field__input"
            type="text"
            placeholder="e.g. Facebook"
            onChange={this.onSiteNameChange}
            onBlur={this.onSiteNameBlur}
            value={siteName}
          />
        </div>

        <div className="dial-modal__field">
          <label htmlFor="site-url" className="field__label">
            Site URL
          </label>
          <input
            id="site-url"
            className="field__input"
            type="text"
            placeholder="e.g. https://facebook.com"
            onChange={this.onSiteUrlChange}
            onBlur={this.onSiteUrlBlur}
            value={siteUrl}
          />
        </div>
        {urlError}

        <div className="dial-modal__buttons">
          <button
            onClick={handleHideDialModal}
            className="dial-modal__button button--secondary"
          >
            Cancel
          </button>

          <button
            className="dial-modal__button button--primary"
            style={{ backgroundColor: theme.primary }}
            disabled={nameError || urlError || !nameTouched || !urlTouched}
            type="submit"
          >
            {this.props.dial ? 'Save Edits' : 'Add Dial'}
          </button>
        </div>
      </form>
    );
  }
}

DialForm.propTypes = {
  handleHideDialModal: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.string),
  dial: PropTypes.shape({
    siteName: PropTypes.string,
    siteUrl: PropTypes.string,
    container: PropTypes.string,
    favicon: PropTypes.string
  })
};

const mapStateToProps = state => ({
  container: state.container
});

export default connect(
  mapStateToProps,
  actions
)(DialForm);
