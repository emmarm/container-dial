const addDial = dial => ({
  type: 'ADD_DIAL',
  payload: dial
});

const setTheme = theme => ({
  type: 'SET_THEME',
  payload: theme
});

const setContainer = container => ({
  type: 'SET_CONTAINER',
  payload: container
});

export { addDial, setTheme, setContainer };
