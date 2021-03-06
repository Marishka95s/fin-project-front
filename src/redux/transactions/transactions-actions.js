import { createAction } from '@reduxjs/toolkit';

export const fetchTransactionRequest = createAction('transactions/fetchTransactionRequest');
export const fetchTransactionSuccess = createAction('transactions/fetchTransactionSuccess');
export const fetchTransactionError = createAction('transactions/fetchTransactionError');

export const addTransactionRequest = createAction('transactions/addTransactionRequest');
export const addTransactionSuccess = createAction('transactions/addTransactionSuccess');
export const addTransactionError = createAction('transactions/addTransactionError');

export const deleteTransactionRequest = createAction('transactions/deleteTransactionRequest');
export const deleteTransactionSuccess = createAction('transactions/deleteTransactionSuccess');
export const deleteTransactionError = createAction('transactions/deleteTransactionError');

export const updateTransactionRequest = createAction('transactions/updateTransactionRequest');
export const updateTransactionSuccess = createAction('transactions/updateTransactionSuccess');
export const updateTransactionError = createAction('transactions/updateTransactionError');

export const changeFilter = createAction('transactions/changeFilter');