import { TYPING_CODE } from '../actions/types';

const INITIAL_STATE = { code: null, loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPING_CODE: 
            return { ...state, code: action.payload };
        default: 
            return state;
    }
};
