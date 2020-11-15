import { PLAY_GAME } from '../actions/types';

const INITIAL_STATE = {
	counter: 0,
	roundsPlayed: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAY_GAME:
            return { ...state, counter: state.counter + 1, roundsPlayed:  [action.payload, ...state.roundsPlayed]};

        default:
            return state;
    }
}