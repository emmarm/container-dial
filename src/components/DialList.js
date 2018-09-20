import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'emotion';
import styled from 'react-emotion';
import Sortable from 'react-sortablejs';

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

const DialContainer = styled('div')({
  display: 'flex',
  margin: 15,
  position: 'relative',
  width: 240,
  ':hover': {
    '& .edit-button': {
      opacity: 1
    }
  }
});

const Handle = styled('div')(
  {
    cursor: 'move',
    height: 80,
    width: 20
  },
  ({ theme }) => ({
    backgroundColor: theme.dark
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
    const dialsList = this.state.dials.map(dial => (
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
            const newDialOrder = dialsOnly.map(id =>
              this.state.dials.find(dial => dial.id === Number(id))
            );
            this.setState({ dials: newDialOrder });
          }}
          options={{
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
  handleShowDialModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dials: state.dials.filter(
    dial => dial.container === state.container.cookieStoreId
  )
});

export default connect(mapStateToProps)(DialList);
