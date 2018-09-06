import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import appReducer from './reducers';
import Page from './components/Page';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducer);

const renderApp = () => {
  const container = {
    color: 'turquoise',
    name: 'personal'
  };

  ReactDOM.render(
    <Provider store={store}>
      <Page container={container} />
    </Provider>,
    document.getElementById('page')
  );
};

renderApp();

registerServiceWorker();
