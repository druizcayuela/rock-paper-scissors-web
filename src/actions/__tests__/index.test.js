import { reset, resetError, playGame, getTotal } from '../index';
import { RESET, ERROR, PLAY_GAME, TOTAL } from '../types';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const baseUrl = process.env.REACT_APP_API_URL;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions redux', () => {

	beforeEach(() => {
		moxios.install();
	  });
	  
	  afterEach(() => {
		moxios.uninstall();
	  });

	it('should dispatch actions of reset', () => {
		const expectedActions = [
			{ type: RESET },
		];

		const store = mockStore();
		store.dispatch(reset());

		expect(store.getActions()).toEqual(expectedActions);
	});

	it('should dispatch actions of reset error', () => {
		const expectedActions = [
			{ type: ERROR, payload: false },
		];

		const store = mockStore();
		store.dispatch(resetError());

		expect(store.getActions()).toEqual(expectedActions);
	});

	it('should dispatch actions of play game', async () => {
		moxios.stubRequest(`${baseUrl}/api/v1/playround`, {
			status: 200,
			response: 'some data'
		});

		const expectedActions = [
			{ type: PLAY_GAME, payload: 'some data' },
		];
		
		const store = mockStore();
		await store.dispatch(playGame());

		expect(store.getActions()).toEqual(expectedActions);
	});

	it('should dispatch actions of error when play game has error response', async () => {
		moxios.stubRequest(`${baseUrl}/api/v1/playround`, {
			status: 404
		});

		const expectedActions = [
			{ type: ERROR, payload: true },
		];
		
		const store = mockStore();
		await store.dispatch(playGame());

		expect(store.getActions()).toEqual(expectedActions);
	});

	it('should dispatch actions of total', async () => {
		moxios.stubRequest(`${baseUrl}/api/v1/total`, {
			status: 200,
			response: 'total data'
		});

		const expectedActions = [
			{ type: TOTAL, payload: 'total data' },
		];
		
		const store = mockStore();
		await store.dispatch(getTotal());

		expect(store.getActions()).toEqual(expectedActions);
	});

	it('should dispatch actions of error when total has error response', async () => {
		moxios.stubRequest(`${baseUrl}/api/v1/total`, {
			status: 404
		});

		const expectedActions = [
			{ type: ERROR, payload: true },
		];
		
		const store = mockStore();
		await store.dispatch(getTotal());

		expect(store.getActions()).toEqual(expectedActions);
	});
});