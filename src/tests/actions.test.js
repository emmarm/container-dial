import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import * as actions from '../actions';
const { setTheme, setContainer, startSetBackground, setBackground } = actions;

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

  it('calls setBackground from startSetBackground', () => {
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
});
