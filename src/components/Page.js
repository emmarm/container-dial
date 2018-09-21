import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const PageContainer = styled('div')(
  {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    width: '100vw'
  },
  ({ theme }) => ({
    background: theme.light
  })
);

const Background = styled('div')(
  {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  ({ background }) => ({
    backgroundImage:
      background && background.image && `url('${background.image.urls.full}')`
  })
);

const Overlay = styled('div')({
  background: 'rgba(255,255,255,0.1)',
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%'
});

const PageTitle = styled('h1')({
  color: 'rgba(255,255,255,0.7)',
  fontWeight: 100,
  margin: 30,
  textAlign: 'center'
});

const Attribution = styled('p')({
  color: 'white',
  fontStyle: 'italic',
  fontWeight: 100,
  marginRight: 40,
  textAlign: 'right'
});

const Link = styled('a')(
  {
    textDecoration: 'none'
  },
  ({ theme }) => ({
    color: theme.dark
  })
);

export const Page = ({ background, container, children }) => {
  console.log(background);
  const user = !!background && !!background.image && background.image.user;
  return (
    <PageContainer>
      <Background background={background}>
        <Overlay>
          <PageTitle>{container.name}</PageTitle>
          {children}
          <Attribution>
            Photo by{' '}
            <Link
              href={`${user &&
                user.links.html}?utm_source=container_dial&utm_medium=referral`}
            >
              {user && user.first_name} {user && user.last_name}
            </Link>{' '}
            on Unsplash
          </Attribution>
        </Overlay>
      </Background>
    </PageContainer>
  );
};

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
