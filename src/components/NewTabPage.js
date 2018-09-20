import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import * as actions from '../actions';
import Page from './Page';
import GridList from './GridList';
import DialModal from './DialModal';

const DEFAULT_STATE = { showDialModal: false };

export class NewTabPage extends React.Component {
  state = DEFAULT_STATE;

  componentDidMount() {
    const { container, setContainer, startSetBackground } = this.props;

    setContainer(container);
    startSetBackground(container);
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
          <GridList handleShowDialModal={this.handleShowDialModal} />
        </Page>
      </ThemeProvider>
    );
  }
}

NewTabPage.propTypes = {
  container: PropTypes.objectOf(PropTypes.string),
  theme: PropTypes.objectOf(PropTypes.string),
  dials: PropTypes.arrayOf(PropTypes.object),
  setContainer: PropTypes.func.isRequired,
  setCurrentDial: PropTypes.func.isRequired,
  startSetBackground: PropTypes.func.isRequired
};

export default connect(
  undefined,
  actions
)(NewTabPage);
