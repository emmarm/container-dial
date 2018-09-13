import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const PageContainer = styled('div')({
  height: '100vh',
  position: 'relative',
  width: '100vw'
});

const Background = styled('div')(
  {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '100%'
  },
  props => ({
    backgroundImage:
      props.background && props.background.image
        ? `url('${props.background.image.urls.full}')`
        : `linear-gradient(to bottom, white, black)`
  })
);

const Overlay = styled('div')({
  background: 'rgba(0, 0, 0, 0.2)',
  height: '100%',
  left: '0',
  position: 'absolute',
  top: '0',
  width: '100%'
});

const PageTitle = styled('h1')({
  margin: '40px',
  textAlign: 'center'
});

export const Page = ({ background, theme, container, children }) => (
  <PageContainer>
    <Background background={background}>
      <Overlay>
        <PageTitle style={{ color: theme.light }}>{container.name}</PageTitle>
        {children}
      </Overlay>
    </Background>
  </PageContainer>
);

Page.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string,
    light: PropTypes.string,
    dark: PropTypes.string
  }),
  children: PropTypes.arrayOf(PropTypes.object),
  background: PropTypes.shape({
    container: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
