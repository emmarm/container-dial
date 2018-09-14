const DEFAULT_STATE = [];

const dialsReducer = (state = DEFAULT_STATE, action) => {
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
    case 'DELETE_DIAL':
      return state.filter(dial => {
        const { container, siteUrl } = action.payload;
        if (dial.container === container && dial.siteUrl === siteUrl) {
          return false;
        }
        return true;
      });
    default:
      return state;
  }
};

export default dialsReducer;
