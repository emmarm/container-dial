import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const DialButton = styled('button')({
  background: 'rgba(255, 255, 255, 0.9)',
  border: 'none',
  boxShadow:
    'rgba(50, 50, 93, 0.1) 0px 7px 14px, rgba(0, 0, 0, 0.08) 0px 3px 6px',
  cursor: 'pointer',
  display: 'grid',
  gridTemplateColumns: '1fr 80px',
  height: '100%',
  padding: 0,
  textDecoration: 'none',
  width: '100%',
  ':hover,:focus': {
    background: 'white'
  },
  '::-moz-focus-inner': {
    border: 0
  }
});

const TitleArea = styled('div')({
  alignItems: 'center',
  color: 'rgba(0,0,0,0.7)',
  display: 'flex',
  fontSize: 18,
  fontWeight: 400,
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
  ({ favicon, theme, useFavicon }) => ({
    background: useFavicon && `center / contain no-repeat url('${favicon}')`,
    color: theme.dark,
    fontSize: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
);

class Dial extends Component {
  state = { useFavicon: true };

  async componentDidMount() {
    const { favicon } = this.props.dial;

    const image = new Image();
    image.src = favicon;
    await image.complete;
    image.naturalHeight === 0 && this.setState(() => ({ useFavicon: false }));
  }

  getTrimmedName = siteName => {
    const lastWordEnd = siteName.lastIndexOf(' ', 33);
    return lastWordEnd > -1 && lastWordEnd < 33
      ? siteName.slice(0, lastWordEnd) + '...'
      : siteName.slice(0, 11) + '...';
  };

  getLetter = siteName => siteName.charAt(0).toUpperCase();

  openLink = () => {
    window.location = this.props.dial.siteUrl;
  };

  render() {
    const {
      dial: { favicon, siteName }
    } = this.props;
    const { useFavicon } = this.state;
    return (
      <DialButton onClick={this.openLink} tabIndex={1}>
        <TitleArea>
          {siteName.length > 36 ? this.getTrimmedName(siteName) : siteName}
        </TitleArea>
        <Favicon favicon={favicon} useFavicon={useFavicon}>
          {!useFavicon && this.getLetter(siteName)}
        </Favicon>
      </DialButton>
    );
  }
}

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
