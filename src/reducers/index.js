import { combineReducers } from 'redux';
import playGameReducer from './playGameReducer';
import totalReducer from './totalReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    roundResult: playGameReducer,
    totalResult: totalReducer,
    error: errorReducer,
});