import { combineReducers } from 'redux';

import dialsReducer from './dialsReducer';
import themeReducer from './themeReducer';
import containerReducer from './containerReducer';

const appReducer = combineReducers({
  dials: dialsReducer,
  theme: themeReducer,
  container: containerReducer
});

export default appReducer;
