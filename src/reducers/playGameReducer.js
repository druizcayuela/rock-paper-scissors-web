import { PLAY_GAME, RESET } from '../actions/types';

const INITIAL_STATE = {
	counter: 0,
	roundsPlayed: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAY_GAME:
            return { counter: state.counter + 1, roundsPlayed:  [action.payload, ...state.roundsPlayed]};
		case RESET:
			return INITIAL_STATE;
        default:
            return state;
    }
}