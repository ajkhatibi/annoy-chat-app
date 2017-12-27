import { STATUS_FOR_MARKER, USER_NAME } from './types';

export const statusAction = (status) => {
    return {
        type: STATUS_FOR_MARKER,
        payload: status
    };
};

export const createUserName = (value) => {
    return {
        type: USER_NAME,
        payload: value
    };
};
