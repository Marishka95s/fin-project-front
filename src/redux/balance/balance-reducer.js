//import { combineReducers } from redux;
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  fetchBalancePending,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './balance-actions';
import {logoutSuccess} from '../auth/auth-actions'

const balance = createReducer('----', {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => '----',
});

const balanceIsLoading = createReducer(false, {
  [fetchBalancePending]: () => true,
  [fetchBalanceSuccess]: () => false,
  [fetchBalanceError]: () => false,
});

const balanceError = createReducer(null, {
  [fetchBalanceError]: (_, { payload }) => payload,
  [fetchBalancePending]: () => null,
});

export default combineReducers({
  balance,
  balanceIsLoading,
  balanceError,
});