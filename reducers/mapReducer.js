import { STATUS_FOR_MARKER, DESCRIPTION_FOR_MARKER, USER_NAME } from '../actions/types';

const INITIAL_STATE = { status: '', description: '', userName: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STATUS_FOR_MARKER:
            return { ...state, status: action.payload };
        case USER_NAME: 
            return { ...state, userName: action.payload, status: '' };
        case DESCRIPTION_FOR_MARKER:
            return { ...state, description: action.payload };
        default: 
            return state;
    }
};
