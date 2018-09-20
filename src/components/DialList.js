import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import Sortable from 'react-sortablejs';

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

  render() {
    const dialsList = this.state.dials.map(dial => (
      <li key={dial.id} data-id={dial.id}>
        <DialContainer>
          <Dial ariaLabel={dial.siteName} dial={dial} />
          <EditDialButton
            dial={dial}
            handleShowDialModal={this.props.handleShowDialModal}
          />
        </DialContainer>
      </li>
    ));
    return (
      <List>
        <Sortable
          tag="ul"
          onChange={order => {
            const newDialOrder = order.map(id =>
              this.state.dials.find(dial => dial.id === Number(id))
            );
            this.setState({ dials: newDialOrder });
          }}
        >
          {dialsList}
        </Sortable>
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
