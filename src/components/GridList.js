import React from 'react';
import PropTypes from 'prop-types';

const GridList = ({ children }) => <div className="grid-list">{children}</div>;

GridList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default GridList;
