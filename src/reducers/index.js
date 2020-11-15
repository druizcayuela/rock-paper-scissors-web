import { combineReducers } from 'redux';
import loadReducer from './loadReducer';
//import dataReducer from './dataReducer';
//import searchReducer from './searchReducer';

export default combineReducers({
    load: loadReducer,
    //totalResult: dataReducer,
    //roundResult: searchReducer,
});