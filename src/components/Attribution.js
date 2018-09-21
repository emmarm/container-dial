import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Text = styled('p')({
  color: 'white',
  fontSize: 14,
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

const Attribution = ({ image }) => {
  const { user } = !!image && image;
  return (
    <Text>
      Photo by{' '}
      <Link
        href={`${user &&
          user.links.html}?utm_source=container_dial&utm_medium=referral`}
      >
        {user && user.first_name} {user && user.last_name}
      </Link>{' '}
      on{' '}
      <Link href="https://unsplash.com/?utm_source=container_dial&utm_medium=referral">
        Unsplash
      </Link>
    </Text>
  );
};

Attribution.propTypes = {
  image: PropTypes.object
};

export default Attribution;
