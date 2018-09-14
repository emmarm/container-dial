import { combineReducers } from 'redux';

import dialsReducer from './dialsReducer';
import containerReducer from './containerReducer';
import backgroundsReducer from './backgroundsReducer';

const appReducer = combineReducers({
  dials: dialsReducer,
  container: containerReducer,
  backgrounds: backgroundsReducer
});

export default appReducer;
