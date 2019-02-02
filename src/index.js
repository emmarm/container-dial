/* global browser */
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
  * {
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  }
  body {
    margin: 0;
  }
`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

function logStorageChange(changes, area) {
  console.log('Change in storage area: ' + area);

  var changedItems = Object.keys(changes);

  for (var item of changedItems) {
    console.log(item + ' has changed:');
    console.log('Old value: ');
    console.log(changes[item].oldValue);
    console.log('New value: ');
    console.log(changes[item].newValue);
  }
}

browser.storage.onChanged.addListener(logStorageChange);

const renderApp = async () => {
  Modal.setAppElement(document.getElementById('page'));

  const { cookieStoreId } = await browser.tabs.getCurrent();
  /* eslint-disable indent */
  const container =
    cookieStoreId !== 'firefox-default'
      ? await browser.contextualIdentities.get(cookieStoreId)
      : // firefox-default container doesn't contain any object data, create own default so no error
        {
          color: 'pale beige',
          colorCode: '#c4b793',
          cookieStoreId: 'firefox-default',
          icon: '',
          iconUrl: '',
          name: 'Default'
        };
  /* eslint-enable indent */

  const containerTheme = getTheme(container.color);
  const theme = {
    ...containerTheme,
    danger: '#FF3762',
    dangerLight: '#FF5F81',
    secondary: '#bbb',
    secondaryLight: '#c8c8c8',
    disabled: '#777'
  };

  ReactDOM.render(
    <Provider store={store}>
      <NewTabPage container={container} theme={theme} />
    </Provider>,
    document.getElementById('page')
  );
};

renderApp();

registerServiceWorker();
