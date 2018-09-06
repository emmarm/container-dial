const DEFAULT_STATE = {
  color: 'black',
  colorCode: '#333',
  cookieStoreId: 'firefox-default',
  icon: '',
  iconUrl: '',
  name: 'Default'
};

const containerReducer = (state = { ...DEFAULT_STATE }, action) => {
  switch (action.type) {
    case 'SET_CONTAINER':
      return action.payload;
    default:
      return state;
  }
};

export default containerReducer;
