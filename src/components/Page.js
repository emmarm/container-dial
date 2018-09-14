import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const PageContainer = styled('div')({
  height: '100vh',
  overflow: 'hidden',
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

const PageTitle = styled('h1')(
  {
    margin: '30px',
    textAlign: 'center'
  },
  props => ({
    color: props.theme.light
  })
);

export const Page = ({ background, container, children }) => (
  <PageContainer>
    <Background background={background}>
      <Overlay>
        <PageTitle>{container.name}</PageTitle>
        {children}
      </Overlay>
    </Background>
  </PageContainer>
);

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  background: PropTypes.shape({
    container: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    imageDate: PropTypes.string
  }),
  container: PropTypes.objectOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  background: state.backgrounds.filter(
    background => background.container === state.container.cookieStoreId
  )[0],
  container: state.container
});

export default connect(mapStateToProps)(Page);
