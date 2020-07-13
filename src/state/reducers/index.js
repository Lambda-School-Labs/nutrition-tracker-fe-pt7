import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slices/slices.js";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;