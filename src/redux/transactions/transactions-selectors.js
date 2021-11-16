const getAllTransactions = state => state.transactions.allTransactions;
const getAddTransactions = state => state.transactions.addTransactions;
const getAllQueryStatistics = state => state.transactions.queryStatistics;
const getIsModalAddTransactionOpen = state => state.transactions.modalTransaction;

export {
  getAllTransactions,
  getAddTransactions,
  getAllQueryStatistics,
  getIsModalAddTransactionOpen,
};