import { SET_AGE } from "../constants"

const initialState = 0;

export const ageReducer = (state = initialState, action: ReducerProps) => {
  switch(action.type) {
    case SET_AGE:
      return action.payload;
    default: 
      return state;
  }
}