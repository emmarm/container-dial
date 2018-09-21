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
    case 'UPDATE_DIAL_ORDER':
      return state.map(dial => {
        const matchingDial = action.payload.find(
          actionItem => Number(actionItem.id) === dial.id
        );
        if (matchingDial) {
          return { ...dial, sortIndex: matchingDial.sortIndex };
        }
        return dial;
      });
    default:
      return state;
  }
};

export default dialsReducer;
