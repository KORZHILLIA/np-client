import { combineReducers } from "@reduxjs/toolkit";
import tnnReducer from "./tnn/tnn-reducer";

const rootReducer = combineReducers({
  tnn: tnnReducer,
});

export default rootReducer;
