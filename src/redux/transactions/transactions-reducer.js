import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    openModalTransaction,
    closeModalTransaction,
    fetchTransactionSuccess,
    addTransactionSuccess,
    getQueryStatisticsSuccess,
} from './transactions-actions';

const modalTransaction = createReducer(false, {
    [openModalTransaction]: () => true,
    [closeModalTransaction]: () => false,
});

const allTransactions = createReducer([], {
    [fetchTransactionSuccess]: (_, { payload }) => payload,
});

const addTransactions = createReducer([], {
    [addTransactionSuccess]: (state, { payload }) => [...state, payload],
});

const queryStatistics = createReducer([], {
    [getQueryStatisticsSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
    modalTransaction,
    allTransactions,
    addTransactions,
    queryStatistics,
})