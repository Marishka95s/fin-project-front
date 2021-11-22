import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    openModalTransaction,
    closeModalTransaction,
    fetchTransactionSuccess,
    addTransactionSuccess,
    getQueryStatisticsSuccess,
    getTransactionCategoriesSuccess,
} from './transactions-actions';
import {logoutSuccess} from '../auth/auth-actions'

const modalTransaction = createReducer(false, {
    [openModalTransaction]: () => true,
    [closeModalTransaction]: () => false,
});

const allTransactions = createReducer([], {
    [addTransactionSuccess]: (state, { payload }) => {return [payload, ...state]},
    [fetchTransactionSuccess]: (_, { payload }) => payload,
    [logoutSuccess]: () => [],
});

const queryStatistics = createReducer([], {
    [getQueryStatisticsSuccess]: (_, { payload }) => payload,
});


const transactionCategories = createReducer([], {
    [getTransactionCategoriesSuccess]: (_, { payload }) => [...payload],
});

export default combineReducers({
    modalTransaction,
    allTransactions,
    queryStatistics,
    transactionCategories
}) 
