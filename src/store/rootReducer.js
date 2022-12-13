import { combineReducers } from "@reduxjs/toolkit";
import { reducer as notifierReducer } from "../slices/notifier";
import { reducer as userReducer } from "../slices/user";
import { reducer as taskReducer } from "../slices/task";
const combinedReducer = combineReducers({
  notifier: notifierReducer,
  user: userReducer,
  tasks: taskReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
