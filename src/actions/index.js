import getRandomPhoto from '../utils/getRandomPhoto';

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
      container: container.cookieStoreId,
      image,
      imageDate: new Date().toDateString()
    };

    dispatch(setBackground(containerWithImage));
  };
};

export const addDial = dial => ({
  type: 'ADD_DIAL',
  payload: dial
});

export const editDial = (oldDial, newDial) => ({
  type: 'EDIT_DIAL',
  oldDial,
  newDial
});

export const deleteDial = dial => ({
  type: 'DELETE_DIAL',
  payload: dial
});

export const setBackground = container => ({
  type: 'SET_BACKGROUND',
  payload: container
});
