import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
  render() {
    const { container } = this.props;
    return (
      <div style={{ backgroundColor: container.color }}>{container.name}</div>
    );
  }
}

Page.propTypes = {
  container: PropTypes.shape({
    color: PropTypes.String,
    name: PropTypes.String
  })
};

export default Page;
