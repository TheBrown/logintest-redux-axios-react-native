import { AsyncStorage } from 'react-native'

const TOKEN_KEY = "@TESTAPP:token";

export const saveToken = async (token) => {
    try{
        await AsyncStorage.setItem(TOKEN_KEY, token)
    }catch(err) {
        throw err
    }
}

export const getToken = async () => {
    try{
       const token = await AsyncStorage.getItem(TOKEN_KEY);
       if(token !== null){
           return token;
       }
    }catch(err) {
        throw err;
    }
    return null;
}

export const deleteToken = async () => {
    try{
        await AsyncStorage.removeItem(TOKEN_KEY);
    }catch(err) {
        throw err
    }
}
