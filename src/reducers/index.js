import { combineReducers } from 'redux';
import loadReducer from './loadReducer';
import playGameReducer from './playGameReducer';
import totalReducer from './totalReducer';

export default combineReducers({
    load: loadReducer,
    roundResult: playGameReducer,
    totalResult: totalReducer,
});