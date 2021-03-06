import { TOTAL } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOTAL:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}