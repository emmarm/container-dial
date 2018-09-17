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
  padding: 0,
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  ':hover': {
    background: 'white'
  }
});

const TitleArea = styled('div')({
  alignItems: 'center',
  color: 'rgba(0,0,0,0.7)',
  display: 'flex',
  fontSize: 16,
  fontWeight: 100,
  height: 80,
  justifyContent: 'center',
  overflow: 'hidden',
  padding: 10,
  textAlign: 'center',
  wordBreak: 'break-word'
});

const Favicon = styled('div')(
  {
    height: 80,
    width: 80
  },
  ({ favicon }) => ({
    background: `center / contain no-repeat url('${favicon}')`
  })
);

const getTrimmedName = name => {
  const lastWordEnd = name.lastIndexOf(' ', 33);
  return lastWordEnd > -1 && lastWordEnd < 33
    ? name.slice(0, lastWordEnd) + '...'
    : name.slice(0, 11) + '...';
};

const Dial = ({ dial: { siteUrl, siteName, favicon } }) => {
  const name = siteName.length > 36 ? getTrimmedName(siteName) : siteName;
  return (
    <DialContent href={siteUrl}>
      <TitleArea>{name}</TitleArea>
      <Favicon favicon={favicon} />
    </DialContent>
  );
};

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
