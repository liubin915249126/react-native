/**
 * Created by chenlin on 28/07/2017.
 */

import createSagaMiddleware from "redux-saga";
import FilesystemStorage from 'redux-persist-filesystem-storage'
import { persistStore, persistCombineReducers } from 'redux-persist';
import { applyMiddleware, combineReducers, createStore } from "redux";

// import screenTracking from './screenTracking'

// 1. create redux store: connects sagas, reducers
// 2. trigger the startup actions, currently: APP_INIT() only (see Root.js)
export default (reducers, sagas, action) => {
  const sagaMiddleware = createSagaMiddleware();

  let middlewares = [
    sagaMiddleware,
    // screenTracking,
  ];

  if (process.env.NODE_ENV === 'development') {
    let createLogger = require('redux-logger').createLogger;
    middlewares.push(createLogger());
  }

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

  //const store = createStoreWithMiddleware(combineReducers(reducers));
  const reducer = persistCombineReducers({
    key: 'root',
    // device contains udid (unique device id)
    whitelist: ['searchHistory', 'device'],
    storage: FilesystemStorage
  }, reducers);
  const store = createStoreWithMiddleware(reducer);

//   const persistConfig = {
//     debug: isDebug,
// };
  const persistor = persistStore(store);


  sagaMiddleware.run(sagas);

  if (action) {
    if (Array.isArray(action)) {
      action.forEach((item) => {
        store.dispatch(item);
      })
    } else {
      store.dispatch(action);
    }
  }
  return { persistor, store };
}