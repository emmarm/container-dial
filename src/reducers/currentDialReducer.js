const DEFAULT_STATE = null;

const currentDialReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_DIAL':
      return action.payload;
    default:
      return state;
  }
};

export default currentDialReducer;
