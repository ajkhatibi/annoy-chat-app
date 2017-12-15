import { combineReducers } from 'redux';
import firebaseReducer from './firebaseReducer';
import checkCodeReducer from './checkCodeReducer';

export default combineReducers({
    firebaseReducer,
    checkCodeReducer
});
