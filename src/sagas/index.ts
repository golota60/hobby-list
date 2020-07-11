import { takeLatest, put } from 'redux-saga/effects';
import { SET_AGE } from '../constants';

function* workerSaga() {
  console.log('hello from worker saga')
}

//watcher
export default function* rootSaga() {
  yield takeLatest(SET_AGE, workerSaga);
}
