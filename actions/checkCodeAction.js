import { TYPING_CODE } from './types';

export const checkCodeComponent = (value) => {
    return {
        type: TYPING_CODE,
        payload: value
    };
};
