import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'emotion';
import styled from 'react-emotion';
import Sortable from 'react-sortablejs';

import * as actions from '../actions';
import Dial from './Dial';
import EditDialButton from './EditDialButton';
import AddDialButton from './AddDialButton';

const List = styled('div')({
  alignItems: 'flex-start',
  display: 'flex',
  flexWrap: 'wrap',
  height: '80vh',
  justifyContent: 'flex-start',
  overflowX: 'hidden',
  overflowY: 'auto',
  padding: '10px 40px',
  width: '100vw'
});

const sortable = css({
  display: 'flex',
  flexWrap: 'wrap'
});

const ghost = css({
  opacity: 0.5
});

const DialContainer = styled('div')({
  display: 'flex',
  margin: 15,
  position: 'relative',
  width: 240,
  ':hover': {
    '& .edit-button': {
      opacity: 1
    },
    '& .handle': {
      opacity: 1
    }
  }
});

const Handle = styled('div')(
  {
    cursor: 'move',
    height: 80,
    opacity: 0,
    position: 'absolute',
    transition: 'all 200ms ease-in',
    width: 20
  },
  ({ theme }) => ({
    ':hover': {
      background: theme.light
    }
  })
);

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
    const dialsList = this.state.dials
      .sort((a, b) => a.sortIndex > b.sortIndex)
      .map(dial => (
        <DialContainer key={dial.id} data-id={dial.id}>
          <Handle className="handle" />
          <Dial ariaLabel={dial.siteName} dial={dial} />
          <EditDialButton
            dial={dial}
            handleShowDialModal={this.props.handleShowDialModal}
          />
        </DialContainer>
      ));
    return (
      <List>
        <Sortable
          className={sortable}
          onChange={order => {
            const dialsOnly = order.filter(item => !!Number(item));
            const newDialOrder = dialsOnly.map((id, index) => {
              return { id, sortIndex: index };
            });

            this.props.updateDialOrder(newDialOrder);
          }}
          options={{
            ghostClass: ghost,
            handle: '.handle',
            onMove: evt => {
              if (evt.related.type === 'button') {
                return false;
              }
            }
          }}
        >
          {dialsList}
          <AddDialButton handleShowDialModal={this.props.handleShowDialModal} />
        </Sortable>
      </List>
    );
  }
}

DialList.propTypes = {
  dials: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleShowDialModal: PropTypes.func.isRequired,
  updateDialOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dials: state.dials.filter(
    dial => dial.container === state.container.cookieStoreId
  )
});

export default connect(
  mapStateToProps,
  actions
)(DialList);
