import axios from 'axios';

export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

export function logIn() {
    return {
        type: LOG_IN
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}

export function logInSuccess(token) {
    return {
        type: LOG_IN_SUCCESS,
        token
    }
}

export function logInFailure(err) {
    return {
        type: LOG_IN_FAILURE,
        error: err
    }
}
