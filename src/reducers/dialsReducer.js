const DEFAULT_STATE = [
  {
    siteName: 'Udemy',
    siteUrl: 'https://www.udemy.com',
    container: '123',
    favicon:
      'https://www.udemy.com/staticx/udemy/images/v6/favicon-196x196.png',
    id: 1,
    sortIndex: 3
  },
  {
    siteName: 'Shut Up and Sit Down',
    siteUrl: 'https://www.shutupandsitdown.com',
    container: '123',
    favicon:
      'https://www.shutupandsitdown.com/wp-content/uploads/2016/04/cropped-favicon-200x200.png',
    id: 2,
    sortIndex: 0
  },
  {
    siteName: 'Sean Croxton',
    siteUrl: 'https://www.seancroxton.com/',
    container: '123',
    favicon: 'http://seancroxton.com/apple-touch-icon.png',
    id: 3,
    sortIndex: 2
  },
  {
    siteName: 'Google Firebase Console',
    siteUrl: 'https://firebase.google.com',
    container: '123',
    favicon:
      'https://firebase.google.com/_static/be157a52c2/images/firebase/touchicon-180.png',
    id: 4,
    sortIndex: 1
  }
];

const dialsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_DIAL':
      return [...state, action.payload];
    case 'EDIT_DIAL':
      return state.map(dial => {
        if (dial.id === action.oldDial.id) {
          return {
            ...action.newDial
          };
        }
        return dial;
      });
    case 'DELETE_DIAL':
      return state.filter(dial => {
        if (dial.id === action.payload.id) {
          return false;
        }
        return true;
      });
    case 'UPDATE_DIAL_ORDER':
      return state.map(dial => {
        const matchingDial = action.payload.find(
          actionItem => Number(actionItem.id) === dial.id
        );
        if (matchingDial) {
          return { ...dial, sortIndex: matchingDial.sortIndex };
        }
        return dial;
      });
    default:
      return state;
  }
};

export default dialsReducer;
