import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import Dial from './Dial';
import EditDialButton from './EditDialButton';
import AddDialButton from './AddDialButton';

const List = styled('div')({
  display: 'grid',
  gridAutoRows: '80px',
  gridGap: '25px',
  gridTemplateColumns: 'repeat(auto-fill, 220px)',
  height: '80vh',
  justifyContent: 'center',
  overflowX: 'hidden',
  overflowY: 'auto',
  padding: '10px 40px',
  width: '100vw'
});

const DialContainer = styled('div')({
  position: 'relative',
  ':hover': {
    '& .edit-button': {
      opacity: 1
    }
  }
});

class DialList extends Component {
  state = {
    dials: []
  };

  componentDidUpdate(prevProps) {
    const { dials } = this.props;
    if (dials !== prevProps.dials) {
      this.setState(() => ({ dials }));
    }
  }

  renderDials = () => {
    return this.state.dials.map(dial => (
      <DialContainer key={dial.siteName}>
        <Dial ariaLabel={dial.siteName} dial={dial} />
        <EditDialButton
          dial={dial}
          handleShowDialModal={this.props.handleShowDialModal}
        />
      </DialContainer>
    ));
  };

  render() {
    return (
      <List>
        {this.renderDials()}
        <AddDialButton handleShowDialModal={this.props.handleShowDialModal} />
      </List>
    );
  }
}

DialList.propTypes = {
  dials: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleShowDialModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dials: state.dials.filter(
    dial => dial.container === state.container.cookieStoreId
  )
});

export default connect(mapStateToProps)(DialList);
