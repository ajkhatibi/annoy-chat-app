import { 
    FIRST_PHONE_CHANGE, 
    SUBMIT_CODE,
    SUBMIT_SUCCESS 
} from '../actions/types';

const INITIAL_STATE = { phone: null, loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIRST_PHONE_CHANGE: 
            return { ...state, phone: action.payload };
        case SUBMIT_CODE:
            return { ...state, loading: true };
        case SUBMIT_SUCCESS:
            return { ...state, INITIAL_STATE };
        default: 
            return state;
    }
};
