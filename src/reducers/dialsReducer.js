const dialsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DIAL':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default dialsReducer;
