import axios from 'axios';
import { PLAY_GAME, RESET, TOTAL, ERROR } from './types';

const baseUrl = process.env.REACT_APP_API_URL;

export const playGame = () =>  async dispatch => {
	try {
		const res = await axios.get(`${baseUrl}/api/v1/playround`);
		dispatch({ type: PLAY_GAME, payload: res.data });
	} catch (e) {
		dispatch({ type: ERROR, payload: true });
	}
};

export const reset = () =>  async dispatch => {
    dispatch({ type: RESET });
};

export const getTotal = () =>  async dispatch => {
	try {
		const res = await axios.get(`${baseUrl}/api/v1/total`);
		dispatch({ type: TOTAL, payload: res.data });
	} catch (e) {
		dispatch({ type: ERROR, payload: true });
	}
};

export const resetError = () =>  async dispatch => {
    dispatch({ type: ERROR, payload: false });
};