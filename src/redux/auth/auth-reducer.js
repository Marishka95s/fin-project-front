import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './auth-actions'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false
};

const user = createReducer(initialState, {
    [actions.registrationSuccess]: (_, { payload }) => payload.data,
    [actions.loginSuccess]: (_, { payload }) => payload.data.user,
    [actions.logoutSuccess]: () => initialState,
    [actions.getCurrentUserSuccess]: (_, { payload }) => payload.data.user
});

const token = createReducer(null, {
    [actions.registrationSuccess]: (_, { payload }) => payload.data.token,
    [actions.loginSuccess]: (_, { payload }) => payload.data.token,
    [actions.logoutSuccess]: () => null,
});

const isLoggedIn = createReducer(false, {
    [actions.registrationSuccess]: () => true,
    [actions.loginSuccess]: () => true,
    [actions.getCurrentUserRequest]: () => true,
    [actions.getCurrentUserSuccess]: () => true,
    [actions.logoutSuccess]: () => false,
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

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     extraReducers: {
//         [authOperations.registration.fulfilled](state, action) {
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//         },
//         [authOperations.registration.rejected](state, action) {
//             state.regError = action.payload;
//         },

//         [authOperations.login.fulfilled](state, action) {
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//             state.isLoggedIn = true;
//         },
//         [authOperations.login.rejected](state, action) {
//             state.authError = action.payload;
//         },

        // [authOperations.logOut.fulfilled](state) {
        //     state.user = { name: null, email: null };
        //     state.token = null;
        //     state.isLoggedIn = false;
        // },

        // [authOperations.fetchCurrentUser.pending](state) {
        //     state.isFetchingCurrentUser = true;
        // },
        // [authOperations.fetchCurrentUser.fulfilled](state, action) {
        //     state.user = action.payload;
        //     state.isLoggedIn = true;
        //     state.isFetchingCurrentUser = false;
        // },
        // [authOperations.fetchCurrentUser.rejected](state) {
        //     state.isFetchingCurrentUser = false;
        // },
//     },
// });

// export default authSlice.reducer;