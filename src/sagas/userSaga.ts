import takeLatest  from 'redux-saga';
import { USERS_LOAD, ReduxStoreInterface, USER_ADD } from '../constants';
import { select, call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsers, addUser } from '../api/userApi';
import allActions from '../actions';
import { UserInterface } from '../components/UserHobbyList/UserHobbyList';

export function* handleUsersLoad() {
  try {
    const users = yield call(fetchUsers);
    yield put(allActions.userActions.setUsers(users));
  } catch(err) {
    console.error(err);
    yield put(allActions.userActions.setError(err.toString()));
  } finally {
  }
}

export function* handleAddUser(action: ReducerProps<UserInterface>) {
  try {
    yield call(() => addUser(action.payload));
    const users = yield call(fetchUsers);    
    yield put(allActions.userActions.setUsers(users));
  } catch(err) {
    console.error(err);
    yield put(allActions.userActions.setError(err.toString()));

  }
}

export default function* watchUsersLoad() {
  yield takeEvery(USERS_LOAD, handleUsersLoad);
  yield takeEvery(USER_ADD, handleAddUser);
}
