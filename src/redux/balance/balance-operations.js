import axios from 'axios';
import toastr from 'toastr';

import {
  fetchBalancePending,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './balance-actions';

//axios.defaults.baseURL = 'https://fin-project-group4.herokuapp.com/api/';
const fetchBalance = () => async dispatch => {
  dispatch(fetchBalancePending());
  //axios.defaults.baseURL = 'https://fin-project-group4.herokuapp.com/api/';
  //axios.defaults.headers.common.Authorization = `${token}`;
  // console.log(
  //   'axios.defaults.headers.common.Authorization:',
  //   axios.defaults.headers.common.Authorization,
  // );
  try {
    const { data } = await axios.get('/auth/current');
    if (data.status === 'success') {
      dispatch(fetchBalanceSuccess(data.data.user.balance)); //data.data.user.balance
    }
  } catch (error) {
    dispatch(fetchBalanceError(error.message));
    toastr.error(`fetchBalance: ${error.message}`);
  }
};

export { fetchBalance };
