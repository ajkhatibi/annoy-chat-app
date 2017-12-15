import { FIRST_PHONE_CHANGE, SUBMIT_CODE } from '../actions/types';

const INITIAL_STATE = { phone: null, loading: false };

export default (state = INITIAL_STATE, action) => {
    console.log('actions from reducers: ', action);
    switch (action.type) {
        case FIRST_PHONE_CHANGE: 
            return { ...state, phone: action.payload };
        case SUBMIT_CODE:
            return { ...state, loading: true };
        default: 
            return state;
    }
};
