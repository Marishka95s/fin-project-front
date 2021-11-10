import { createSlice } from "@reduxjs/toolkit";
import authOperations from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false, 
    isFetchingCurrentUser: false,
    authError: null,
    regError: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.register.rejected](state, action) {
            state.regError = action.payload;
        },

        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.rejected](state, action) {
            state.authError = action.payload;
          },

        [authOperations.logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },

        [authOperations.fetchCurrentUser.pending](state) {
            state.isFetchingCurrentUser = true;
          },
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [authOperations.fetchCurrentUser.rejected](state) {
            state.isFetchingCurrentUser = false;
          },
    },
});

export default authSlice.reducer;