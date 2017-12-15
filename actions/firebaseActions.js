import axios from 'axios';
import { 
    FIRST_PHONE_CHANGE,
    SUBMIT_CODE,
    SUBMIT_SUCCESS
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
        axios.post('https://us-central1-one-time-password-c4408.cloudfunctions.net/createUser', {
            phone
        }).then((response) => {
            console.log('axios post success', response);
            axios.post('https://us-central1-one-time-password-c4408.cloudfunctions.net/requestOneTimePassword', { phone })
                .then((secRes) => {
                    console.log('second promise: ', secRes);
                    dispatch({ type: SUBMIT_SUCCESS });
                })
                .catch((error) => {
                    console.log('error 2: ', error);
                });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};
