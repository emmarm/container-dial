import getRandomPhoto from '../utils/getRandomPhoto';

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

const startSetBackground = container => {
  return async dispatch => {
    const image = await getRandomPhoto(container.color);

    const containerWithImage = {
      container: container.name,
      image,
      imageDate: new Date().toDateString()
    };

    dispatch(setBackground(containerWithImage));
  };
};

const setBackground = container => ({
  type: 'SET_BACKGROUND',
  payload: container
});

export { addDial, setTheme, setContainer, startSetBackground };
