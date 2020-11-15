import axios from 'axios';
import { LOADING, NO_LOADING, PLAY_GAME, RESET, TOTAL } from './types';

export const playGame = () =>  async dispatch => {
	dispatch({ type: LOADING });
	const res = await axios.get('http://localhost:8080/api/v1/playround');
    dispatch({ type: PLAY_GAME, payload: res.data });
	dispatch({ type: NO_LOADING });
};

export const reset = () =>  async dispatch => {
    dispatch({ type: RESET });
};

export const getTotal = () =>  async dispatch => {
	dispatch({ type: LOADING });
	const res = await axios.get('http://localhost:8080/api/v1/total');
    dispatch({ type: TOTAL, payload: res.data });
	dispatch({ type: NO_LOADING });
};