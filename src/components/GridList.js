import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Grid = styled('div')({
  display: 'grid',
  gridGap: '20px',
  gridTemplateColumns: 'repeat(auto-fit, 220px)',
  justifyContent: 'center',
  margin: '40px'
});

const GridList = ({ children }) => <Grid>{children}</Grid>;

GridList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default GridList;
