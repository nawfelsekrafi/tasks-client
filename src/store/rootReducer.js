import { combineReducers } from '@reduxjs/toolkit';

const combinedReducer = combineReducers({
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
