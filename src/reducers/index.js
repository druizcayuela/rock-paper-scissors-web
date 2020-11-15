import { combineReducers } from 'redux';
import loadReducer from './loadReducer';
import playGameReducer from './playGameReducer';
//import searchReducer from './searchReducer';

export default combineReducers({
    load: loadReducer,
    roundResult: playGameReducer,
    //totalResult: dataReducer,
});