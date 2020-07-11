import { combineReducers } from "redux";
import { ageReducer } from "./ageReducer";

const rootReducer = combineReducers({
  age: ageReducer
})

export default rootReducer;