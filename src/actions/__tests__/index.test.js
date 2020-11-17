import { reset, resetError } from '../index';
import { RESET, ERROR } from '../types';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions redux', () => {

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
});