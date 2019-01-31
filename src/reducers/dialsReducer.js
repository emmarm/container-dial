const DEFAULT_STATE = [];

const dialsReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case 'SET_DIALS':
      return payload;
    case 'ADD_DIAL':
      return [...state, payload];
    case 'EDIT_DIAL':
      return state.map(dial => {
        if (dial.id === payload.oldDial.id) {
          return {
            ...payload.newDial
          };
        }
        return dial;
      });
    case 'DELETE_DIAL':
      return state.filter(dial => {
        if (dial.id === payload.id) {
          return false;
        }
        return true;
      });
    case 'UPDATE_DIAL_ORDER':
      return state.map(dial => {
        const matchingDial = payload.find(
          payloadDial => payloadDial.id === dial.id
        );
        if (matchingDial) {
          return matchingDial;
        }
        return dial;
      });
    default:
      return state;
  }
};

export default dialsReducer;
