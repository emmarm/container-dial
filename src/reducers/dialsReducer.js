const DEFAULT_STATE = [];

const dialsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_DIAL':
      return [...state, action.payload];
    case 'EDIT_DIAL':
      return state.map(dial => {
        if (dial.id === action.oldDial.id) {
          return {
            ...action.newDial
          };
        }
        return dial;
      });
    case 'DELETE_DIAL':
      return state.filter(dial => {
        if (dial.id === action.payload.id) {
          return false;
        }
        return true;
      });
    default:
      return state;
  }
};

export default dialsReducer;
