import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import getFavicon from '../utils/getFavicon';

class AddDialForm extends Component {
  state = {
    siteName: '',
    siteUrl: ''
  };

  onSiteNameChange = e => {
    const siteName = e.target.value;
    this.setState(() => ({ siteName }));
  };

  onSiteUrlChange = e => {
    const siteUrl = e.target.value;
    this.setState(() => ({ siteUrl }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { siteName, siteUrl } = this.state;
    const { container, addDial, handleHideAddDialModal } = this.props;
    const favicon = await getFavicon(siteUrl);
    const dial = {
      siteName,
      siteUrl,
      container: container.name,
      favicon
    };

    addDial(dial);
    handleHideAddDialModal(e);
  };

  render() {
    return (
      <form className="add-dial-modal__form">
        <div className="add-dial-modal__field">
          <label htmlFor="site-name" className="field__label">
            Site Name
          </label>
          <input
            id="site-name"
            className="field__input"
            type="text"
            placeholder="e.g. Facebook"
            onChange={this.onSiteNameChange}
            value={this.state.siteName}
          />
        </div>

        <div className="add-dial-modal__field">
          <label htmlFor="site-url" className="field__label">
            Site URL
          </label>
          <input
            id="site-url"
            className="field__input"
            type="text"
            placeholder="e.g. https://facebook.com"
            onChange={this.onSiteUrlChange}
            value={this.state.siteUrl}
          />
        </div>

        <div className="add-dial-modal__buttons">
          <button
            onClick={this.props.handleHideAddDialModal}
            className="add-dial-modal__button button--secondary"
          >
            Cancel
          </button>

          <button
            className="add-dial-modal__button button--primary"
            onClick={this.handleSubmit}
            style={{ backgroundColor: this.props.theme.primary }}
          >
            Add Dial
          </button>
        </div>
      </form>
    );
  }
}

AddDialForm.propTypes = {
  handleHideAddDialModal: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = state => ({
  container: state.container
});

export default connect(
  mapStateToProps,
  actions
)(AddDialForm);
