import axios from "axios";
import * as actions from './auth-actions'
axios.defaults.baseURL = 'https://fin-project-group4.herokuapp.com/api';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};
const registration = ({ email, password, name }) => dispatch => {
  dispatch(actions.registrationRequest())
  axios.post('/auth/signup', { email, password, name })
    .then((data) => {
      token.set(data.token);
      dispatch(actions.registrationSuccess(data))
    }).catch((error) => {
      dispatch(actions.registrationError(error.message))
    })
}
const login = ({ email, password }) => dispatch => {
  dispatch(actions.loginRequest())
  axios.post('auth/login', { email, password })
    .then(data => {
      token.set(data.token)
      dispatch(actions.loginSuccess(data))
    }).catch((error) => {
      dispatch(actions.loginError(error.message))
    })
}

const logout = () => dispatch => {
  dispatch(actions.loginRequest())
  axios.get('/auth/logout')
    .then(() => {
      token.unset();
      dispatch(actions.logoutSuccess());
    }).catch(error => {
      dispatch(actions.logoutError(error.message));
    })
}


const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  await dispatch(actions.getCurrentUserRequest());

  axios.get('/auth/current')
    .then((response) => {
      dispatch(actions.getCurrentUserSuccess(response))
    })
    .catch((error) => {
      dispatch(actions.getCurrentUserRequest(error.message));
    })
}

const operations = {
  registration,
  login,
  logout,
  getCurrentUser
};

export default operations;