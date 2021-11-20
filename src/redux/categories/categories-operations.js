import axios from 'axios';
import * as actions from './categories-actions';
import toastr from 'toastr';

const getCategories = () => async dispatch => {
    dispatch(actions.getCategoriesRequest());
    try {
        const { data } = await axios.get('/categories');
        dispatch(actions.getCategoriesSuccess(data.result));
    } catch (error) {
        dispatch(actions.getCategoriesError(error.message));
        toastr.error(error.message);
    }
};

export { getCategories };