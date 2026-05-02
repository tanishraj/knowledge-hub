import { combineReducers } from "redux";
import indiaReducer from "./india/india.reducer";
import australiaReducer from "./australia/australia.reducer";

export default combineReducers({
  indiaReducer,
  australiaReducer
});
