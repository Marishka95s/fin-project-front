import axios from 'axios';
import * as actions from './auth-actions'
import toastr from 'toastr';

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
      dispatch(actions.registrationSuccess(data))
      toastr.success('Регистрация прошла успешно!');

      setTimeout(() => {
        dispatch(actions.loginRequest())
        axios.post('/auth/login', { email, password })
        .then(data => {
          token.set(data.token)
          dispatch(actions.loginSuccess(data))
          toastr.success('Авторизация прошла успешно!');
        }).catch((error) => {
          dispatch(actions.loginError(error.message))
          toastr.error(error.message)
        })
          console.log("Second log");
        }, 3000);

    })
    .catch((error) => {
      dispatch(actions.registrationError(error.message))
      toastr.error(error.message);
    })

    
}
const login = ({ email, password }) => dispatch => {
  dispatch(actions.loginRequest())
  axios.post('/auth/login', { email, password })
    .then(data => {
      token.set(data.token)
      dispatch(actions.loginSuccess(data))
      toastr.success('Авторизация прошла успешно!');
    }).catch((error) => {
      dispatch(actions.loginError(error.message))
      toastr.error(error.message)
    })
}
const logout = () => dispatch => {
  dispatch(actions.logoutRequest())
  toastr.success('Вы вышли из учетной записи');
  axios.get('/auth/logout')
    .then(() => {
      token.unset();
      dispatch(actions.logoutSuccess());
    }).catch(error => {
      dispatch(actions.logoutError(error.message));
      toastr.error(error.message)
    })
    .catch(error => {
      dispatch(actions.logoutError(error.message));
    });
};

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
    .then((data) => {
      dispatch(actions.getCurrentUserSuccess(data))
    })
    .catch(error => {
      dispatch(actions.getCurrentUserRequest(error.message));
      toastr.error(error.message)
    })
}

const operations = {
  registration,
  login,
  logout,
  getCurrentUser,
};

export default operations;