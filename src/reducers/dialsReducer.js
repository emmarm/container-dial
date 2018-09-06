const dialsReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_DIAL':
      return action.payload;
    default:
      return state;
  }
};

export default dialsReducer;
