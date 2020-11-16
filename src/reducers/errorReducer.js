import { ERROR } from '../actions/types';

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ERROR:
            return action.payload;
        default:
            return false;
    }
}