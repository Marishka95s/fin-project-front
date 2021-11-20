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

const modalTransaction = createReducer(false, {
    [openModalTransaction]: () => true,
    [closeModalTransaction]: () => false,
});

const allTransactions = createReducer([], {
    [addTransactionSuccess]: (state, { payload }) => {return [payload, ...state]},
    [fetchTransactionSuccess]: (_, { payload }) => payload,
    
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



// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// import * as actions from './transactions-actions';

// const { fetchTransactionRequest, fetchTransactionSuccess, fetchTransactionError, addTransactionRequest, addTransactionSuccess, addTransactionError, deleteTransactionRequest, deleteTransactionSuccess, deleteTransactionError, updateTransactionRequest, updateTransactionSuccess, updateTransactionError, changeFilter } = actions;

// const items = createReducer([], {
//     [fetchTransactionSuccess]: (_, { payload }) => payload,

//     [addTransactionSuccess]: (state, { payload }) => [...state, payload],

//     [deleteTransactionSuccess]: (state, { payload }) => state.filter(transaction => transaction.id !== payload),
    
//     [updateTransactionSuccess]: (state, { payload }) => state.map(transaction => transaction.name === payload.name ? { ...transaction, number: payload.number } : transaction )
// });

// const loading = createReducer(false, {
//     [fetchTransactionRequest]: () => true,
//     [fetchTransactionSuccess]: () => false,
//     [fetchTransactionError]: () => false,
//     [addTransactionRequest]: () => true,
//     [addTransactionSuccess]: () => false,
//     [addTransactionError]: () => false,
//     [deleteTransactionRequest]: () => true,
//     [deleteTransactionSuccess]: () => false,
//     [deleteTransactionError]: () => false,
//     [updateTransactionRequest]: () => true,
//     [updateTransactionSuccess]: () => false,
//     [updateTransactionError]: () => false,
// })
           
// const filter = createReducer('', {
//     [changeFilter]: (_, { payload }) => payload
// });

// const error = createReducer(null, {
//     [fetchTransactionError]: (_, { payload }) => payload,
//     [addTransactionError]: (_, { payload }) => payload,
//     [deleteTransactionError]: (_, { payload }) => payload,
//     [updateTransactionError]: (_, { payload }) => payload,
//     [fetchTransactionRequest]: () => null,
//     [addTransactionRequest]: () => null,
//     [deleteTransactionRequest]: () => null,
//     [updateTransactionRequest]: () => null,
//   });

// export default combineReducers({ items, loading, filter, error });