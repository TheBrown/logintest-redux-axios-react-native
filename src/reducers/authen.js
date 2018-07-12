import {
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT
} from '../actions/LoginAction';
import { saveToken, deleteToken } from '../localStorage';

const authenInitialState = {
    isAuthenticating: false,
    signInError: false,
    isAuthenticated: false,
    token: "",
    errMessage: ""
}

function authenReducer(state = authenInitialState, action) {
    switch(action.type) {
        case LOG_IN: 
            return {
                ...state,
                isAuthenticating: true
            }
        case LOG_IN_SUCCESS:
            saveToken(action.token);
            return {
                isAuthenticating: false,
                isAuthenticated: true,
                token: action.token,
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
                isAuthenticating: false,
                signInError: true,
                errMessage: action.error
            }
        case LOG_OUT:
            deleteToken()
            return {
                ...authenInitialState,
            }

        default:
            return state;
    }
}

export default authenReducer;