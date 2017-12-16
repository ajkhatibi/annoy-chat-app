import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
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
            .then((response) => {
                dispatch({ type: CODE_SUCCESS });
                firebase.auth().signInWithCustomToken(response.data.token);
                Actions.homePage();
            })
            .catch(() => {
                console.log('there was an error');
            });
    };
};
