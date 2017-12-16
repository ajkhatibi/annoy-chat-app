import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { TYPING_CODE, CHECKING_CODE, CODE_SUCCESS } from './types';

export const checkCodeComponent = (value) => {
    return {
        type: TYPING_CODE,
        payload: value
    };
};

export const checkCodeWithFirebase = ({ value, phone }) => {
    return (dispatch) => {
        dispatch({ type: CHECKING_CODE });
        console.log('actions submit code: ', value, phone);
        axios.post('https://us-central1-one-time-password-c4408.cloudfunctions.net/verifyOneTimePassword', { phone, code: value })
            .then(() => {
                dispatch({ type: CODE_SUCCESS });
                Actions.homePage({ type: 'reset' });
            })
            .catch(() => {
                console.log('there was an error');
            });
    };
};
