/* global browser */
import getRandomPhoto from '../utils/getRandomPhoto';

export const startSetBackground = container => async dispatch => {
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

export const setBackground = container => ({
  type: 'SET_BACKGROUND',
  payload: container
});

export const setContainer = container => ({
  type: 'SET_CONTAINER',
  payload: container
});

export const setDials = dials => ({
  type: 'SET_DIALS',
  payload: dials
});

export const setCurrentDial = dial => ({
  type: 'SET_CURRENT_DIAL',
  payload: dial
});

export const startAddDial = dial => async dispatch => {
  browser.storage.local.set({ [dial.id]: dial });

  dispatch(addDial(dial));
};

export const addDial = dial => ({
  type: 'ADD_DIAL',
  payload: dial
});

export const deleteDial = dial => ({
  type: 'DELETE_DIAL',
  payload: dial
});

export const editDial = (oldDial, newDial) => ({
  type: 'EDIT_DIAL',
  oldDial,
  newDial
});

export const updateDialOrder = dialOrder => ({
  type: 'UPDATE_DIAL_ORDER',
  payload: dialOrder
});
