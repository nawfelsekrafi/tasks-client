import { combineReducers } from "@reduxjs/toolkit";
import { reducer as notifierReducer } from "../slices/notifier";

const combinedReducer = combineReducers({
  notifier: notifierReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
