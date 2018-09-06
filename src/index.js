import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers';
import Page from './components/Page';
import getTheme from './utils/getTheme';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const renderApp = () => {
  const container = {
    color: 'turquoise',
    name: 'personal'
  };

  const theme = getTheme(container.color);

  ReactDOM.render(
    <Provider store={store}>
      <Page container={container} theme={theme} />
    </Provider>,
    document.getElementById('page')
  );
};

renderApp();

registerServiceWorker();
