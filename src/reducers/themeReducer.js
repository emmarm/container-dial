const DEFAULT_STATE = {
  primary: '#333',
  dark: '#0c0c0c',
  light: '#5c5c5c'
};

const themeReducer = (state = { ...DEFAULT_STATE }, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
