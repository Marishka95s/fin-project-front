const getBalance = state => state.balance.balance;
const getBalanceIsLoading = state => state.balance.balanceIsLoading;
const getBalanceError = state => state.balance.balanceError;

export { getBalance, getBalanceIsLoading, getBalanceError };
