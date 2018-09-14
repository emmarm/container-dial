import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Modal from 'react-modal';
import { injectGlobal } from 'emotion';

import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers';
import NewTabPage from './components/NewTabPage';
import getTheme from './utils/getTheme';

injectGlobal`
  body {
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
  }
`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

const renderApp = () => {
  Modal.setAppElement(document.getElementById('page'));

  const container = {
    color: 'red',
    name: 'Personal'
  };

  const theme = getTheme(container.color);

  ReactDOM.render(
    <Provider store={store}>
      <NewTabPage container={container} theme={theme} />
    </Provider>,
    document.getElementById('page')
  );
};

renderApp();

registerServiceWorker();
