import { 
    FIRST_PHONE_CHANGE,
    SUBMIT_CODE
 } from './types';

export const firstPhoneChange = (phone) => {
    return {
        type: FIRST_PHONE_CHANGE,
        payload: phone
    };
};

export const sendCodeSubmit = ({ phone }) => {
    return (dispatch) => {
        dispatch({ type: SUBMIT_CODE });
        console.log('logging actions for submit: ', phone);
    };
};
