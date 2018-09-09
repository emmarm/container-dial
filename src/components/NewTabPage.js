import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Page from './Page';
import GridList from './GridList';
import Dial from './Dial';
import AddDialButton from './AddDialButton';
import AddDialModal from './AddDialModal';

export class NewTabPage extends React.Component {
  state = { showAddDialModal: false };
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

  handleShowAddDialModal = () => {
    this.setState(() => ({
      showAddDialModal: true
    }));
  };

  handleHideAddDialModal = () => {
    this.setState(() => ({
      showAddDialModal: false
    }));
  };

  renderDials = (dials, container) =>
    dials
      .filter(dial => dial.container === container.name)
      .map(({ name, favicon }) => (
        <Dial
          key={name}
          ariaLabel={name}
          name={name}
          theme={this.props.theme}
          icon={favicon}
        />
      ));

  render() {
    const { container, theme, dials } = this.props;
    return (
      <Page theme={theme}>
        {this.state.showAddDialModal && (
          <AddDialModal
            handleHideAddDialModal={this.handleHideAddDialModal}
            container={container}
          />
        )}
        <GridList>
          {this.renderDials(dials, container)}
          <AddDialButton handleShowAddDialModal={this.handleShowAddDialModal} />
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

export default connect(
  undefined,
  actions
)(NewTabPage);
