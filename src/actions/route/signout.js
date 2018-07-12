
import { logOut, logInFailure } from '../LoginAction'
import axios from 'axios';
import api from '../../api/uri.config';
import { getToken } from '../../localStorage/';

export function signout() {
    return (dispatch) => {
        getToken().then(token => {
            console.log("token: " + token)
            const api_url = api.uir.userLogin + 'Users/logout?access_token=' + token;
            console.log("uri : " + api_url)
            axios.post(api_url, "{}", { headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } }).then(res => {
                console.log(res);
                if (res.status === 204) {
                    dispatch(logOut());
                } 
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });

    }
}