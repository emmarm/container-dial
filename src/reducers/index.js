import { combineReducers } from 'redux';

import backgroundsReducer from './backgroundsReducer';
import containerReducer from './containerReducer';
import currentDialReducer from './currentDialReducer';
import dialsReducer from './dialsReducer';

const appReducer = combineReducers({
  backgrounds: backgroundsReducer,
  container: containerReducer,
  currentDial: currentDialReducer,
  dials: dialsReducer
});

export default appReducer;
