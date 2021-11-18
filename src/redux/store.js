// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import transactionsReducer from './transactions/transactions-reducer';
import { authReducer } from './auth';
// import { balance } from './balance';
import { logger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

// const transactionsPersistConfig = {
//     key: 'transactions',
//     storage,
//     blacklist: ['filter'],
// };
// const rootReducer = combineReducers({
//     transactions: transactionsReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionsReducer,
    // balance: balance,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
