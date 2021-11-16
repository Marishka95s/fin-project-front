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



// import { createSelector } from "@reduxjs/toolkit";

// export const getTransactions = state => state.transactions.items;
// export const getFilter = state => state.transactions.filter;
// export const getTotalTransactions = state => state.transactions.items.length;
// export const getError = state => state.transactions.error;
// export const getLoadingStatus = state => state.transactions.loading;

// export const getFiltredTransactions = createSelector(
//     [getTransactions, getFilter],
//     (transactions, filter) => {
//       const normalizedFilter = filter.toLowerCase();  
//       return transactions.filter(transaction => transaction.name.includes(normalizedFilter),
//       );
//     },
//   );

// export const getFiltredTransactions = state => {
//     const transactions = getTransactions(state);
//     const filter = getFilter(state);
//     const normalizedFilter = filter.toLowerCase();
   
//     return transactions.filter(transaction => transaction.name.includes(normalizedFilter))};

