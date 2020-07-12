import takeLatest from 'redux-saga';
import {
  USERS_LOAD,
  ReduxStoreInterface,
  USER_ADD,
  UPDATE_USER,
  DELETE_USER,
} from '../constants';
import { select, call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsers, addUser, updateUser, deleteUser } from '../api/userApi';
import allActions from '../actions';
import { UserInterface } from '../components/UserHobbyList/UserHobbyList';

export function* handleUsersLoad() {
  try {
    const users = yield call(fetchUsers);
    yield put(allActions.userActions.setUsers(users));
  } catch (err) {
    console.error(err);
    yield put(allActions.userActions.setUsersFailed(err.toString()));
  } finally {
  }
}

export function* handleAddUser(action: ReducerProps<UserInterface>) {
  try {
    yield call(() => addUser(action.payload));
    yield put(allActions.userActions.addUserSuccess());
    yield put(allActions.userActions.loadUsers());
  } catch (err) {
    console.error(err);
    yield put(allActions.userActions.addUserFailed(err.toString()));
  }
}

export function* handleUpdateUser(action: ReducerProps<UserInterface>) {
  try {
    yield call(() => updateUser(action.payload));
    yield put(allActions.userActions.updateUserSuccess());
    yield put(allActions.userActions.loadUsers());
  } catch (err) {
    console.error(err);
    yield put(allActions.userActions.updateUserFailed(err.toString()));
  }
}

export function* handleDeleteUser(action: ReducerProps<UserInterface>) {
  try {
    yield call(() => deleteUser(action.payload));
    yield put(allActions.userActions.deleteUserSuccess());
    yield put(allActions.userActions.loadUsers());
  } catch (err) {
    console.error(err);
    yield put(allActions.userActions.updateUserFailed(err.toString()));
  }
}

export default function* watchUsersLoad() {
  yield takeEvery(USERS_LOAD, handleUsersLoad);
  yield takeEvery(USER_ADD, handleAddUser);
  yield takeEvery(UPDATE_USER, handleUpdateUser);
  yield takeEvery(DELETE_USER, handleDeleteUser);
}
