import { UserInterface } from '../components/UserHobbyList/UserHobbyList';
import { Store } from 'redux';

export const USERS_LOAD = 'USERS_LOAD';
export const USERS_LOAD_SUCCESS = 'USERS_LOAD_SUCCESS';
export const USERS_LOAD_FAILED = 'USERS_LOAD_FAILED';

export const USER_ADD = 'USER_ADD';
export const USER_ADD_SUCCESS = 'USER_ADD_SUCCESS';
export const USER_ADD_FAILED = 'USER_ADD_FAILED';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';

export interface usersInterface {
  isLoading: boolean;
  data: Array<UserInterface>;
  error: string;
}

//interface for redux store
export interface ReduxStoreInterface extends Store {
  users: usersInterface;
}
