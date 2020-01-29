import createSagaMiddleware from 'redux-saga';
import { compose } from "redux";
import reducers from './index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

export default ({ initialState } = {}) => {
  let store = createStore(reducers, initialState, sagaMiddleware);
  let persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor }
}
