import backgroundsReducer from '../reducers/backgroundsReducer';
import containerReducer from '../reducers/containerReducer';
import dialsReducer from '../reducers/dialsReducer';

describe('reducers', () => {
  describe('backgroundReducer', () => {
    const payload = {
      container: '123',
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
        container: '123',
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
        container: '123',
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

  describe('dialsReducer', () => {
    it('sets up dialsReducer default state', () => {
      const state = dialsReducer(undefined, { type: '@@init' });
      expect(state).toEqual([]);
    });

    it('adds new dial to dialsReducer', () => {
      const payload = {
        container: '123',
        siteName: 'Goodreads',
        siteUrl: 'https://goodreads.com',
        favicon: 'https://www.goodreads.com/favicon.ico',
        id: 1,
        sortIndex: 0
      };
      const action = { type: 'ADD_DIAL', payload };
      const state = dialsReducer([], action);
      expect(state).toEqual([payload]);
    });

    it('updates dial sort order', () => {
      const currState = [
        {
          container: '123',
          siteName: 'Goodreads',
          siteUrl: 'https://goodreads.com',
          favicon: 'https://www.goodreads.com/favicon.ico',
          id: 1,
          sortIndex: 0
        },
        {
          container: '123',
          siteName: 'Gmail',
          siteUrl: 'https://mail.google.com',
          favicon: 'error',
          id: 2,
          sortIndex: 1
        }
      ];
      const payload = [{ id: 1, sortIndex: 1 }, { id: 2, sortIndex: 0 }];
      const action = { type: 'UPDATE_DIAL_ORDER', payload };
      const state = dialsReducer(currState, action);
      expect(state).toEqual([
        {
          container: '123',
          siteName: 'Goodreads',
          siteUrl: 'https://goodreads.com',
          favicon: 'https://www.goodreads.com/favicon.ico',
          id: 1,
          sortIndex: 1
        },
        {
          container: '123',
          siteName: 'Gmail',
          siteUrl: 'https://mail.google.com',
          favicon: 'error',
          id: 2,
          sortIndex: 0
        }
      ]);
    });
  });
});
