import { combineReducers } from 'redux';

import dialsReducer from './dialsReducer';
import themeReducer from './themeReducer';
import containerReducer from './containerReducer';
import backgroundsReducer from './backgroundsReducer';

const appReducer = combineReducers({
  dials: dialsReducer,
  theme: themeReducer,
  container: containerReducer,
  backgrounds: backgroundsReducer
});

export default appReducer;
