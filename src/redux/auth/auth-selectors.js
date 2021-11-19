const getIsLoggedIn = state => state.auth.isLoggedIn;

const getToken = state => state.auth.token; //added line to re-set token for statistics API

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;


const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getUserEmail,
    getToken,
};
export default authSelectors;
