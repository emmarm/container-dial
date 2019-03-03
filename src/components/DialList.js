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

const renderDials = (dials, handleShowDialModal) =>
  dials.map(dial => (
    <DialContainer key={dial.id} data-id={dial.id}>
      <Handle className="handle" />
      <Dial ariaLabel={dial.siteName} dial={dial} />
      <EditDialButton dial={dial} handleShowDialModal={handleShowDialModal} />
    </DialContainer>
  ));

export const DialList = ({
  dials,
  handleShowDialModal,
  startUpdateDialOrder
}) => {
  return (
    <Sortable
      className={sortable}
      onChange={order => {
        const dialOrder = order.slice(0, order.length - 1);
        const movedDials = dialOrder
          .map((id, index) => {
            const matchingDial = dials.find(dial => dial.id == id);

            if (index !== matchingDial.sortIndex) {
              return { ...matchingDial, sortIndex: index };
            }

            return false;
          })
          .filter(movedDial => !!movedDial);

        startUpdateDialOrder(movedDials);
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
      {renderDials(dials, handleShowDialModal)}
      <AddDialButton handleShowDialModal={handleShowDialModal} />
    </Sortable>
  );
};

DialList.propTypes = {
  dials: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleShowDialModal: PropTypes.func.isRequired,
  startUpdateDialOrder: PropTypes.func.isRequired
};

export default connect(
  undefined,
  actions
)(DialList);
