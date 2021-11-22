// import axios from 'axios';
// axios.defaults.baseURL = 'https://fin-project-group4.herokuapp.com/api/';
// const fetchBalanceAPI = async => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();
//   if (!persistedToken) {
//     return;
//   }

//   try {
//     axios.defaults.headers.common.Authorization = `${token}`; //Bearer  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     const { data } = await axios.get(`/auth/current`);
//     return data;
//   } catch (error) {
//     throw new Error(`${error.message}`);
//   }
// };

// export { fetchBalanceAPI };
