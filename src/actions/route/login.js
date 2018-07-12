
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

        // fetch(api_uri, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0",
        //         'Accept': 'application/json'
        //     },
        //     body: 'username=' + username + '&password=' + password
        // }).then(res => {
        //     console.log(res)
        //     if (res.status === 200) {
        //         return res;
        //     } else {
        //         var error = new Error(response.statusText)
        //         error.response = response
        //         throw error
        //     }
        // }).then(res => res.json())
        // .then(data => {
        //       dispatch(logInSuccess(data.id));
        // }).catch(error => {
        //     dispatch(logInFailure(error));
        // })

    }
}