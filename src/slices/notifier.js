import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
};

const slice = createSlice({
  name: 'notifier',
  initialState,
  reducers: {
    addNotif: (state, action) => {
      state.notifications = [
        ...state.notifications,
        {
          key: action.payload.key,
          ...action.payload.notification,
        },
      ];
    },
    closeNotif: (state, action) => {
      state.notifications = state.notifications.map((notification) =>
        action.payload.dismissAll || notification.key === action.payload.key
          ? { ...notification, dismissed: true }
          : { ...notification }
      );
    },
    removeNotif: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.key !== action.payload.key
      );
    },
  },
});

export const reducer = slice.reducer;

export const enqueueSnackbar = (notification) => (dispatch) => {
  const key = notification.options && notification.options.key;
  try {
    const res = {
      notification: {
        ...notification,
        key: key || new Date().getTime() + Math.random(),
      },
    };
    dispatch(slice.actions.addNotif(res));
  } catch (e) {
    return console.error(e.message);
  }
};

export const closeSnackbar = (key) => (dispatch) => {
  try {
    const res = {
      dismissAll: !key, // dismiss all if no key has been defined
      key,
    };
    dispatch(slice.actions.closeNotif(res));
  } catch (e) {
    return console.error(e.message);
  }
};

export const removeSnackbar = (key) => (dispatch) => {
  try {
    const res = {
      key,
    };
    dispatch(slice.actions.removeNotif(res));
  } catch (e) {
    return console.error(e.message);
  }
};

export default slice;
