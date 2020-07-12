import { UserInterface } from "../components/UserHobbyList/UserHobbyList";

export const USERS_LOAD = 'USERS_LOAD';
export const USERS_LOAD_SUCCESS = 'USERS_LOAD_SUCCESS';
export const USERS_LOAD_FAILED = 'USERS_LOAD_FAILED';

export const USER_ADD = 'USER_ADD';
export const USER_ADD_SUCCESS = 'USER_ADD_SUCCESS';
export const USER_ADD_FAILED = 'USER_ADD_FAILED';

export const HOBBY_ADD = 'HOBBY_ADD';
export const HOBBY_ADD_SUCCESS = 'HOBBY_ADD_SUCCESS';
export const HOBBY_ADD_FAILED = 'HOBBY_ADD_FAILED';

//interface for redux store
export interface ReduxStoreInterface {
  users: {
    isLoading: boolean;
    error: string;
    users: Array<UserInterface>;
  }
}