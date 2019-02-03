const DEFAULT_STATE = {};

const containerReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_CONTAINER':
      return action.payload;
    default:
      return state;
  }
};

export default containerReducer;
