import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { useDispatch } from 'react-redux';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any)
    .__REDUX_DEVTOOLS_EXTENSION__(
    )
    )
)
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
