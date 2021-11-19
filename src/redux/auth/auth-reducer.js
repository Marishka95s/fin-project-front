import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './auth-actions'

const initialState = {
    user: { name: null, email: null }
};

const user = createReducer(initialState, {
    [actions.registrationSuccess]: (_, { payload }) => payload.data,
    [actions.loginSuccess]: (_, { payload }) => payload.data.user,
    [actions.logoutRequest]: () => initialState,
    [actions.getCurrentUserSuccess]: (_, { payload }) => payload.data.data.user
});

const token = createReducer(null, {
    [actions.registrationSuccess]: (_, { payload }) => payload.data.token,
    [actions.loginSuccess]: (_, { payload }) => payload.data.token,
    [actions.logoutSuccess]: () => null,
    [actions.logoutRequest]: () => null,
});

const isLoggedIn = createReducer(false, {
    [actions.registrationSuccess]: () => false,
    [actions.loginSuccess]: () => true,
    [actions.getCurrentUserSuccess]: () => true,
    [actions.logoutSuccess]: () => false,
    [actions.logoutRequest]: () => false,
    [actions.registrationError]: false,
    [actions.loginError]: false,
    [actions.getCurrentUserError]: false
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [actions.registrationError]: setError,
    [actions.loginError]: setError,
    [actions.logoutError]: setError,
    [actions.getCurrentUserError]: setError,
});

export default combineReducers({
    user,
    token,
    isLoggedIn,
    error
});
        // [authOperations.logOut.fulfilled](state) {
        //     state.user = { name: null, email: null };
        //     state.token = null;
        //     state.isLoggedIn = false;
        // },
