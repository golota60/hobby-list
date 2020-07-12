import {
  USERS_LOAD,
  USERS_LOAD_SUCCESS,
  USERS_LOAD_FAILED,
  USER_ADD,
  HOBBY_ADD,
  USER_ADD_SUCCESS,
  USER_ADD_FAILED,
  HOBBY_ADD_SUCCESS,
  HOBBY_ADD_FAILED,
} from '../constants';
import {
  UserInterface,
  HobbyInterface,
} from '../components/UserHobbyList/UserHobbyList';

const loadUsers = () => ({
  type: USERS_LOAD,
  payload: {
    users: [],
    isLoading: true,
  },
});

const setUsers = (users: Array<UserInterface> = []) => ({
  type: USERS_LOAD_SUCCESS,
  payload: {
    users: users,
    isLoading: false,
  },
});

const setError = (error: any) => ({
  type: USERS_LOAD_FAILED,
  payload: {
    users: [],
    error: error,
    isLoading: false,
  },
});

const addUser = (user: UserInterface) => ({
  type: USER_ADD,
  payload: user,
});

const addUserSuccess = () => ({
  type: USER_ADD_SUCCESS,
});

const addUserFailed = () => ({
  type: USER_ADD_FAILED,
});

const addHobby = (user: UserInterface, hobby: HobbyInterface) => ({
  type: HOBBY_ADD,
});

const addHobbySuccess = () => ({
  type: HOBBY_ADD_SUCCESS,
});

const addHobbyFailed = () => ({
  type: HOBBY_ADD_FAILED,
});

export default {
  loadUsers,
  setUsers,
  setError,
  addUser,
  addUserSuccess,
  addUserFailed,
  addHobby,
  addHobbySuccess,
  addHobbyFailed,
};
