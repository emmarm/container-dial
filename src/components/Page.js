import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
  render() {
    const { container, theme } = this.props;
    return (
      <div style={{ backgroundColor: theme.primary }}>{container.name}</div>
    );
  }
}

Page.propTypes = {
  container: PropTypes.shape({
    color: PropTypes.String,
    name: PropTypes.String
  }),
  theme: PropTypes.shape({
    primary: PropTypes.string,
    light: PropTypes.string,
    dark: PropTypes.string
  })
};

export default Page;
