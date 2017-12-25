import { STATUS_FOR_MARKER } from './types';

export const statusAction = (status) => {
    return {
        type: STATUS_FOR_MARKER,
        payload: status
    };
};
