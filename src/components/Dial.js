import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const DialContent = styled('a')({
  background: 'rgba(255, 255, 255, 0.9)',
  border: 'none',
  boxShadow:
    'rgba(50, 50, 93, 0.1) 0px 7px 14px, rgba(0, 0, 0, 0.08) 0px 3px 6px',
  cursor: 'pointer',
  display: 'grid',
  gridTemplateColumns: '1fr 80px',
  height: '100%',
  padding: '0',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  ':hover': {
    background: 'white'
  }
});

const TitleArea = styled('div')({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center'
});

const Title = styled('p')({
  color: 'rgb(10, 102, 87)',
  fontSize: '16px',
  fontWeight: '100',
  textAlign: 'center'
});

const Favicon = styled('div')(
  {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '90%',
    height: '80px',
    width: '80px'
  },
  props => ({
    backgroundImage: `url('${props.favicon}')`
  })
);

const Dial = ({ dial: { siteUrl, siteName, favicon } }) => (
  <DialContent href={siteUrl}>
    <TitleArea>
      <Title>{siteName}</Title>
    </TitleArea>
    <Favicon favicon={favicon} />
  </DialContent>
);

Dial.propTypes = {
  dial: PropTypes.shape({
    container: PropTypes.string,
    favicon: PropTypes.string,
    id: PropTypes.number,
    siteName: PropTypes.string,
    siteUrl: PropTypes.string
  })
};

export default Dial;
