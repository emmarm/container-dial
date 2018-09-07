import getRandomPhoto from '../utils/getRandomPhoto';

export const setTheme = theme => ({
  type: 'SET_THEME',
  payload: theme
});

export const setContainer = container => ({
  type: 'SET_CONTAINER',
  payload: container
});

export const startSetBackground = container => {
  return async dispatch => {
    let image;
    try {
      image = await getRandomPhoto(container.color);
    } catch (err) {
      image = '';
    }

    const containerWithImage = {
      container: container.name,
      image,
      imageDate: new Date().toDateString()
    };

    dispatch(setBackground(containerWithImage));
  };
};

export const setBackground = container => ({
  type: 'SET_BACKGROUND',
  payload: container
});
