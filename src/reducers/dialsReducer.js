const dialsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DIAL':
      return [...state, action.payload];
    case 'EDIT_DIAL':
      return state.map(dial => {
        if (
          dial.container === action.oldDial.container &&
          dial.siteUrl === action.oldDial.siteUrl
        ) {
          return {
            ...action.newDial
          };
        }
        return dial;
      });
    default:
      return state;
  }
};

export default dialsReducer;
