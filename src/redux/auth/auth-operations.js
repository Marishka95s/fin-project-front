import axios from "axios";
import * as actions from './auth-actions'

axios.defaults.baseURL = 'https://fin-project-group4.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registration = ({ email, password, name }) => dispatch => {
  dispatch(actions.registrationRequest())
  axios.post('/auth/signup', { email, password, name })
    .then((response) => {
      console.log(response)
      dispatch(actions.registrationSuccess(response))
    }).catch((error) => {
      alert(error)
    })
}
const login = ({ email, password }) => dispatch => {
  dispatch(actions.loginRequest())
  axios.post('auth/login', { data: JSON.stringify({ email, password }) })
    .then(data => {
      token.set(data.token)
      return data
    }).catch((error) => {
      alert(error)
    })
}
// const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/auth/signup', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('None token');
//     }

//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

const operations = {
  registration,
  login,
  // logOut,
  // fetchCurrentUser,
};
export default operations;