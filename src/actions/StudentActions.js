import {Actions} from 'react-native-router-flux';
import firebase from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {STUDENT_CHANGED, 
        CREATE_REQUEST, 
        CREATE_REQUEST_SUCCESS, 
        STUDENT_LIST_DATA_SUCCESS,
        UPDATE_REQUEST, 
        UPDATE_REQUEST_SUCCESS,
        DELETE_REQUEST,
        DELETE_REQUEST_SUCCESS} from './types';

export const studentChange = ({props, value}) => {
    return (dispatch) => {
        dispatch({
            type: STUDENT_CHANGED,
            payload: {props, value}
        });
    };
};

export const studentCreate = ({firstname, lastname, studentid, branch}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: CREATE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
        .push({firstname, lastname, studentid, branch})
        .then(() => {
            dispatch({ type: CREATE_REQUEST_SUCCESS });
            Actions.pop();
        });
    };
};

export const studentUpdate = ({firstname, lastname, studentid, branch, uid}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: UPDATE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler/${uid}`)
        .set({firstname, lastname, studentid, branch})
        .then(() => {
            dispatch({ type: UPDATE_REQUEST_SUCCESS });
            Actions.pop();
        });
    };
};

export const studentDelete = ({uid}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: DELETE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: DELETE_REQUEST_SUCCESS });
            Actions.pop();
        });
    };
};

export const studentListData = () => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
        .on('value', snapshot => {
            dispatch({ type: STUDENT_LIST_DATA_SUCCESS, payload: snapshot.val()});
        })
    };
};