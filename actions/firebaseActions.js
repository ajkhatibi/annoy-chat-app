import axios from 'axios';
import { Actions } from 'react-native-router-flux';
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
            })
            .then(() => {
                console.log('axios post success', phone);
                axios.post('https://us-central1-one-time-password-c4408.cloudfunctions.net/requestOneTimePassword', { phone })
                .then(() => {
                dispatch({ type: SUBMIT_SUCCESS });
                Actions.pageTwo();
                }).catch(error => console.log('error on second post: ', phone, error));
            }).catch(() => {
                console.log('error handling create user: ');
            });
    };
};

