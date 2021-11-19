import axios from 'axios';
import { fetchTransactionRequest,
    fetchTransactionSuccess,
    fetchTransactionError,
    addTransactionRequest,
    addTransactionSuccess,
    addTransactionError,
    getQueryStatisticsRequest,
    getQueryStatisticsSuccess,
    getQueryStatisticsError
    } from './transactions-actions'


    //GET 
const fetchTransactions = () => async dispatch => {
    dispatch(fetchTransactionRequest());

    try {
        const { data } = await axios.get('/transactions');

        dispatch(fetchTransactionSuccess(data));
    } catch (error) {
        dispatch(fetchTransactionError(error.message));
    }
};

//POST
const addTransaction = transactionData => async dispatch => {

    dispatch(addTransactionRequest());

    try {
        const { data } = await axios.post('/transactions', transactionData);

        dispatch(addTransactionSuccess(data));
    } catch (error) {
    dispatch(addTransactionError(error.message));
    }
};

//GET
const getQueryStatistics = ({ month, year }) => async dispatch => {
    dispatch(getQueryStatisticsRequest());

    try {
        const { data } = await axios.get(`/transactions/statistics?month=${month}&year=${year}`);

        dispatch(getQueryStatisticsSuccess(data));
    } catch (error) {
        dispatch(getQueryStatisticsError(error));
        }
    };

export { fetchTransactions, addTransaction, getQueryStatistics };



// import axios from 'axios';
// import * as actions from './transactions-actions';

// const { fetchTransactionRequest, fetchTransactionSuccess, fetchTransactionError, addTransactionRequest, addTransactionSuccess, addTransactionError, deleteTransactionRequest, deleteTransactionSuccess, deleteTransactionError, updateTransactionRequest, updateTransactionSuccess, updateTransactionError } = actions;

// export const fetchTransaction = () => dispatch => {
//     dispatch(fetchTransactionRequest());

//     axios.get('/transactions').then(({ data }) => dispatch(fetchTransactionSuccess(data))).catch(error => dispatch(fetchTransactionError(error)));
// };

// export const addTransaction = (transactions, name, number) => dispatch => {
//     // const isInTransactions = transactions.some(transaction => transaction.name === name);
//     //     if (isInTransactions) { 
//     //         let replaceAgreement = window.confirm(`${name} is already in transactions. Replace ${name} number?`);

//     //         if (!replaceAgreement) {
//     //             const update = { number };
//     //             dispatch(updateTransactionRequest());

//     //             axios
//     //             .patch(`/transactions/${name}`, update)
//     //             .then(({ data }) => dispatch(updateTransactionSuccess(data)))
//     //             .catch(error => dispatch(updateTransactionError(error)));
//     //         }
//     const isInTransactions = transactions.some(transaction => transaction.name === name);
//         if (isInTransactions) { 
//             alert(`${name} is already in transactions`);
//             return;
//         }    
//     const transaction = {
//         name, 
//         number
//     };

//     dispatch(addTransactionRequest());

//     axios.post('/transactions', transaction).then(({ data }) => dispatch(addTransactionSuccess(data))).catch(error => dispatch(addTransactionError(error)));
// // }
// };

// export const deleteTransaction = transactionId => dispatch => {
//     dispatch(deleteTransactionRequest());

//     axios.delete(`/transactions/${transactionId}`).then(() => dispatch(deleteTransactionSuccess(transactionId))).catch(error => dispatch(deleteTransactionError(error)));
// };

// export const updateTransaction = (transactionId, number) => dispatch => {
//     const update = { number };
//     dispatch(updateTransactionRequest());

//     axios.patch(`/transactions/${transactionId}`, update).then(({ data }) => dispatch(updateTransactionSuccess(data))).catch(error => dispatch(updateTransactionError(error)));
// };

// // const operations = { fetchTransaction, addTransaction, deleteTransaction, updateTransaction };
// // export default operations;
