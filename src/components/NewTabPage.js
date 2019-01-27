/* global browser */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import * as actions from '../actions';
import Page from './Page';
import DialList from './DialList';
import DialModal from './DialModal';

const DEFAULT_STATE = { showDialModal: false };

export class NewTabPage extends React.Component {
  state = DEFAULT_STATE;

  componentDidMount() {
    const {
      container,
      setContainer,
      setDials,
      startSetBackground
    } = this.props;

    setContainer(container);
    startSetBackground(container);

    browser.storage.local.get().then(dials => {
      const dialsArr = Object.values(dials);

      setDials(dialsArr);
    });
  }

  handleShowDialModal = dial => {
    dial.siteName && this.setState(() => ({ dial }));

    this.setState(() => ({
      showDialModal: true
    }));
  };

  handleHideDialModal = e => {
    e && e.preventDefault();
    this.props.setCurrentDial(null);
    this.setState(() => DEFAULT_STATE);
  };

  render() {
    const { container, theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Page>
          <DialModal
            handleHideDialModal={this.handleHideDialModal}
            container={container}
            isOpen={this.state.showDialModal}
          />
          <DialList handleShowDialModal={this.handleShowDialModal} />
        </Page>
      </ThemeProvider>
    );
  }
}

NewTabPage.propTypes = {
  container: PropTypes.objectOf(PropTypes.string),
  theme: PropTypes.objectOf(PropTypes.string),
  setContainer: PropTypes.func.isRequired,
  setCurrentDial: PropTypes.func.isRequired,
  setDials: PropTypes.func.isRequired,
  startSetBackground: PropTypes.func.isRequired
};

export default connect(
  undefined,
  actions
)(NewTabPage);
