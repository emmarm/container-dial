import backgroundsReducer from '../reducers/backgroundsReducer';
import containerReducer from '../reducers/containerReducer';
import themeReducer from '../reducers/themeReducer';

describe('reducers', () => {
  describe('backgroundReducer', () => {
    const payload = {
      container: 'Personal',
      image: { url: 'hi' },
      imageDate: new Date().toDateString()
    };

    it('sets up backgroundsReducer default state', () => {
      const state = backgroundsReducer(undefined, { type: '@@INIT' });
      expect(state).toEqual([]);
    });

    it('sets background object for new container', () => {
      const action = { type: 'SET_BACKGROUND', payload };
      const state = backgroundsReducer([], action);
      expect(state).toEqual([payload]);
    });

    it('does not change image for container with current image date', () => {
      const currState = {
        container: 'Personal',
        image: {},
        imageDate: new Date().toDateString()
      };
      const action = { type: 'SET_BACKGROUND', payload };
      const state = backgroundsReducer([currState], action);
      expect(state).toEqual([currState]);
    });

    it('updates image for container with past date', () => {
      const yesterday = new Date(
        Date.now() - 24 * 60 * 60 * 1000
      ).toDateString();
      const currState = {
        container: 'Personal',
        image: {},
        imageDate: yesterday
      };
      const action = { type: 'SET_BACKGROUND', payload };
      const state = backgroundsReducer([currState], action);
      expect(state).toEqual([payload]);
    });
  });

  describe('containerReducer', () => {
    const defaultState = {
      color: 'black',
      colorCode: '#333',
      cookieStoreId: 'firefox-default',
      icon: '',
      iconUrl: '',
      name: 'Default'
    };

    it('sets up containerReducer default state', () => {
      const state = containerReducer(undefined, { type: '@@INIT' });
      expect(state).toEqual(defaultState);
    });

    it('updates containerReducer with new container', () => {
      const payload = {
        name: 'Personal',
        color: 'yellow'
      };
      const action = { type: 'SET_CONTAINER', payload };
      const state = containerReducer(defaultState, action);
      expect(state).toEqual(payload);
    });
  });

  describe('themeReducer', () => {
    const defaultState = {
      primary: '#333',
      dark: '#0c0c0c',
      light: '#5c5c5c'
    };

    it('sets up themeReducer default state', () => {
      const state = themeReducer(undefined, { type: '@@init' });
      expect(state).toEqual(defaultState);
    });

    it('updates themeReducer with new theme', () => {
      const payload = { primary: '#ffcb00', dark: '#c79b00', light: '#fffe50' };
      const action = { type: 'SET_THEME', payload };
      const state = themeReducer(defaultState, action);
      expect(state).toEqual(payload);
    });
  });
});
