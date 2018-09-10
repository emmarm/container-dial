import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import * as actions from '../actions';
const {
  setTheme,
  setContainer,
  startSetBackground,
  setBackground,
  addDial
} = actions;

describe('actions', () => {
  it('sets up setTheme action', () => {
    const theme = {
      primary: '#888',
      light: '#fff',
      dark: '#000'
    };
    const action = setTheme(theme);
    expect(action).toEqual({
      type: 'SET_THEME',
      payload: theme
    });
  });

  it('sets up setContainer action', () => {
    const container = {
      name: 'Personal',
      color: 'pink'
    };
    const action = setContainer(container);
    expect(action).toEqual({
      type: 'SET_CONTAINER',
      payload: container
    });
  });

  it('calls setBackground from startSetBackground', done => {
    const store = mockStore({});
    const container = { name: 'Personal', color: 'pink' };
    const containerWithImage = {
      container: 'Personal',
      image: '',
      imageDate: new Date().toDateString()
    };

    return store.dispatch(startSetBackground(container)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(setBackground(containerWithImage));
      done();
    });
  });

  it('sets up setBackground action', () => {
    const background = {
      container: 'Personal',
      image: {},
      imageDate: 'September 7, 2018'
    };
    const action = setBackground(background);
    expect(action).toEqual({
      type: 'SET_BACKGROUND',
      payload: background
    });
  });

  it('sets up addDial action', () => {
    const dial = {
      container: 'Personal',
      siteName: 'Goodreads',
      siteUrl: 'https://goodreads.com',
      favicon: 'https://www.goodreads.com/favicon.ico'
    };
    const action = addDial(dial);
    expect(action).toEqual({
      type: 'ADD_DIAL',
      payload: dial
    });
  });
});
