import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Page from './Page';
import GridList from './GridList';
import Dial from './Dial';
import AddDialButton from './AddDialButton';
import DialModal from './DialModal';
import EditDialButton from './EditDialButton';

const DEFAULT_STATE = { showDialModal: false, dial: null };

export class NewTabPage extends React.Component {
  state = DEFAULT_STATE;

  componentDidMount() {
    const {
      container,
      theme,
      setContainer,
      setTheme,
      startSetBackground
    } = this.props;

    setContainer(container);
    setTheme(theme);
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
    this.setState(() => DEFAULT_STATE);
  };

  renderDials = (dials, container) => {
    return dials.filter(dial => dial.container === container.name).map(dial => (
      <div key={dial.siteName}>
        <Dial ariaLabel={dial.siteName} theme={this.props.theme} dial={dial} />
        <EditDialButton
          dial={dial}
          handleShowDialModal={this.handleShowDialModal}
        />
      </div>
    ));
  };

  render() {
    const { container, theme, dials } = this.props;
    return (
      <Page theme={theme}>
        <DialModal
          handleHideDialModal={this.handleHideDialModal}
          container={container}
          isOpen={this.state.showDialModal}
          theme={this.props.theme}
          dial={this.state.dial}
        />
        <GridList>
          {this.renderDials(dials, container)}
          <AddDialButton handleShowDialModal={this.handleShowDialModal} />
        </GridList>
      </Page>
    );
  }
}

NewTabPage.propTypes = {
  container: PropTypes.shape({
    color: PropTypes.String,
    name: PropTypes.String
  }),
  theme: PropTypes.shape({
    primary: PropTypes.string,
    light: PropTypes.string,
    dark: PropTypes.string
  }),
  dials: PropTypes.arrayOf(PropTypes.object),
  setContainer: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
  startSetBackground: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dials: state.dials
});

export default connect(
  mapStateToProps,
  actions
)(NewTabPage);
