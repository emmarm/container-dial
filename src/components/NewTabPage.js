import React from 'react';
import PropTypes from 'prop-types';

import Page from './Page';
import DIALS from './DIALS';

class NewTabPage extends React.Component {
  async componentDidMount() {
    const { container, theme, setContainer, setTheme } = this.props;

    setContainer(container);
    setTheme(theme);
  }
  renderDials = container =>
    DIALS.filter(dial => dial.container === container.name).map(({ name }) => (
      <div key={name} ariaLabel={name} name={name}>
        {name}
      </div>
    ));

  render() {
    const { container, theme } = this.props;
    return (
      <Page theme={theme}>
        <h1>{container.name}</h1>
        {this.renderDials(container)}
      </Page>
    );
  }
}

NewTabPage.propTypes = {
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

export default NewTabPage;
