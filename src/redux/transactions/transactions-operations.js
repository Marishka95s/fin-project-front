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