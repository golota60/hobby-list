import {
  USERS_LOAD,
  USERS_LOAD_SUCCESS,
  USERS_LOAD_FAILED,
  USER_ADD,
  UPDATE_USER,
  USER_ADD_SUCCESS,
  USER_ADD_FAILED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from '../constants';
import {
  UserInterface,
  HobbyInterface,
} from '../components/UserHobbyList/UserHobbyList';

const loadUsers = () => ({
  type: USERS_LOAD
});

const setUsers = (users: Array<UserInterface> = []) => ({
  type: USERS_LOAD_SUCCESS,
  payload: users,
});

const setUsersFailed = (error: string) => ({
  type: USERS_LOAD_FAILED,
  payload: error,
});

const addUser = (user: UserInterface) => ({
  type: USER_ADD,
  payload: user,
});

const addUserSuccess = () => ({
  type: USER_ADD_SUCCESS,
});

const addUserFailed = (error: string) => ({
  type: USER_ADD_FAILED,
  payload: error
});

const updateUser = (user: UserInterface) => ({
  type: UPDATE_USER,
  payload: user
});

const updateUserSuccess = () => ({
  type: UPDATE_USER_SUCCESS,
});

const updateUserFailed = (error: string) => ({
  type: UPDATE_USER_FAILED,
  payload: error,
});

const deleteUser = (user: UserInterface) => ({
  type: DELETE_USER,
  payload: user
})

const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS
})

const deleteUserFailed = (error: string) => ({
  type: DELETE_USER_FAILED,
  error: error
})

export default {
  loadUsers,
  setUsers,
  setUsersFailed,
  addUser,
  addUserSuccess,
  addUserFailed,
  updateUser,
  updateUserSuccess,
  updateUserFailed,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailed,
};
