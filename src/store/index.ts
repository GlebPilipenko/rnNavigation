import { postsSlice } from './reducers';
import { rootSagaWatcher } from './sagas';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

export const rootReducer = combineReducers({
  postsList: postsSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
  reducer: rootReducer,
});

sagaMiddleware.run(rootSagaWatcher);
