import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Grid = styled('div')({
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

const GridList = ({ children }) => <Grid>{children}</Grid>;

GridList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default GridList;
