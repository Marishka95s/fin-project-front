import axios from 'axios';
import { fetchTransactionRequest,
    fetchTransactionSuccess,
    fetchTransactionError,
    addTransactionRequest,
    addTransactionSuccess,
    addTransactionError,
    getQueryStatisticsRequest,
    getQueryStatisticsSuccess,
    getQueryStatisticsError,
    getTransactionCategoriesRequest,
    getTransactionCategoriesSuccess,
    getTransactionCategoriesError
    } from './transactions-actions'

    import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    //GET 
const fetchTransactions = () => async dispatch => {
    dispatch(fetchTransactionRequest());

    try {
        const { data } = await axios.get('/transactions');

        dispatch(fetchTransactionSuccess(data.data.transactions));
    } catch (error) {
        dispatch(fetchTransactionError(error.message));
    }
};

//POST
const addTransaction = transactionData => async dispatch => {

    dispatch(addTransactionRequest());

    try {
        const { data } = await axios.post('/transactions', transactionData);
        console.log("data", data.data.result)
        dispatch(addTransactionSuccess(data.data.result));
        
    } catch (error) {
        dispatch(addTransactionError(error.message));
        toast.error(' Недостаточно средств на счету', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
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

// getCategories
const getCategories = () => async dispatch => {
    dispatch(getTransactionCategoriesRequest());

    try {
        const { data } = await axios.get('/transactions/categories');
        dispatch(getTransactionCategoriesSuccess(data.data));
    } catch (error) {
        dispatch(getTransactionCategoriesError(error.message));
    }
};

export { fetchTransactions, addTransaction, getQueryStatistics, getCategories };



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
