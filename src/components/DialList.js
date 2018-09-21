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

const sortable = css({
  display: 'grid',
  gridAutoRows: 80,
  gridGap: 25,
  gridTemplateColumns: 'repeat(auto-fill, 240px)',
  height: '80vh',
  justifyContent: 'center',
  overflowX: 'hidden',
  overflowY: 'auto',
  padding: '10px 40px',
  width: '100vw'
});

const ghost = css({
  opacity: 0
});

const DialContainer = styled('div')({
  display: 'flex',
  position: 'relative',
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

export class DialList extends Component {
  state = {
    dials: []
  };

  componentDidUpdate(prevProps) {
    const { dials } = this.props;
    if (dials !== prevProps.dials) {
      this.setState(() => ({ dials }));
    }
  }

  renderDials = () =>
    this.state.dials.sort((a, b) => a.sortIndex > b.sortIndex).map(dial => (
      <DialContainer key={dial.id} data-id={dial.id}>
        <Handle className="handle" />
        <Dial ariaLabel={dial.siteName} dial={dial} />
        <EditDialButton
          dial={dial}
          handleShowDialModal={this.props.handleShowDialModal}
        />
      </DialContainer>
    ));

  render() {
    return (
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
        {this.renderDials()}
        <AddDialButton handleShowDialModal={this.props.handleShowDialModal} />
      </Sortable>
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
