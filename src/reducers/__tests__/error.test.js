import errorReducer from '../errorReducer';
import { ERROR } from '../../actions/types';

it('handles actions of type ERROR when true payload', () => {
  const action = {
    type: ERROR,
    payload: true
  };

  const newState = errorReducer([], action);

  expect(newState).toEqual(true);
});

it('handles action with unknown type', () => {
  const newState = errorReducer([], { type: 'NUFLO' });

  expect(newState).toEqual(false);
});