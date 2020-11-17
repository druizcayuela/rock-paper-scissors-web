import totalReducer from '../totalReducer';
import { TOTAL } from '../../actions/types';

it('handles actions of type total', () => {
  const action = {
    type: TOTAL,
    payload: {
		winner: 'New winner'
	}
  };

  const initialState = { winner: 'Initial winner' };

  const newState = totalReducer(initialState, action);

  expect(newState).toEqual({ winner: 'New winner' });
});
