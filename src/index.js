import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import appReducer from './reducers';
import Page from './components/Page';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('page')
);

registerServiceWorker();
