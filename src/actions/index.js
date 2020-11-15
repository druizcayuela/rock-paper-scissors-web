import axios from 'axios';
import { LOADING, NO_LOADING  } from './types';


export const showLoading = () => async dispatch => {
    dispatch({ type: LOADING });
};

export const clearLoading = () => async dispatch => {
    dispatch({ type: NO_LOADING });
};