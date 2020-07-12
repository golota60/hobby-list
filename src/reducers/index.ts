import { combineReducers } from "redux";
import { hobbyReducer } from "./hobbyReducer";

const rootReducer = combineReducers({
  users: hobbyReducer,
})

export default rootReducer;