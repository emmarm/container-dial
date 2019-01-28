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

  // componentWillUnmount() {
  //   this.props.dials.forEach(dial =>
  //     browser.storage.local.set({ [dial.id]: dial })
  //   );
  // }

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

  handleDeleteDial = currentDial => {
    const { dials, startDeleteDial, updateDialOrder } = this.props;
    const newDials = dials
      .filter(dial => dial.id !== currentDial.id)
      .map((dial, index) => ({ ...dial, sortIndex: index }));
    const newDialOrder = newDials.map(({ id, sortIndex }) => ({
      id,
      sortIndex
    }));

    startDeleteDial(currentDial);
    newDials.forEach(dial => browser.storage.local.set({ [dial.id]: dial }));
    updateDialOrder(newDialOrder);
    this.handleHideDialModal();
  };

  render() {
    const { container, dials, theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Page>
          <DialModal
            container={container}
            handleDeleteDial={this.handleDeleteDial}
            handleHideDialModal={this.handleHideDialModal}
            isOpen={this.state.showDialModal}
          />
          <DialList
            dials={dials}
            handleShowDialModal={this.handleShowDialModal}
          />
        </Page>
      </ThemeProvider>
    );
  }
}

NewTabPage.propTypes = {
  container: PropTypes.objectOf(PropTypes.string),
  dials: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.objectOf(PropTypes.string),
  setContainer: PropTypes.func.isRequired,
  setCurrentDial: PropTypes.func.isRequired,
  setDials: PropTypes.func.isRequired,
  startSetBackground: PropTypes.func.isRequired,
  startDeleteDial: PropTypes.func.isRequired,
  updateDialOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dials: state.dials
    .filter(dial => dial.container === state.container.cookieStoreId)
    .sort((a, b) => a.sortIndex > b.sortIndex)
});

export default connect(
  mapStateToProps,
  actions
)(NewTabPage);
