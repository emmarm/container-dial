const DEFAULT_STATE = [
  {
    container: 'Default',
    image: null,
    imageDate: null
  }
];

const backgroundsReducer = (state = DEFAULT_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'SET_BACKGROUND':
      // if container already exists in state
      if (
        state.filter(background => background.container === payload.name)
          .length > 0
      ) {
        return state.map(background => {
          // only for matching container
          if (background.container === payload.name) {
            // and only if image is not yet updated
            if (background.imageDate !== new Date().toDateString()) {
              // then update the matching container
              return payload;
            }
            // if background doesn't match container, return unchanged
            return background;
          }
          return state;
        });
      } else {
        // if container doesn't exist yet, add it
        return [...state, payload];
      }
    default:
      return state;
  }
};

export default backgroundsReducer;
