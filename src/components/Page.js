import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Page = ({ background, theme, container, children }) => {
  const bg =
    background && background.image
      ? `url('${background.image.urls.full}')`
      : `linear-gradient(to bottom ${theme.primary}, ${theme.primary})`;

  return (
    <div className="page__container">
      <div className="page" style={{ backgroundImage: bg }}>
        <h1 className="page__title" style={{ color: theme.light }}>
          {container.name}
        </h1>
        {children}
      </div>
    </div>
  );
};

Page.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string,
    light: PropTypes.string,
    dark: PropTypes.string
  }),
  children: PropTypes.arrayOf(PropTypes.object),
  background: PropTypes.shape({
    container: PropTypes.string,
    image: PropTypes.object,
    imageDate: PropTypes.string
  }),
  container: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = state => ({
  background: state.backgrounds.filter(
    background => background.container === state.container.name
  )[0],
  container: state.container,
  theme: state.theme
});

export default connect(mapStateToProps)(Page);
