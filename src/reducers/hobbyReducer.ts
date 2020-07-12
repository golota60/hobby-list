import {
  USERS_LOAD,
  USERS_LOAD_SUCCESS,
  USERS_LOAD_FAILED,
} from '../constants';
import { UserInterface } from '../components/UserHobbyList/UserHobbyList';

export const hobbyReducer = (
  state = [] as Array<UserInterface>,
  action: ReducerProps<UserInterface>,
) => {
  switch (action.type) {
    case USERS_LOAD:
      return action.payload;
    case USERS_LOAD_SUCCESS:
      return action.payload;
    case USERS_LOAD_FAILED:
      return action.payload;
    default:
      return state;
  }
};
