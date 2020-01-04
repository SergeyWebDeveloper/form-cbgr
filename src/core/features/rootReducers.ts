import { combineReducers } from "@reduxjs/toolkit";
import form from "./formSlice";

const rootReducer = combineReducers({
  form
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
