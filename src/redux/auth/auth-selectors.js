const getIsLoggedIn = state => state.auth.isLoggedIn;

const getToken = state => state.auth.token; //added line to re-set token for statistics API

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getAuthError = state => state.auth.authError;

const getRegError = state => state.auth.regError;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getIsFetchingCurrentUser,
  getAuthError,
  getRegError,
  getToken,
};
export default authSelectors;
