import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(token) {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
});

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  
  const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('None token');
      }
  
      token.set(persistedToken);
      try {
        const { data } = await axios.get('/users/current');
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );
  
  const operations = {
    register,
    logOut,
    logIn,
    fetchCurrentUser,
  };
  export default operations;