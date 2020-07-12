import {
  USERS_LOAD,
  USERS_LOAD_SUCCESS,
  USERS_LOAD_FAILED,
  USER_ADD_SUCCESS,
  USER_ADD_FAILED,
  USER_ADD,
  usersInterface,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from '../constants';
import { UserInterface } from '../components/UserHobbyList/UserHobbyList';

export const userReducer = (
  state = {} as usersInterface,
  action: ReducerProps<UserInterface>,
) => {
  switch (action.type) {
    case USERS_LOAD:
      return {
        isLoading: true,
      };
    case USERS_LOAD_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
      };
    case USERS_LOAD_FAILED:
      return {
        error: action.payload,
        isLoading: false,
      };
    case USER_ADD:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case USER_ADD_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
