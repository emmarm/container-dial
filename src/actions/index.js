/* global browser */
import getRandomPhoto from '../utils/getRandomPhoto';

export const startSetBackground = container => async dispatch => {
  const currentBackground = await browser.storage.sync.get([
    container.cookieStoreId
  ]);

  let backgroundObject;

  if (
    !currentBackground ||
    !currentBackground[container.cookieStoreId] ||
    currentBackground[container.cookieStoreId].imageDate !==
      new Date().toDateString()
  ) {
    let image;
    try {
      image = await getRandomPhoto(container.color);
    } catch (err) {
      image = '';
    }

    browser.storage.sync.set({
      [container.cookieStoreId]: {
        image,
        imageDate: new Date().toDateString()
      }
    });

    backgroundObject = {
      container: container.cookieStoreId,
      image,
      imageDate: new Date().toDateString()
    };
  } else {
    backgroundObject = {
      container: container.cookieStoreId,
      ...currentBackground[container.cookieStoreId]
    };
  }

  dispatch(setBackground(backgroundObject));
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
  const dialKey = `${dial.id}${dial.container}`;
  browser.storage.local.set({ [dialKey]: dial });

  dispatch(addDial(dial));
};

export const addDial = dial => ({
  type: 'ADD_DIAL',
  payload: dial
});

export const startDeleteDial = dial => async dispatch => {
  browser.storage.local.remove([dial.id.toString()]);

  dispatch(deleteDial(dial));
};

export const deleteDial = dial => ({
  type: 'DELETE_DIAL',
  payload: dial
});

export const startEditDial = (oldDial, newDial) => async dispatch => {
  browser.storage.local.set({ [oldDial.id]: newDial });

  dispatch(editDial(oldDial, newDial));
};

export const editDial = (oldDial, newDial) => ({
  type: 'EDIT_DIAL',
  payload: { oldDial, newDial }
});

export const startUpdateDialOrder = dials => async dispatch => {
  dials.forEach(dial => {
    browser.storage.local.set({ [dial.id]: dial });
  });

  dispatch(updateDialOrder(dials));
};

export const updateDialOrder = dials => ({
  type: 'UPDATE_DIAL_ORDER',
  payload: dials
});
