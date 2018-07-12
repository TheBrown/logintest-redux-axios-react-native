
import { logIn, logInSuccess, logInFailure } from '../LoginAction'
import axios from 'axios';
import api from '../../api/uri.config';

export function authenticate(username, password) {
    return (dispatch) => {

        dispatch(logIn());
        const api_uri = api.uir.userLogin + 'Users/login';
        const body = {
            username: username,
            password: password
        }

        axios.post(api_uri, body).then(ress =>{
            console.log(ress)
            if(ress.status === 200){
                const token = ress.data.id
                dispatch(logInSuccess(token));
            }else {
                dispatch(logInFailure({ errcode: 401 }));
            }

        }).catch(errr =>{
            dispatch(logInFailure(errr));
        });
    }
}