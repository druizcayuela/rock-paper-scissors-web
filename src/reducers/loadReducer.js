import { LOADING, NO_LOADING } from '../actions/types';

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return true;
        case NO_LOADING:
            return false;
        default:
            return false;
    }
}