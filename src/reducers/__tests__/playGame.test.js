import playGameReducer from '../playGameReducer';
import { PLAY_GAME, RESET } from '../../actions/types';

it('handles actions of type play game', () => {
  const action = {
    type: PLAY_GAME,
    payload: 'nuflito',
  };

  const initialState = {
	counter: 5,
	roundsPlayed: ['nuflo'],
  }

  const newState = playGameReducer(initialState, action);

  expect(newState).toEqual({
	counter: 6,
	roundsPlayed: ['nuflito', 'nuflo'],
  });
});

it('handles actions of type reset', () => {
	const action = {
	  type: RESET,
	};
  
	const initialState = {
	  counter: 5,
	  roundsPlayed: ['nuflo'],
	}
  
	const newState = playGameReducer(initialState, action);
  
	expect(newState).toEqual({
	  counter: 0,
	  roundsPlayed: [],
	});
  });

