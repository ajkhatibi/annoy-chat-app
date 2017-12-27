import { combineReducers } from 'redux';
import firebaseReducer from './firebaseReducer';
import checkCodeReducer from './checkCodeReducer';
import mapReducer from './mapReducer';

export default combineReducers({
    firebaseReducer,
    checkCodeReducer,
    mapReducer
});
